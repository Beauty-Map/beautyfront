<template>
  <div class="w-full overflow-y-auto">
    <OtpInput :length="6" v-model="form.code" :has-error="hasOtpError" class="mt-[70px] mb-[30px]" />
    <OtpResendButton ref="otpContainer" :reset="resetOtp" @resend="resendOtp"/>
    <MainActionButton :disabled="loading" class="mt-[24px]" @click="checkOtpCode">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">تایید</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import OtpInput from "~/components/input/OtpInput.vue";
import OtpResendButton from "~/components/otp-drawer/OtpResendButton.vue";
import LoadingComponent from "~/components/global/Loading.vue";

const emits = defineEmits(['changeEmail', 'resend', 'validate'])
const store = useDrawerStore()
const loading = ref(false)
const app = useNuxtApp()

const form = ref<IVerifyRegisterForm>({
  email: '',
  code: '',
})

const resetOtp = ref<Boolean>(false)
const hasOtpError = ref<Boolean>(false)

const checkOtpCode = () => {
  if (!form.value.code) {
    app.$toast.error('کد تایید را وارد کنید', {rtl: true})
    return
  }
  if (loading.value) return
  loading.value = true
  setTimeout(() => {
    loading.value = false
    emits('validate', form.value.code)
  }, 500)
}

const resendOtp = () => {
  emits('resend')
  resetOtp.value = !resetOtp.value
  form.value.code = ''
}

watch(() => form.value.code, () => hasOtpError.value = false)

</script>

<style scoped>

</style>