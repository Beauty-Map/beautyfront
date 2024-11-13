<template>
  <div class="relative w-full h-screen flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div @click="goToWalletPage" class="absolute right-[10px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
        <AddMoneyIcon />
        <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
        <DollarIcon />
      </div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">نردبان</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="flex flex-col justify-start items-start w-full px-[20px] py-[20px]">
      <div class="text-center w-full font-medium text-[12px] text-black leading-[18px] flex flex-col justify-start items-center gap-[20px]">
        <p>
          با استفاده از قابلیت نردبان،شما میتوانید نمونه کارهای خود را به صدر جدول آگهی ها در آن دسته بندی انتقال دهید.
        </p>
        <p>
          با انتخاب گزینه نردبان گروهی همه نمونه کارهای شما نردبان میشود.
          اگر قصد نردبان کردن یک یا چند مورد از نمونه کارهای خود را دارید میتوانید از گزینه نردبان انفرادی استفاده کنید.
        </p>
        <p>
          برای نردبان کردن پروفایل خود در بخش هنرمندان می توانید از گزینه نردبان پروفایل در بخش هنرمندان استفاده کنید.
        </p>
      </div>
    </div>
    <div class="text-center w-full font-bold text-[16px] text-[#085EC2] leading-[25px] mt-[20px]">
      یکی از گزینه های زیر انتخاب کنید
    </div>
    <div class="flex flex-col justify-start items-start text-center w-full font-bold text-[15px] text-[#141414] leading-[23px] mt-[30px] px-[20px] gap-y-[20px]">
      <div v-for="(n,i) in items" :key="i" @click="selectItem(n)" :class="[isItemSelected(n) ? '' : '']" class="cursor-pointer w-full flex flex-row justify-between items-center">
        <span>{{ n.title }}</span>
        <DoneBlackCheckIcon v-if="isItemSelected(n)"/>
      </div>
    </div>
    <MainActionButton @click="doLadder" class="w-auto absolute bottom-[30px] left-[20px] right-[20px]">
      <div class="text-white text-center text-[20px] leading-[30px] py-[11px]">نردبان کن</div>
    </MainActionButton>
    <Modal :show-close="false" :open="showAcceptModal">
      <div class="w-full h-full flex flex-col justify-start items-start">
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center">
          <span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right">موجودی سکه</span>
          <div @click="goToWalletPage" class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
            <AddMoneyIcon />
            <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
            <DollarIcon />
          </div>
        </div>
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]">
          <span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right">سکه مورد نیاز</span>
          <div class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
            <div></div>
            <span class="font-bold text-[18px] leading-[28px] mx-[8px]">{{ requiredCoins }}</span>
            <DollarIcon />
          </div>
        </div>
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]">
          <span class="text-black font-medium text-[12px] leading-[17px] text-right">{{ ladderingText }}</span>
        </div>
        <div class="w-full gap-x-[20px] flex flex-row justify-end items-center mt-[18px]">
          <button @click="doAccept" class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]">تایید نهایی</button>
          <button @click="closeAcceptModal" class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]">بستن</button>
        </div>
      </div>
    </Modal>
    <ChooseLadderingPortfoliosDrawer
        :is-open="showLadderSomeDrawer"
        @choose="choosePortfolios"
        @close="closeDoLadderSomeDrawer"
    />
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import DollarIcon from "~/components/icons/DollarIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import DoneBlackCheckIcon from "~/components/icons/DoneBlackCheckIcon.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import ChooseLadderingPortfoliosDrawer from "~/components/drawer/ChooseLadderingPortfoliosDrawer.vue";
import {useAuthStore} from "~/store/Auth";
definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const app = useNuxtApp()
const router = useRouter()
const auth = useAuthStore()
const user = ref(auth.user)

