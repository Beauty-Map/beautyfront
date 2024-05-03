<template>
  <div class="flex flex-col justify-center items-center">
    <div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center">
      کد تایید را وارد کنید
    </div>
    <div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7 mt-[15px]">
      لطفا کد تاییدی را که به شماره <span>{{ phoneNumber }}</span> پیامک شده
      را وارد کنید.
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  phoneNumber: {
    type: String,
    default: '',
    required: true
  }
})
</script>

<style scoped>

</style>