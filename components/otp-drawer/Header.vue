<template>
  <div class="flex flex-col justify-center items-center">
    <div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center">
      کد تایید را وارد کنید
    </div>
    <div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7 mt-[15px]">
      <span>
      لطفا کد تاییدی را که به شماره <span>{{ phoneNumber }}</span> پیامک شده
      را وارد کنید.
        <span class="text-[#400842] font-medium underline cursor-pointer" @click="changePhoneNumber">ویرایش شماره</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['changePhoneNumber'])
const props = defineProps({
  phoneNumber: {
    type: String,
    default: '',
    required: true
  }
})

const changePhoneNumber = () => {
  emits('changePhoneNumber')
}
</script>

<style scoped>

</style>