<template>
  <div class="w-full flex flex-row justify-start items-start">
    <DollarGoldIcon />
    <div class="flex flex-col justify-start items-center text-center grow">
      <div class="text-center text-black font-semibold text-[16px] leading-[25px] gap-x-2 flex flex-row items-center">
        <span >{{ `${coins} سکه ` }}</span>
        <span :class="[hasDiscount ? 'line-through decoration-2 decoration-red-600 text-red-600' : '']" v-format-number>{{ price }}</span>
        <span v-if="hasDiscount" v-format-number>{{ getDiscountPrice }}</span>
        <span>TON</span>
      </div>
      <button class="bg-[#1EFF8180] font-semibold text-[12px] leading-[19px] mt-[10px] w-full text-center py-[8px] rounded-[10px] shadow-[0px_4px_4px_0px_#00000040]">
        جزییات بیشتر و خرید
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import DollarGoldIcon from "~/components/icons/DollarGoldIcon.vue";

const props = defineProps({
  coins: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  plan: {
    type: Object,
    default: null,
  }
})
const getDiscountPrice = computed(() => {
  return parseInt((props.price - (props.price * props.plan.plan.discount_number / 100)).toString())
})
const hasDiscount = computed(() => {
  return (props.plan && props.plan.plan.has_discount)
})
</script>

<style scoped>

</style>