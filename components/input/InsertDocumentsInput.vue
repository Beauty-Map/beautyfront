<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div class="flex flex-row justify-between w-full">
      <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
           :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']">
        {{ title }}
      </div>
      <button @click.prevent="showBox"
              class="text-[12px] text-white flex flex-row justify-center items-center px-2 py-1 rounded-md bg-[#FF3CA0]">
        <PlusSmallIcon />
        مدرک جدید
      </button>
    </div>

    <div class="w-full flex flex-col justify-start items-start mt-[10px] gap-y-[10px]">
      <div v-for="(d,i) in documents" :key="i"
           class="cursor-pointer text-[#141414] font-semibold text-[16px] leading-[18px] flex flex-row justify-start items-center w-full">
        <img :alt="d.title" v-if="d.image" :src="d.image" class="w-10 h-10 rounded ml-2 object-cover" />
        <span>{{ d.title }}</span>
        <CloseSmallIcon @click="removeDocument(i)" class="mr-[10px]" />
      </div>
    </div>

    <Modal :show-close="false" :open="openBox">
      <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
        <div class="font-medium text-center text-[#133C3E] text-[22px] leading-[32px]">
          عنوان مدرک را وارد کنید
        </div>

        <input
            type="text"
            v-model="value"
            class="w-full border border-[#A9A7A7] rounded-[10px] h-[50px] px-4 mt-4 text-right placeholder:text-[#A9A7A7]"
            placeholder="مثال :جواز کسب یا کارت ملی یا ..."
        />

        <div class="w-full flex flex-col items-center mt-4">
          <input type="file" ref="imageInput" @change="onChooseImage" accept="image/*" hidden />
          <button @click="imageInput?.click()" class="text-blue-500 underline text-sm">انتخاب عکس</button>
          <img v-if="previewImage" :src="previewImage" class="w-20 h-20 mt-2 rounded object-cover" />
        </div>

        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
          <span @click="saveDocument" class="cursor-pointer">ذخیره</span>
          <span @click="closeBox" class="cursor-pointer">بستن</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import PlusSmallIcon from "~/components/icons/PlusSmallIcon.vue"
import CloseSmallIcon from "~/components/icons/CloseSmallIcon.vue"
import Compressor from "compressorjs";

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  title: { type: String, default: '' },
  modelValue: { type: Array, default: () => [] }
})

const value = ref<string>('')
const errorText = ref<string>('')
const openBox = ref(false)
const hasError = ref(false)
const documents = ref<{ title: string, image?: string }[]>([])
const imageInput = ref()
const selectedImage = ref<File | null>(null)
const previewImage = ref<string | null>(null)

onMounted(() => {
  if (props.modelValue && Array.isArray(props.modelValue)) {
    documents.value = [...props.modelValue]
  }
})

const showBox = () => {
  openBox.value = true
}

const closeBox = () => {
  value.value = ''
  selectedImage.value = null
  previewImage.value = null
  openBox.value = false
}

const removeDocument = (index: number) => {
  documents.value.splice(index, 1)
  validateTextDebounce()
}

const onChooseImage = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  selectedImage.value = file
  const reader = new FileReader()
  reader.onload = () => {
    previewImage.value = reader.result as string
  }
  reader.readAsDataURL(file)
  uploadImage(file)
}

const saveDocument = async () => {
  if (!value.value) return

  let imageUrl = ''
  if (selectedImage.value) {
    try {
      imageUrl = await uploadImage(selectedImage.value)
    } catch (e) {
      console.error('Image upload failed', e)
    }
  }

  documents.value.push({
    title: value.value,
    image: imageUrl
  })

  closeBox()
  validateTextDebounce()
}

const uploadImage = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.4,
      mimeType: 'image/webp',
      success: async (compressedFile) => {
        const frm = new FormData()
        frm.append('file', compressedFile)

        const config = useRuntimeConfig()
        const xsrf = useCookie('XSRF-TOKEN')
        const token = useCookie('token')
        const xhr = new XMLHttpRequest()

        xhr.open('post', config.public.uploadURL, true)
        xhr.withCredentials = true
        xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)
        xhr.setRequestHeader('accept', `application/json`)
        xhr.setRequestHeader('X-Xsrf-Token', xsrf.value)

        xhr.onload = () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            resolve(response.url)
          } else {
            reject('Upload failed')
          }
        }

        xhr.onerror = () => reject('XHR error')
        xhr.send(frm)
      },
      error: (err) => reject(err)
    })
  })
}

const validateTextNumber = () => {
  emits('update:modelValue', documents.value)
}
const validateTextDebounce = useDebounce(validateTextNumber, 500)
</script>

<style scoped>
</style>
