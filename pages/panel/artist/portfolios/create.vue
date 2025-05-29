<template>
<div class="mt-[20px] w-full flex flex-col items-start justify-start pb-[108px] relative">
  <div class="w-full relative flex flex-row items-center justify-center py-[23px]">
    <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">نمونه کار</div>
    <BackIcon @click="goBack" class="absolute left-[30px]"/>
  </div>
  <div class="w-full flex flex-col my-[21px]">
    <div class="w-full flex flex-col gap-[12px] px-[14px] border-b border-b-[#A9A7A7]">
      <div class="w-full flex flex-row items-start justify-between gap-[12px]">
        <div class="w-full flex-col justify-start items-start">
          <div class="font-medium text-right text-black text-[14px] leading-[21px]">عنوان</div>
          <input
              v-model="form.title"
              class="w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[14px]"
              placeholder="کراتینه مو,کاشت مژه و..."
              maxlength="40"
            >
          <span class="w-full text-right text-[#828282] text-[12px] font-medium leading-[21px]">40 / {{ form.title.length }}</span>
        </div>
        <div class="flex flex-col min-w-[80px]">
          <img @click="openImageChooser" :src="getThumbnail" alt="" class="w-[80px] h-[80px]" />
          <span class="text-[12px] text-center">افزودن تصویر</span>
        </div>
        <input @change="onChooseImage" type="file" hidden multiple accept="image/*" ref="galleryChooser">
      </div>
      <div class="w-full flex flex-row justify-start items-start gap-[12px] mt-[7px] flex-wrap">
        <div class="relative" v-for="(img, i) in selectedImages" :key="i">
          <CloseIcon v-if="showRemoveImage(i)" @click="removeImage(i)" class="absolute top-[-12px] right-[-12px] z-10"/>
          <img class="w-[80px] h-[80px]" :src="img" alt="" @click="">
          <div v-show="uploading[i]" class="w-[80px] h-[80px] flex flex-col justify-center items-center px-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]">
            <div class="h-[5px] w-full ltr-dir bg-white rounded-[5px] relative">
              <div :class="`bg-green-300 rounded-[5px] h-[5px] w-[${uploadedFilesPercentages[i]}]`"></div>
              <div class="text-center text-white text-[12px] mt-2">{{ uploadedFilesPercentages[i] }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row items-start justify-between gap-[12px] mt-[7px]">
        <div class="w-full flex-col justify-start items-start">
          <div class="font-medium text-right text-black text-[14px] leading-[21px]">افزودن توضیحات</div>
          <textarea
              v-model="form.description"
              class="w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[14px]"
              placeholder="کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر ..."
              rows="4"
              maxlength="2000"
              dir="auto"
          >
          </textarea>
          <span class="w-full text-right text-[#828282] text-[12px] font-medium leading-[21px]">2000 / {{ form.description.length }}</span>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <ChooseServiceInput v-model="form.service" />
<!--      <ChooseMaintenanceInput v-model="form.maintenance" />-->
      <ChooseCallNumberInput
          :has-tel="form.has_tel"
          :has-phone-number="form.has_phone_number"
          :second-phone-number="form.second_phone_number"
          @update:has-tel="updateHasTel"
          @update:has-phone-number="updateHasPhoneNumber"
          @update:second-phone-number="updateSecondPhoneNumber"
      />
      <ChoosePriceInput
          :price="form.price"
          :discount-price="form.discount_price"
          @update:price="updatePrice"
          @update:discount-price="updateDiscountPrice"
      />
    </div>
  </div>
  <button
      @click="doSave"
      :disabled="loading"
      :class="[loading ? ' bg-[rgb(177,177,177)]' : ' bg-[#FF3CA0]']"
      class="absolute bottom-[30px] w-[calc(100%-46px)] left-[22px] right-[22px] cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px] ">
    <span v-if="loading">
      <LoadingComponent />
    </span>
    <span v-else>
      انتشار
    </span>
  </button>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
import ChooseServiceInput from "~/components/input/ChooseServiceInput.vue";
import ChoosePriceInput from "~/components/input/ChoosePriceInput.vue";
import ChooseCallNumberInput from "~/components/input/ChooseCallNumberInput.vue";
import LoadingComponent from "~/components/global/Loading.vue";
import Compressor from 'compressorjs';

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const app = useNuxtApp()
const router = useRouter()

const {$postRequest: postRequest} = useNuxtApp()

const galleryChooser = ref()
const loading = ref(false)
const form = ref({
  title: '',
  description: '',
  maintenance: '',
  service: null,
  price: 0,
  discount_price: 0,
  has_tel: false,
  has_phone_number: false,
  second_phone_number: '',
  images: []
})

const selectedImages = ref<string[]|ArrayBuffer[]|null[]>([])
const selectedFiles = ref([])
const uploadedFilesPercentages = ref([])
const uploadedFiles = ref([])
const uploading = ref([])

const goBack = () => {
  router.replace('/panel/artist/portfolios')
}

const updatePrice = (number: string) => {
  form.value.price = number
}

const updateDiscountPrice = (number: string) => {
  form.value.discount_price = number
}

const updateSecondPhoneNumber = (number: string) => {
  form.value.second_phone_number = number
}

const updateHasPhoneNumber = (has: boolean) => {
  form.value.has_phone_number = has
}

const updateHasTel = (has: boolean) => {
  form.value.has_tel = has
}

const openImageChooser = () => {
  galleryChooser.value?.click()
}

const onChooseImage = async (e) => {
  const files = e.target?.files
  if (files.length == 0) {
    return
  }
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = () => {
      selectedImages.value = [
        reader.result,
        ...selectedImages.value,
      ]
    };

    reader.readAsDataURL(files[i]);
  }
  selectedFiles.value = files
  await uploadImages()
}

