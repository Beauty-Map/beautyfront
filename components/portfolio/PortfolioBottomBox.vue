<template>
  <div class="fixed bg-white flex flex-row items-center justify-between bottom-0 left-0 right-0 px-[15px] pt-[30px] pb-[22px] border-t border-t-[#FFEA2E]">
    <div @click="openCallModal" class="cursor-pointer text-center px-[37px] py-[6px] bg-[#085EC2] border border-[#133C3E] font-medium text-[15px] leading-[30px] text-white rounded-[25px]">تماس</div>
    <div class="flex flex-col">
      <div class="flex flex-row justify-end items-center">
        <span class="ml-[6px] px-[8px] text-white text-[8px] text-center leading-[12px] py-[4px] bg-[#ED2C25] rounded-[20px]">{{calcDiscountPercent(portfolio.price, portfolio.discount_price)}}</span>
        <div class="text-[#ED2C25] text-[11px] leading-[16px] text-left font-medium line-through">
          <span v-format-number>{{ portfolio.price }}</span>
        </div>
      </div>
      <div class="text-[#000000] text-[12px] leading-[18px] text-left font-medium">
        <span v-format-price>{{ portfolio.discount_price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  portfolio: {
    type: Object,
    required: true
  }
})

const showCallModal = ref<boolean>(false)

const openCallModal = () => {
  showCallModal.value = true
}

const closeCallModal = () => {
  showCallModal.value = false
}

const calcDiscountPercent = (p: number, d: number) => {
  return ((p - d) / p * 100) + '%';
}
</script>

<style scoped>

</style>