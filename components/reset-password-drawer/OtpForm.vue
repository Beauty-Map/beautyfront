<template>
  <div class="w-full overflow-y-auto">
    <OtpInput :length="6" v-model="form.code" :has-error="hasOtpError" class="mt-[20px] mb-[20px]" />
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

const emits = defineEmits(['changePhoneNumber', 'resend', 'validate'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const app = useNuxtApp()
const store = useDrawerStore()
const loading = ref(false)

const form = ref<IVerifyRegisterForm>({
  email: props.modelValue,
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
  if (!form.value.code) {
    app.$toast.error('کد تایید را وارد کنید', {rtl: true,})
    return
  }
  emits('validate', form.value.code)
}

const resendOtp = async () => {
  resetOtp.value = !resetOtp.value

  const data = {
    email: form.value.email,
  }
  const {$postRequest: postRequest}=app
  postRequest('/auth/password/reset', data)
      .then(() => {
        app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
      })
}
watch(() => form.value.code, () => hasOtpError.value = false)
onMounted(() => nextTick(() => {
  form.value.email = props.modelValue
}))
</script>

<style scoped>

</style>