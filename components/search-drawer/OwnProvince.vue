<template>
  <div class="w-full flex flex-col items-start justify-start">
    <div class="text-right text-[14px] leading-[21px] font-medium text-[#141414]">شهر پیشفرض شما:</div>
    <div class="w-full flex flex-row justify-start items-center mt-[12px]">
      <LocationIcon />
      <div class="mr-[5px] font-medium text-[#133C3E] text-[14px] leading-[21px]">{{ city.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationIcon from "~/components/icons/LocationIcon.vue";

const props = defineProps({
  city: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>

</style>