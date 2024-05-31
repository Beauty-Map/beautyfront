<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="absolute right-[10px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
        <AddMoneyIcon />
        <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
        <DollarIcon />
      </div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">موجودی سکه</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full px-[17px] mt-[40px] pb-[40px] gap-y-[60px] flex flex-col justify-start items-start">
      <PaymentOptionItem
          v-for="(o, i) in options"
          :key="i"
          :coins="o.coins"
          :price="o.price"
          @click="selectOption(o)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import DollarIcon from "~/components/icons/DollarIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import PaymentOptionItem from "~/components/wallet/PaymentOptionItem.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const router = useRouter()
const user = useSanctumUser()
const options = ref<IPaymentOption[]>([])

const goBack = () => {
  router.back()
}

const getPaymentOptions = async () => {
  const res = await useCustomFetch('/payment-options', {
    method: "GET"
  })
  if (res.data.value) {
    options.value = res.data.value?.data as (IPaymentOption[])
  }
}

const selectOption = (o: IPaymentOption) => {
  router.push({
    path: '/panel/artist/wallet/pay',
    query: {
      id: o.id
    }
  })
}

onMounted(() => {
  nextTick(() => {
    getPaymentOptions()
  })
})
</script>

<style scoped>

</style>