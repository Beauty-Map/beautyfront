<template>
  <div class="w-full overflow-y-scroll">
    <OtpInput v-model="form.code" :has-error="hasOtpError" class="mt-[70px] mb-[30px]" />
    <OtpResendButton ref="otpContainer" :reset="resetOtp" @resend="resendOtp"/>
    <MainActionButton class="mt-[24px]" @click="checkOtpCode">
      <div class="text-white text-center text-[20px] leading-[30px]">تایید</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import OtpInput from "~/components/input/OtpInput.vue";
import OtpResendButton from "~/components/otp-drawer/OtpResendButton.vue";

const store = useDrawerStore()

const form = ref<IVerifyRegisterForm>({
  phone_number: '',
  code: '',
})

const resetOtp = ref<Boolean>(false)
const hasOtpError = ref<Boolean>(false)

const checkOtpCode = () => {
  hasOtpError.value = false
  if (form.value.code.length != 4) {
    hasOtpError.value = true;
    return
  }
  store.closeAllDrawers()
  store.openSetPasswordDrawer()
}

const resendOtp = () => {
  console.log('resend 111')
}

watch(() => form.value.code, () => hasOtpError.value = false)

</script>

<style scoped>

</style>