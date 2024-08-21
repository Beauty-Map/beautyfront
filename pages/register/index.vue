<template>
  <div
      class="hidden md:flex flex-col relative justify-center items-center w-screen h-[calc(100vh-87px)] py-[35px] px-[40px] overflow-y-auto bg-white"
  >
    <div class="hidden w-full md:flex flex-row max-w-[1200px] mx-auto min-h-[400px] bg-white rounded-[20px] shadow-[0px_2px_8px_0px_#00000040]">
      <div class="overflow-y-auto w-full md:w-1/2 flex flex-col justify-center items-center md:rounded-tl-[20px] md:rounded-bl-[20px] rounded-[20px] h-full pb-[16px] md:px-[65px] px-[24px]">
        <div class="mt-[40px] text-[#344055] text-[32px] text-right font-bold">
          ثبت نام
        </div>
        <div class="mt-[25px] text-[#B6B8C3] font-normal text-[16px] text-right">
          برای دسترسی مستقیم به هنرمندان و تماس وارد شوید
        </div>
        <div class="border border-[#2C3E5033] w-full my-[20px] border-dashed"></div>
        <RegisterMiniForm v-model="form.email" @sent="onOtpSent" class="mt-[17px]" v-if="!otpSent && !showSetPassword"/>
        <OtpForm v-model="form.email" @resend="resendOtp" @validate="validate" v-else-if="!showSetPassword"/>
        <SetPasswordForm
            :email="form.email"
            :remember-token="rememberToken"
            v-else-if="showSetPassword"/>
      </div>
      <div class="overflow-y-auto hidden md:flex flex-col justify-center items-center py-[40px] px-[65px] w-1/2 bg-[#2dcfc1] rounded-tl-[20px] rounded-bl-[20px] h-full">
        <LoginImage />
        <div class="mt-[24px] text-center w-full font-medium text-[24px] text-white">
          پشتیبانی فوری
        </div>
        <div class="mt-[24px] text-center w-full font-light text-[18px] text-white">
          شما میتوانید به صورت 24 ساعته و 7 روز هفته را با ما تماس بگیرید
        </div>
      </div>
    </div>
  </div>
  <div
      class="flex flex-col md:hidden px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white"
  >
    <div class="flex flex-row items-center justify-end pl-[3px]">
      <BackIcon @click="goBack" />
    </div>
    <div class="flex flex-col justify-start items-center">
      <BeautyIcon class="mt-[8px]"/>
      <Header />
      <RegisterForm class="mt-[17px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OtpForm from "~/components/register-drawer/OtpForm.vue";
import SetPasswordForm from "~/components/register-drawer/SetPasswordForm.vue";
import RegisterMiniForm from "~/components/register-drawer/RegisterMiniForm.vue";
import LoginImage from "~/components/login-drawer/LoginImage.vue";
import Header from "~/components/register-drawer/Header.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import BeautyIcon from "~/components/icons/AuthDrawer/BeautyIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {definePageMeta} from "#imports";
import RegisterForm from "~/components/register-drawer/RegisterForm.vue";

definePageMeta({
  middleware: 'guest'
})

const app = useNuxtApp()
const otpSent = ref<Boolean>(false)
const router = useRouter()
const showSetPassword = ref<Boolean>(false)
const form = ref<IRegisterForm>({
  email: '',
  accept_policy: false,
})
const rememberToken = ref<String>('')
const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
}

const onOtpSent = () => {
  otpSent.value = true
}

const resendOtp = () => {
  otpSent.value = false
}

const validate = async (code: string) => {
  const data = {
    email: form.value.email,
    code: code
  }
  const res = await useCustomFetch('/auth/register/otp', {
    method: "POST",
    body: data
  })
  if (res.data.value) {
    app.$toast.success('اطلاعات شما با موفقیت ثبت شد', {rtl: true})
    showSetPassword.value = true
    rememberToken.value = res.data.value?.token as string
  }
  if (res.error.value) {
    app.$toast.error('کد ورود صحیح نیست!', {rtl: true})
  }
}
</script>

<style scoped>

</style>