<template>
  <div class="w-full flex flex-row justify-start items-start">
    <DollarGoldIcon />
    <div class="flex flex-col justify-start items-center text-center grow">
      <div class="text-center text-black font-semibold text-[16px] leading-[25px]">
        <span >{{ `${coins} سکه ` }}</span>
        <span v-format-number>{{ price }}</span>
        <span>تومان</span>
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
  }
})
</script>

<style scoped>

</style>