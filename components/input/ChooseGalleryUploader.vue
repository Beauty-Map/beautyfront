<template>
  <div>
    <h3 class="font-bold mb-2">گالری تصاویر</h3>
    <div class="w-full flex flex-row justify-start items-start gap-[12px] mt-[7px] flex-wrap">
      <div class="relative" v-for="(img, i) in galleries" :key="i">
        <CloseIcon @click="removeImage(i)" class="absolute top-[-12px] right-0 z-10"/>
        <img class="w-[80px] h-[80px] object-cover rounded" :src="img" alt="">
        <div v-if="uploading[i]" class="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm">
          <div class="w-[60px]">
            <div class="w-full h-[6px] bg-white rounded overflow-hidden">
              <div class="bg-green-400 h-full" :style="{ width: uploadedFilesPercentages[i] }"></div>
            </div>
            <div class="text-center mt-1">{{ uploadedFilesPercentages[i] }}</div>
          </div>
        </div>
      </div>

      <label
          v-if="galleries.length < 25"
          class="w-[80px] h-[80px] flex items-center justify-center border-dashed border-2 border-gray-400 aspect-square rounded cursor-pointer"
      >
        <input type="file" multiple class="hidden" accept="image/*" @change="handleFileChange" />
        <span class="text-2xl">+</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import Compressor from 'compressorjs'
import CloseIcon from "~/components/icons/CloseIcon.vue"

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const galleries = ref<string[]>([...props.modelValue])
const uploadedFilesPercentages = ref<string[]>([])
const uploading = ref<boolean[]>([])

watch(galleries, () => {
  emit('update:modelValue', galleries.value)
}, { deep: true })

const handleFileChange = async (e: Event) => {
  const input = e.target as HTMLInputElement
  const files = input.files
  if (!files) return

  const newFiles = Array.from(files)
  const maxAllowed = 25 - galleries.value.length
  const filesToUpload = newFiles.slice(0, maxAllowed)

  for (let i = 0; i < filesToUpload.length; i++) {
    await uploadImage(filesToUpload[i])
  }

  input.value = ''
}

const uploadImage = async (file: File) => {
  const index = galleries.value.length
  uploading.value[index] = true
  uploadedFilesPercentages.value[index] = '0%'

  const resized = await resizeImage(file)

  new Compressor(resized, {
    quality: 0.35,
    convertSize: 0,
    mimeType: 'image/webp',
    success: async (compressedFile) => {
      await doUploadImage(compressedFile, index)
    },
    error: (err) => {
      console.error('Error compressing image:', err)
    },
  })
}

const resizeImage = (file: File, maxWidth = 1280): Promise<File> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = function (event) {
      const img = new Image()
      img.onload = function () {
        const canvas = document.createElement('canvas')
        const scale = maxWidth / img.width
        canvas.width = maxWidth
        canvas.height = img.height * scale
        const ctx = canvas.getContext('2d')
        ctx!.drawImage(img, 0, 0, canvas.width, canvas.height)
        canvas.toBlob((blob) => {
          resolve(new File([blob!], file.name, { type: 'image/jpeg' }))
        }, 'image/jpeg', 0.9)
      }
      img.src = event.target!.result as string
    }
    reader.readAsDataURL(file)
  })
}

const doUploadImage = async (img: File, index: number) => {
  const config = useRuntimeConfig()
  const form = new FormData()
  form.append('file', img)
  form.append('type', 'portfolio')

  const xhr = new XMLHttpRequest()
  const xsrf = useCookie('XSRF-TOKEN')
  const token = useCookie('token')

  xhr.open('POST', config.public.uploadURL, true)
  xhr.withCredentials = true
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.setRequestHeader('X-Xsrf-Token', xsrf.value!)
  xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)

  xhr.upload.onprogress = (ev) => {
    const percent = (ev.loaded / ev.total) * 100
    const display = Math.min(percent * 0.9, 90).toFixed(0) + '%'
    uploadedFilesPercentages.value[index] = display
  }

  xhr.onload = () => {
    if (xhr.status === 200) {
      uploadedFilesPercentages.value[index] = '100%'
      const response = JSON.parse(xhr.responseText)
      galleries.value.push(response.url)
      setTimeout(() => {
        uploading.value[index] = false
      }, 500)
    } else {
      console.error('Upload failed:', xhr.statusText)
    }
  }

  xhr.send(form)
}

const removeImage = (index: number) => {
  galleries.value.splice(index, 1)
  uploadedFilesPercentages.value.splice(index, 1)
  uploading.value.splice(index, 1)
}
</script>
