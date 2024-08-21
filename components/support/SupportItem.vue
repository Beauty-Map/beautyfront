<template>
  <div class="w-full flex flex-row justify-between items-center px-[12px] py-[8px] border border-[#133C3E] rounded-[12px]">
    <div class="flex flex-row grow justify-start items-center">
      <SupportItemIcon />
      <span class="mr-[17px] font-semibold text-[#141414] text-[13px] leading-[20px] text-right">{{ title }}</span>
    </div>
    <ArrowRightIcon />
  </div>
</template>

<script setup lang="ts">

import SupportItemIcon from "~/components/icons/SupportItemIcon.vue";
import ArrowRightIcon from "~/components/icons/ArrowRightIcon.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>

</style>