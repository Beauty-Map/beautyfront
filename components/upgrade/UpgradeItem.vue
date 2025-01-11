<template>
  <div :class="[disabled ? '' : 'cursor-pointer']" class=" w-full flex flex-row justify-between items-center px-[8px] py-[11px] rounded-[12px] border border-[#A9A7A7]">
    <div class="font-medium text-[16px] leading-[19px] text-[#133C3E]">
      <span> {{ `پنل ${title}` }}<span v-if="disabled">(پلن حال حاضر شما)</span></span>
    </div>
    <button :class="[disabled ? 'bg-gray-400 text-white shadow-[0px_4px_4px_0px_#00000040]' : 'bg-[#085EC2] text-white shadow-[0px_4px_4px_0px_#00000040]']" :disabled="disabled" class="rounded-[10px] h-[28px] flex justify-center items-center font-normal text-[12px] leading-[14px]  w-[80px] text-center">
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
  },
  disabled: {
    type: Boolean,
    required: true,
    default: false
  },
})

</script>

<style scoped>

</style>