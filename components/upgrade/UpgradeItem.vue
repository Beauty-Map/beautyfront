<template>
  <div class="cursor-pointer w-full flex flex-row justify-between items-center px-[8px] py-[11px] rounded-[12px] border border-[#A9A7A7]">
    <div class="font-medium text-[16px] leading-[19px] text-[#133C3E]">
      <span>{{ `پنل ${title}` }}</span>
    </div>
    <button class="rounded-[10px] h-[28px] flex justify-center items-center text-white font-normal text-[12px] leading-[14px] bg-[#085EC2] shadow-[0px_4px_4px_0px_#00000040] w-[80px] text-center">
      <span>{{ coins }}</span>
      <span class="mr-[5px]">سکه</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  coins: {
    type: Number,
    required: true,
    default: 0
  }
})

</script>

<style scoped>

</style>