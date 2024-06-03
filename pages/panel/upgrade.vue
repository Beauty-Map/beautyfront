<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div @click="goToWalletPage" class="absolute right-[10px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
        <AddMoneyIcon />
        <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
        <DollarIcon />
      </div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">ارتقا</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full flex flex-col justify-start items-start px-[10px] py-[30px]">
      <div class="w-full flex flex-row justify-between items-center px-[14px]">
        <span class="text-[#141414] font-medium text-[18px] leading-[27px] text-right">ارتقا حساب کاربری</span>
        <ArrowUpIcon />
      </div>
      <div class="w-full flex flex-col gap-y-[20px] justify-start items-start px-[15px] mt-[30px]">
        <LazyUpgradeItem
          v-for="(p, i) in plans"
          :title="p.title"
          :coins="p.coins"
          :key="i"
          @click="selectPlan(p)"
        />
      </div>
      <div class="w-full flex flex-col justify-start items-center mt-[50px]">
        <h3 class="font-semibold text-center text-[24px] leading-[37px] text-black">مقایسه امکانات پنل ها</h3>
        <table class="mt-[30px] table-fixed w-full">
            <thead class="bg-[#133C3E]">
              <tr>
                <th class="text-white text-center py-[13px] px-[17px] rounded-r-[12px] border-l">امکانات</th>
                <th class="text-white text-center py-[13px] px-[17px]" :class="[i == plans.length - 1 ? 'rounded-l-[12px]' : ' border-l']" v-for="(p,i) in plans" :key="i">{{ p.title }}</th>
              </tr>
            </thead>
            <tbody>
            <tr class="border-b border-b-[#A9A7A7]">
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]">تعداد نمونه کار</td>
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]" v-for="(p,i) in plans" :key="i">{{ `${p.portfolio_count} عدد` }}</td>
            </tr>
            <tr class="border-b border-b-[#A9A7A7]">
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]">نردبان در ماه</td>
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]" v-for="(p,i) in plans" :key="i">{{ `${p.laddering_count} عدد` }}</td>
            </tr>
            <tr class="border-b border-b-[#A9A7A7]">
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]">تعداد ستاره ها</td>
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]" v-for="(p,i) in plans" :key="i">{{ `${p.star_count} عدد` }}</td>
            </tr>
            <tr class="border-b border-b-[#A9A7A7]">
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]">تیک آبی</td>
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]" v-for="(p,i) in plans" :key="i">{{ p.has_blue_tick ? 'دارد' : 'ندارد' }}</td>
            </tr>
            <tr class="border-b border-b-[#A9A7A7]">
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]">بارگزاری عکس</td>
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]" v-for="(p,i) in plans" :key="i">{{ `${p.image_upload_count} تصویر` }}</td>
            </tr>
            <tr class="border-b border-b-[#A9A7A7]">
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]">نمایش تخفیف</td>
              <td class="text-[#141414] text-center text-[12px] leading-[15px] font-medium py-[10px]" v-for="(p,i) in plans" :key="i">{{ p.has_discount ? 'دارد' : 'ندارد' }}</td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
    <Modal :show-close="false" :open="showSelectPlanModal">
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
            <span class="font-bold text-[18px] leading-[28px] mx-[8px]">{{ selectedPlan?.coins ?? 0 }}</span>
            <DollarIcon />
          </div>
        </div>
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]">
          <span class="text-black font-medium text-[12px] leading-[17px] text-right">پنل مورد نظر شما خریداری میشود. آیا تایید میکنید ؟</span>
        </div>
        <div class="w-full gap-x-[20px] flex flex-row justify-end items-center mt-[18px]">
          <button @click="doSelectPlan" class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]">تایید نهایی</button>
          <button @click="closeSelectPlanModal" class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]">بستن</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import DollarIcon from "~/components/icons/DollarIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import ArrowUpIcon from "~/components/icons/ArrowUpIcon.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const router = useRouter()
const user = useSanctumUser()

const plans = ref<IPlan[]>([])
const selectedPlan = ref<IPlan|null>(null)
const showSelectPlanModal = ref<Boolean>(false)

const goBack = () => {
  router.back()
}

const selectPlan = (p: IPlan) => {
  selectedPlan.value = p
  setTimeout(() => {
    openSelectPlanModal()
  }, 200)
}

const openSelectPlanModal = () => {
  showSelectPlanModal.value = true
}

const closeSelectPlanModal = () => {
  showSelectPlanModal.value = false
  selectedPlan.value = null
}

const doSelectPlan = () => {
  if (!selectedPlan.value) {
    console.log(selectedPlan.value, "p")
  }
  if (selectedPlan.value?.coins < user.value?.coins) {

  } else {
    closeSelectPlanModal()
    router.push('/panel/artist/wallet')
  }
}

const getPlans = async () => {
  const res = await useCustomFetch('/plans', {
    method: "GET"
  })
  if (res.data.value) {
    plans.value = res.data.value?.data as (IPlan[])
    selectedPlan.value = plans.value[0]
  }
}

const goToWalletPage = () => {
  router.push('/panel/artist/wallet')
}

onMounted(() => {
  nextTick(() => {
    getPlans()
  })
})
</script>

<style scoped>

</style>