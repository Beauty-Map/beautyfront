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
    <div v-if="option" class="w-full mt-[40px] pb-[40px] gap-y-[30px] flex flex-col justify-start items-start">
      <div class="w-full">
        <div class="w-full gap-x-[13px] flex flex-row px-[10px] py-[15px] min-h-[285px]">
          <div class=" h-full flex gap-y-[10px] flex-col justify-start items-start text-[#133C3E] text-[15px] font-medium leading-[23px]">
            <span>هنرمند عزیز</span>
            <div class="leading-8">
              <div>مبلغ مورد نظر را واریز کنید</div>
              <div class="text-center text-black font-semibold text-[20x] leading-[31px] flex flex-row gap-x-2 items-center">
                <span >{{ `${option.coins} سکه = `}}</span>
                <span :class="[option.discount_price > 0 ? 'line-through decoration-2 decoration-red-600 text-red-600' : '']"><span v-format-number>{{ option.price }}</span> TON</span>
                <span v-if="option.discount_price > 0" v-format-number>{{ option.discount_price }}</span>
                <span>TON</span>
              </div>
              <div>
                آدرس:
                <span class="text-red-custom bg-red-100 px-2 py-1.5 rounded-full !text-xs">الزامی*</span>
              </div>
              <div class="text-[12px] sm:text-[14px] font-bold flex bg-[rgba(249, 249, 249, 1)] rounded-xl p-4 items-center justify-between w-full">
                {{ config.public.walletAddress }}
                <span @click="doCopy(config.public.walletAddress)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.0001 13.4H13.8001C11.4001 13.4 10.6001 12.6 10.6001 10.2V7L17.0001 13.4Z" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.6001 2H15.6001" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>

              <div>
                کد واریز (کامنت):
                <span class="text-red-custom bg-red-100 px-2 py-1.5 rounded-full !text-xs">الزامی*</span>
              </div>
              <div class="text-[12px] sm:text-[14px] font-bold flex bg-[rgba(249, 249, 249, 1)] rounded-xl p-4 items-center justify-between w-full">
                {{payment.code}}
                <span @click="doCopy(payment.code)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.0001 13.4H13.8001C11.4001 13.4 10.6001 12.6 10.6001 10.2V7L17.0001 13.4Z" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.6001 2H15.6001" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="#5A4BD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
<!--              <div>لطفا از حالت زیر استفاده نکنید!</div>-->
<!--              <img src="/images/memoo.gif" alt="">-->
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4">
        <button :disabled="loading" @click="checkStatus" :class="[loading ? ' bg-[rgb(177,177,177)]' : ' bg-[#FFEA2E]']" class="rounded-[20px] w-full text-center flex justify-center items-center py-[11px] px-[18px] text-black font-semibold text-[14px] leading-[21px]">
        <span v-if="loading">
          <LoadingComponent />
        </span>
          <span v-else class="flex flex-row gap-2">
          <span>بررسی وضعیت پرداخت</span>
          <LoadingComponent v-if="status == 'created'"/>
        </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import DollarIcon from "~/components/icons/DollarIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import PaymentOptionDescIcon from "~/components/icons/PaymentOptionDescIcon.vue";
import {useAuthStore} from "~/store/Auth";
import LoadingComponent from "~/components/global/Loading.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const user = ref(auth.user)
const plan = computed(() => auth.plan)
const option = ref<IPaymentOption|null>(null)
const payment = ref<IPayment|null>(null)
const status = ref<string>('created')
const loading = ref<boolean>(false)
const app = useNuxtApp()
const config = useRuntimeConfig()

const goBack = () => {
  router.back()
}

const getPaymentOption = async () => {
  const id = route.query.id
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/payments/${id}`)
      .then(res => {
          payment.value = res as IPayment
          status.value = res.status as string
          option.value = res.payment_option as (IPaymentOption)
      })
}

const checkStatus = async () => {
  loading.value = true
  const id = route.query.id
  const {$postRequest: postRequest}=app
  postRequest(`/payments/status`, {
    code: id
  })
      .then(res => {
        status.value = res
      })
      .catch(err => {

      })
      .finally(() => {
        setTimeout(() => loading.value = false, 500)
      })
}

const getStatus = computed(() => {
  const statues = {
    'created': 'در انتظار پرداخت',
    'payed': 'پرداخت شده',
    'failed': 'خطا در فرایند پردازش',
  }
  return statues[status.value as string]
})

const doCopy = async (address) => {
  try {
    await navigator.clipboard.writeText(address)
    app.$toast.success('کپی شد!', {rtl: true})
  } catch (error) {
  }
}


const hasDiscount = computed(() => {
  return plan.value && plan.value?.plan.has_discount
})

const getDiscountPrice = computed(() => {
  return hasDiscount.value ? parseFloat((option.value?.price - (option.value?.price * plan.value?.plan.discount_number / 100)).toString()) : option.value?.price
})
onMounted(() => {
  nextTick(() => {
    getPaymentOption()
    auth.ownPlan()
  })
})
</script>

<style scoped>

</style>