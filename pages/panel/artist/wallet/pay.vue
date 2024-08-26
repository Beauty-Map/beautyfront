<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="absolute right-[10px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
        <AddMoneyIcon />
        <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
        <DollarIcon />
      </div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">خرید سکه</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div v-if="option" class="w-full px-[17px] mt-[40px] pb-[40px] gap-y-[60px] flex flex-col justify-start items-start">
      <div class="w-full flex justify-center items-center text-center bg-[#FFEA2E33] rounded-[10px] py-[10px] px-[18px]">
        <div class="text-center text-black font-semibold text-[20x] leading-[31px]">
          <span v-format-number>{{ `${option.coins} سکه ` }}</span>
          <span v-format-number>{{ option.price }}</span>
          <span>تومان</span>
        </div>
      </div>
      <div class="w-full px-[23px]">
        <div class="mt-[44px] w-full gap-x-[13px] flex flex-row border border-[#A9A7A7] px-[21px] py-[15px] rounded-[12px] min-h-[335px]">
          <PaymentOptionDescIcon />
          <div class="w-full h-full flex gap-y-[20px] flex-col justify-start items-start text-[#133C3E] text-[15px] font-medium leading-[23px]">
            <span>هنرمند عزیز</span>
            <span>با خرید این بسته علاوه بر {{ option.coins }} سکه، {{ option.gift }} سکه نیز بصورت هدیه دریافت خواهید کرد.</span>
          </div>
        </div>
      </div>
      <button @click="doPay" class="bg-[#FFEA2E] rounded-[20px] w-full text-center py-[11px] px-[18px] text-black font-semibold text-[14px] leading-[21px]">
        پرداخت
      </button>
    </div>
    <LazyPayResultModal @close="closePayResultModal" :is-open="showPayResultModal"/>
  </div>
</template>

<script setup lang="ts">

import DollarIcon from "~/components/icons/DollarIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import PaymentOptionDescIcon from "~/components/icons/PaymentOptionDescIcon.vue";
import {useAuthStore} from "~/store/Auth";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const user = ref(auth.user)
const option = ref<IPaymentOption|null>(null)
const showPayResultModal = ref<boolean>(false)

const goBack = () => {
  router.back()
}

const doPay = () => {
  openPayResultModal()
}

const openPayResultModal = () => {
  showPayResultModal.value = true
}

const closePayResultModal = () => {
  showPayResultModal.value = false
  router.push('/panel/artist')
}

const getPaymentOption = async () => {
  const id = route.query.id
  const res = await useCustomFetch(`/payment-options/${id}`, {
    method: "GET"
  })
  if (res.data.value) {
    option.value = res.data.value?.data as (IPaymentOption)
  }
}

onMounted(() => {
  nextTick(() => {
    getPaymentOption()
  })
})
</script>

<style scoped>

</style>