const showAcceptModal = ref(false)
const showLadderSomeDrawer = ref(false)
const selectedItem = ref(null)
const items = ref([
  {
    id: 1,
    title: 'نردبان گروهی نمونه کارها'
  },
  {
    id: 2,
    title: 'نردبان انفرادی نمونه کارها'
  },
])
// {
//   id: 3,
//       title: 'نردبان پروفایل'
// }
const selectedItems = ref<IPortfolio[]>([])
const selectItem = (item) => {
  selectedItem.value = item
}
const isItemSelected = (item) => {
  return selectedItem.value && selectedItem.value.id == item.id
}
const goBack = () => {
  router.back()
}

const goToWalletPage = () => {
  router.push('/panel/artist/wallet')
}

const doLadder = () => {
  if (!selectedItem.value) {
    app.$toast.error('لطفا یک گزینه را انتخاب کنید', {rtl: true})
    return
  }
  if (selectedItem.value.id != 2) {
    openAcceptModal()
  } else {
    openDoLadderSomeDrawer()
  }
}

const choosePortfolios = (portfolios: IPortfolio[] = []) => {
  selectedItems.value = portfolios
  openAcceptModal()
}

const openAcceptModal = () => {
  showAcceptModal.value = true
}
const closeAcceptModal = () => {
  showAcceptModal.value = false
  if (selectedItem.value?.id == 2) {
    selectedItems.value = []
    closeDoLadderSomeDrawer()
  }
}
const doAccept = () => {
  switch (selectedItem.value?.id) {
    case 1:
      doLadderAll()
          break
    case 2:
      doLadderSome()
      break
    case 3:
      doLadderProfile()
      break
  }
}

const openDoLadderSomeDrawer = () => {
  showLadderSomeDrawer.value = true
}

const closeDoLadderSomeDrawer = () => {
  showLadderSomeDrawer.value = false
}

const doLadderAll = async () => {
  const data = {
    type: 'all_portfolios',
    data: []
  }
  const res = await useCustomFetch('/ladder', {
    method: "POST",
    body: data
  })
  if (res.data.value) {
    app.$toast.success('با موفقیت انجام شد', {rtl: true,})
    closeAcceptModal()
    router.back()
  }
  if (res.error.value) {
    app.$toast.error('متاسفانه خطایی رخ داده است', {rtl: true,})
  }
}
const doLadderSome = async () => {
  const data = {
    type: 'some_portfolios',
    data: selectedItems.value
  }
  const res = await useCustomFetch('/ladder', {
    method: "POST",
    body: data
  })
  if (res.data.value) {
    app.$toast.success('با موفقیت انجام شد', {rtl: true,})
    closeAcceptModal()
    router.back()
  }
  if (res.error.value) {
    app.$toast.error('متاسفانه خطایی رخ داده است', {rtl: true,})
  }
}
const doLadderProfile = async () => {
  const data = {
    type: 'profile',
    data: []
  }
  const res = await useCustomFetch('/ladder', {
    method: "POST",
    body: data
  })
  if (res.data.value) {
    app.$toast.success('با موفقیت انجام شد', {rtl: true,})
    closeAcceptModal()
    router.back()
  }
  if (res.error.value) {
    app.$toast.error('متاسفانه خطایی رخ داده است', {rtl: true,})
  }
}

const requiredCoins = computed(() => {
  if (!selectedItem.value) return 0
  if (selectedItem.value == 1) {
    return 1000
  }
  if (selectedItem.value == 2) {
    return 200
  }
  return 100
})

const ladderingText = computed(() => {
  if (!selectedItem.value) return ''
  if (selectedItem.value.id == 1) {
    return 'تعداد 50 نمونه کار شما نردبان میشود. آیا تایید میکنید ؟'
  }
  if (selectedItem.value.id == 2) {
    return `تعداد ${selectedItems.value.length} نمونه کار شما نردبان میشود. آیا تایید میکنید ؟`
  }
  return 'پروفایل شما نردبان میشود. آیا تایید میکنید ؟'
})

</script>

<style scoped>

</style>