const removeImage = (index) => {
  selectedImages.value.splice(index, 1)
  uploadedFiles.value.splice(index, 1)
}

const showRemoveImage = (index) => {
  return true
}

const uploadImages = async () => {
  const l = selectedFiles.value.length
  uploadedFilesPercentages.value = Array(l).fill('0%')
  uploadedFiles.value = Array(l).fill(null)
  uploading.value = Array(l).fill(true)
  for (let i = 0; i < l; i++) {
    await uploadImage(selectedFiles.value[i], i)
  }
}

const uploadImage = async (image, index) => {
  new Compressor(image, {
    quality: 0.35,
    convertSize: 0,
    mimeType: 'image/webp',
    success: async (compressedFile) => {
      console.log(compressedFile.size)
      await doUploadImage(compressedFile, index)
    },
    error: (err) => {
      console.error('Error compressing image:', err);
      app.$toast.error('خطا در فشرده‌سازی تصویر', { rtl: true });
    },
  });
}

const doUploadImage = async (img, index) => {
  const config = useRuntimeConfig()
  const form = new FormData()
  form.append('file', img)
  form.append('type', 'portfolio')
  const xhr = new XMLHttpRequest()
  const xsrf = useCookie('XSRF-TOKEN')
  const token = useCookie('token')
  xhr.open('post', config.public.uploadURL, true)
  xhr.withCredentials = true
  xhr.setRequestHeader('accept', `application/json`)
  xhr.setRequestHeader('X-Xsrf-Token', xsrf.value)
  xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)
  xhr.upload.onprogress = function (ev) {
    const percentComplete = (ev.loaded / ev.total) * 100;
    const displayPercent = Math.floor(Math.min(percentComplete * 0.9, 90));
    uploadedFilesPercentages.value[index] = displayPercent + '%'
  }
  xhr.onreadystatechange = function () {
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
      uploadedFilesPercentages.value[index] = '100%'
      uploadedFiles.value[index] = JSON.parse(xhr.responseText)
      setTimeout(() => {
        uploading.value[index] = false
      }, 1000)
    } else {
      // uploadState.value = 3
      // console.error('Error:', xhr.statusText);
    }
  };
  xhr.send(form)
}

const getThumbnail = computed(() => {
  return form.value.images.length > 0 ? form.value.images[0] : '/panel/choose-image.png'
})

const validated = () => {
  let validated = true
  if (!form.value.title) {
    app.$toast.error('لطفا عنوان نمونه کار را وارد کنید', {rtl: true})
    validated = false
  }
  if (selectedImages.value.length == 0) {
    app.$toast.error('لطفا عکس های نمونه کار را انتخاب کنید', {rtl: true})
    validated = false
  }
  if (!form.value.description) {
    app.$toast.error('لطفا توضیحات نمونه کار را وارد کنید', {rtl: true})
    validated = false
  }
  if (!form.value.service) {
    app.$toast.error('لطفا دسته بندی نمونه کار را انتخاب کنید', {rtl: true})
    validated = false
  }
  if (!form.value.has_phone_number && !form.value.has_tel) {
    app.$toast.error('لطفا شماره تماس رزرو نوبت را وارد کنید', {rtl: true})
    validated = false
  }
  if (!form.value.price) {
    app.$toast.error('لطفا قیمت نمونه کار را وارد کنید', {rtl: true})
    validated = false
  }

  return validated
}

const doSave = async () => {
  if (loading.value) return
  // if (!validated()) {
  //   return
  // }
  loading.value = true
  const data = {
    title: form.value.title,
    description: form.value.description,
    maintenance: form.value.maintenance,
    service_id: form.value.service?.id,
    price: form.value.price,
    discount_price: form.value.discount_price ? form.value.discount_price : 0,
    has_tel: form.value.has_tel,
    has_phone_number: form.value.has_phone_number,
    second_phone_number: form.value.second_phone_number,
    images: uploadedFiles.value.map(i => i.url),
  }

  postRequest('/own/portfolios', data)
      .then(async res => {
        app.$toast.success('نمونه کار با موفقیت ثبت شد')
        await router.push('/panel/artist/portfolios')
      })
      .catch(err => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }
      })
      .finally(() => {
        loading.value = false
      })
}
</script>

<style scoped>

</style>