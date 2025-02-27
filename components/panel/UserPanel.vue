<template>
  <div
      class="flex flex-col md:hide w-full h-full px-[17px] duration-700 ease-in-out bg-white"
  >
    <div class="flex flex-col justify-start items-center">
      <div class="flex flex-col justify-center items-center mt-[10px]">
        <div @click="openChooseImage" class="cursor-pointer w-full flex flex-col justify-center items-center">
          <div class="relative w-[153px] h-[153px] rounded-full">
            <img class="w-[153px] h-[153px] rounded-full" :src="tempImage" alt="" v-if="tempImage"/>
            <img :src="user.avatar" class="w-[153px] h-[153px] rounded-full" alt="" v-else-if="user.avatar"/>
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
      </div>
      <div class="w-full overflow-y-auto mt-[10px]">
        <TextInput title="نام و نام خانوادگی" v-model="form.full_name" class="mt-[27px]"/>
        <ChooseCityInput title="استان و شهر" v-model="form.city_id" class="mt-[27px]"/>
        <BirthDateInput title="تاریخ تولد" v-model="form.birth_date" class="mt-[27px]"/>
        <MainActionButton :disabled="loading" class="mt-[27px]" @click="doSaveProfile">
          <div v-if="loading">
            <LoadingComponent />
          </div>
          <div v-else class="text-white text-center text-[20px] leading-[30px]">ذخیره تغییرات</div>
        </MainActionButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";
import TextInput from "~/components/input/TextInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";
import ProfileBigIcon from "~/components/icons/ProfileBigIcon.vue";
import LoadingComponent from "~/components/global/Loading.vue";
const app = useNuxtApp()
const store = useDrawerStore()
const router = useRouter()

const auth = useAuthStore()
const user = ref(auth.user)
const loading = ref(false)

const form = ref<ICompleteProfileForm>({
  full_name: user.value?.full_name,
  birth_date: user.value?.birth_date,
  city_id: user.value?.city_id,
  avatar: user.value?.avatar,
})

const doSaveProfile = async () => {
  loading.value = true
  const {$putRequest: putRequest}=app
  putRequest('/own', form.value)
      .then(res => {
        app.$toast.success('تغییرات با موفقیت ثبت شد!', {rtl: true})
        router.push('/')
      })
      .catch(err => {
      })
      .finally(()=>{
        loading.value = false
      })
}


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
  const frm = new FormData()
  frm.append('file', file)
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
      form.value.avatar = responseData.url
      setTimeout(() => {
        uploading.value = false
      }, 1000)
    } else {
      uploadState.value = 3
    }
  };
  xhr.send(frm)
}
onMounted(()=>{
  useAuthStore().own()
})
</script>

<style scoped>

</style>