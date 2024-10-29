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
    <input @change="onChooseImage" accept="image/png, image/jpeg" type="file" hidden ref="image" />
  </div>
</template>

<script setup lang="ts">
import ProfileBigIcon from "~/components/icons/ProfileBigIcon.vue";
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
const uploadAvatar = async (file) => {
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
    uploadPercentage.value.style.width = percentComplete + '%'
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {

    }
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      uploadState.value = 2
      emits('choose', responseData.url)
      setTimeout(() => {
        uploading.value = false
      }, 1000)
    } else {
      uploadState.value = 3
      console.error('Error:', xhr.statusText);
    }
  };
  xhr.send(form)
}
</script>

<style scoped>

</style>