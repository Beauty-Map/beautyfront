<template>
  <div class="flex flex-col justify-center items-center">
    <div class="font-medium text-[24px] leading-[37px] text-[#141414] text-center">
      کد تایید را وارد کنید
    </div>
    <div class="font-medium text-[13px] leading-[18px] text-[#133C3E] text-center mx-7 mt-[15px]">
      <div>
      لطفا کد تاییدی را که به ایمیل <span>{{ email }}</span> ارسال شده
      را وارد کنید.
      </div>
      <div class="text-[18px] mt-[16px] text-[#400842] font-medium underline cursor-pointer" @click="changeEmail">ویرایش ایمیل</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['changeEmail'])
const props = defineProps({
  email: {
    type: String,
    default: '',
    required: true
  }
})

const changeEmail = () => {
  emits('changeEmail')
}
</script>

<style scoped>

</style>