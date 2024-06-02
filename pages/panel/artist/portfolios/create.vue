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
          <div class="font-medium text-right text-black text-[16px] leading-[21px]">عنوان</div>
          <input
              v-model="form.title"
              class="w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]"
              placeholder="کراتینه مو,کاشت مژه و..."
              maxlength="40"
            >
          <span class="w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]">40 / {{ form.title.length }}</span>
        </div>
        <img @click="openImageChooser" :src="getThumbnail" alt="" class="w-[80px] h-[80px]" />
        <input @change="onChooseImage" type="file" hidden multiple accept="image/png, images/jpeg" ref="galleryChooser">
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
          <div class="font-medium text-right text-black text-[16px] leading-[21px]">افزودن توضیحات</div>
          <textarea
              v-model="form.description"
              class="w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]"
              placeholder="کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر ..."
              maxlength="200"
              rows="2"
          >
          </textarea>
          <span class="w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]">200 / {{ form.description.length }}</span>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <ChooseServiceInput v-model="form.service" />
      <ChooseMaintenanceInput v-model="form.maintenance" />
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
      class="absolute bottom-[30px] left-[22px] right-[22px] cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px] ">
    انتشار
  </button>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
import ChooseServiceInput from "~/components/input/ChooseServiceInput.vue";
import ChooseMaintenanceInput from "~/components/input/ChooseMaintenanceInput.vue";
import ChoosePriceInput from "~/components/input/ChoosePriceInput.vue";
import ChooseCallNumberInput from "~/components/input/ChooseCallNumberInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const app = useNuxtApp()
const router = useRouter()

const galleryChooser = ref()

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
  selectedFiles.value = []
  selectedImages.value = []
  const files = e.target?.files
  if (files.length == 0) {
    return
  }
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = () => {
      selectedImages.value.push(reader.result)
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
  const config = useRuntimeConfig()
  const form = new FormData()
  form.append('file', image)
  form.append('type', 'portfolio')
  const xhr = new XMLHttpRequest()
  const xsrf = useCookie('XSRF-TOKEN')
  xhr.open('post', config.public.uploadURL, true)
  xhr.withCredentials = true
  xhr.setRequestHeader('accept', `application/json`)
  xhr.setRequestHeader('X-Xsrf-Token', xsrf.value)
  xhr.upload.onprogress = function (ev) {
    const percentComplete = (ev.loaded / ev.total) * 100;
    // uploadPercentage.value.style.width = percentComplete + '%'
    uploadedFilesPercentages.value[index] = percentComplete + '%'
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {

    }
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
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

const doSave = async () => {
  const data = {
    title: form.value.title,
    description: form.value.description,
    maintenance: form.value.maintenance,
    service_id: form.value.service?.id,
    price: form.value.price,
    discount_price: form.value.discount_price,
    has_tel: form.value.has_tel,
    has_phone_number: form.value.has_phone_number,
    second_phone_number: form.value.second_phone_number,
    images: uploadedFiles.value.map(i => i.url),
  }
  const res = await useCustomFetch('/own/portfolios', {
    method: "POST",
    body: data,
  })
  if (res.error.value) {
    app.$toast.error('متاسفانه خطایی رخ داده است')
  }
  if (res.data.value) {
    app.$toast.success('نمونه کار با موفقیت ثبت شد')
    await router.push('/panel/artist/portfolios')
  }
}
</script>

<style scoped>

</style>