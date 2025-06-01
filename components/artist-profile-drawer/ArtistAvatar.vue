<template>
  <div @click="openChooseImage" class="cursor-pointer w-full flex flex-col justify-center items-center">
    <div class="relative w-[153px] h-[153px] rounded-full">
      <img class="w-[153px] h-[153px] rounded-full" :src="tempImage" alt="" v-if="tempImage"/>
      <img :src="avatar" class="w-[153px] h-[153px] rounded-full" alt="" v-else-if="avatar"/>
      <ProfileBigIcon v-else/>
      <div v-show="uploading" class="w-[153px] h-[153px] flex flex-col justify-center items-center px-[10px] rounded-full absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]">
        <div class="h-[5px] w-full ltr-dir bg-white rounded-[5px] relative">
          <div class="bg-green-300 rounded-[5px] h-[5px] w-0" ref="uploadPercentage"></div>
          <div class="text-center text-white text-[12px] mt-2">{{ getUploadState }}</div>
        </div>
      </div>
    </div>
    <div class="text-[#141414] font-semibold text-[16px] leading-[24px] text-center mt-[5px]">تغییر عکس پروفایل</div>
    <input @change="onChooseImage" accept="image/*" type="file" hidden ref="image" />
  </div>
</template>

<script setup lang="ts">
import ProfileBigIcon from "~/components/icons/ProfileBigIcon.vue";
import Compressor from "compressorjs";
const props = defineProps({
  avatar: {
    type: String,
    default: null
  },
})
const emits = defineEmits(['choose'])

const uploading = ref(false)
const uploadState = ref(1)
const uploadPercentage = ref()
const image = ref()
const tempImage = ref<string|null|ArrayBuffer>(null)

const getUploadState = computed(() => {
  switch (uploadState.value) {
    case 2:
      return 'آپلود شد';
    case 3:
      return 'آپلود لغو شد';
    default:
      return ''
  }
})
const openChooseImage = () => {
  image.value?.click()
}

const onChooseImage = (e) => {
  const file = e.target?.files[0]
  if (!file) {
    tempImage.value = null
    return
  }
  const reader = new FileReader();

  reader.onload = () => {
    tempImage.value = reader.result;
  };

  reader.readAsDataURL(file);
  uploadAvatar(file)
}
const resizeImage = (file, maxWidth = 1280) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const scale = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          resolve(new File([blob], file.name, { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.9);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
};

const uploadAvatar = async (file) => {
  const resized = await resizeImage(file)
  new Compressor(resized, {
    quality: 0.35,
    convertSize: 0,
    mimeType: 'image/webp',
    success: async (compressedFile) => {
      await doUploadImage(compressedFile)
    },
    error: (err) => {
      console.error('Error compressing image:', err);
    },
  });
}
const doUploadImage = async (file) => {
  const config = useRuntimeConfig()
  uploading.value = true
  const form = new FormData()
  form.append('file', file)
  const xhr = new XMLHttpRequest()
  const xsrf = useCookie('XSRF-TOKEN')
  const token = useCookie("token")
  xhr.open('post', config.public.uploadURL, true)
  xhr.withCredentials = true
  xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)
  xhr.setRequestHeader('accept', `application/json`)
  xhr.setRequestHeader('X-Xsrf-Token', xsrf.value)
  xhr.upload.onprogress = function (ev) {
    const percentComplete = (ev.loaded / ev.total) * 100;
    const displayPercent = Math.min(percentComplete * 0.9, 90);
    uploadPercentage.value.style.width = displayPercent + '%'
  }
  xhr.onreadystatechange = function () {
      console.log(xhr.readyState)
      console.log(xhr.response)
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
      uploadPercentage.value.style.width = '100%'
      const responseData = JSON.parse(xhr.responseText);
      uploadState.value = 2
      emits('choose', responseData.url)
      setTimeout(() => {
        uploading.value = false
        image.value = ''
      }, 1000)
    } else {
      uploadState.value = 3
      uploading.value = false
      image.value = ''
      console.error('Error:', xhr.statusText);
    }
  };
  xhr.send(form)
}
</script>

<style scoped>

</style>