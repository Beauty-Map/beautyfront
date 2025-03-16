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
        <input @change="onChooseImage" type="file" hidden multiple accept="image/png, images/jpeg" ref="galleryChooser">
      </div>
      <div class="w-full flex flex-row justify-start items-start gap-[12px] mt-[7px] flex-wrap">
        <div class="relative" v-for="(img, i) in prevImages" :key="i">
          <CloseIcon @click="removePrevImage(i)" class="absolute top-[-12px] right-[-12px] z-10"/>
          <img class="w-[80px] h-[80px]" :src="img" alt="">
        </div>
        <div class="relative" v-for="(img, i) in selectedImages" :key="i">
          <CloseIcon v-if="showRemoveImage(i)" @click="removeImage(i)" class="absolute top-[-12px] right-[-12px] z-10"/>
          <img class="w-[80px] h-[80px]" :src="img" alt="">
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
              placeholder="کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر ..."
              rows="4"
              maxlength="200"
              dir="auto"
          >
          </textarea>
          <span class="w-full text-right text-[#828282] text-[12px] font-medium leading-[21px]">200 / {{ form.description.length }}</span>
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
  <div class="flex flex-row gap-2 justify-between items-center absolute bottom-[30px] left-[22px] right-[22px] ">
    <button
        @click="doSave"
        :disabled="loading"
        :class="[loading ? ' bg-[rgb(177,177,177)]' : ' bg-[#FF3CA0]']"
        class="w-1/2 cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px] ">
    <span v-if="loading">
      <LoadingComponent />
    </span>
      <span v-else>
      ویرایش
    </span>
    </button>
    <button
        @click="openDelete"
        :disabled="loadingDelete"
        :class="[loadingDelete ? ' bg-[rgb(177,177,177)]' : ' bg-red-600']"
        class="w-1/2 cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px] ">
    <span v-if="loadingDelete">
      <LoadingComponent />
    </span>
      <span v-else>
      حذف
    </span>
    </button>
  </div>
  <DeletePortfolioModal :open="showDelete" @close="closeDeleteAlert" @delete="doDelete">
  </DeletePortfolioModal>
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
import LoadingComponent from "~/components/global/Loading.vue";
import DeleteAccountModal from "~/components/modal/DeleteAccountModal.vue";
import DeletePortfolioModal from "~/components/modal/DeletePortfolioModal.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const app = useNuxtApp()
const router = useRouter()
const route = useRoute()

const id = route.params.id
const {$putRequest: putRequest} = useNuxtApp()
const {$deleteRequest: deleteRequest} = useNuxtApp()
const loading = ref(false)
const loadingDelete = ref(false)
const showDelete = ref(false)

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

const prevImages = ref<string[]>([])
const selectedImages = ref<string[]|ArrayBuffer[]|null[]>([])
const selectedFiles = ref([])
const uploadedFilesPercentages = ref([])
const uploadedFiles = ref([])
const uploading = ref([])

const goBack = () => {
  router.replace('/panel/artist/portfolios')
}
const openDelete = () => {
  showDelete.value = true
}
const closeDeleteAlert = () => {
  showDelete.value = false
}
const doDelete = () => {
  deleteRequest(`/own/portfolios/${id}`)
      .then(async res => {
        app.$toast.success('نمونه کار با موفقیت حذف شد')
        await router.replace('/panel/artist/portfolios')
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
        loadingDelete.value = false
      })
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

const removePrevImage = (index) => {
  prevImages.value.splice(index, 1)
}

const showRemoveImage = (index) => {
  return !uploading.value[index]
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
  const token = useCookie('token')
  xhr.open('post', config.public.uploadURL, true)
  xhr.withCredentials = true
  xhr.setRequestHeader('accept', `application/json`)
  xhr.setRequestHeader('X-Xsrf-Token', xsrf.value)
  xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)
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

const validated = () => {
  let validated = true
  if (!form.value.title) {
    app.$toast.error('لطفا عنوان نمونه کار را وارد کنید', {rtl: true})
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
  if (!form.value.price) {
    app.$toast.error('لطفا قیمت نمونه کار را وارد کنید', {rtl: true})
    validated = false
  }
  if (prevImages.value.length == 0 && selectedImages.value.length == 0) {
    app.$toast.error('لطفا عکس های نمونه کار را انتخاب کنید', {rtl: true})
    validated = false
  }

  return validated
}

const doSave = async () => {
  if (loading.value) return
  if (!validated()) {
    return
  }
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
    images: [
        ...prevImages.value,
        ...uploadedFiles.value.map(i => i.url)
    ],
  }
  putRequest(`/own/portfolios/${id}`, data)
      .then(async res => {
        app.$toast.success('نمونه کار با موفقیت ویرایش شد')
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

const getPortfolio = async () => {
  const res = await useCustomFetch(`/own/portfolios/${id}`, {
    method: "GET"
  })
  if (res.data.value) {
    const data = res.data.value.data
    form.value.title = data.title
    form.value.description = data.description
    form.value.maintenance = data.maintenance
    form.value.price = data.price
    form.value.discount_price = data.discount_price
    form.value.has_tel = data.has_tel
    form.value.has_phone_number = data.has_phone_number
    form.value.second_phone_number = data.showing_phone_number
    form.value.service = data.service
    prevImages.value = data.images
  }
}

onMounted(() => {
  nextTick(()=>{
    getPortfolio()
  })
})
</script>

<style scoped>

</style>