<template>
  <div class="flex flex-col justify-start items-center mt-[40px] md:px-[40px]">
    <div class="w-full flex flex-row justify-start items-center">
      <Header />
    </div>
    <div class="w-full flex flex-row justify-start items-center mt-[40px]">
      <div class="font-medium text-[13px] leading-[20px] text-[#A9A7A7] text-center mx-7">
        شما میتوانید جهت بالا بردن امنیت حساب کاربری خود و برای دسترسی همیشگی به حساب کاربری خود یک شماره به عنوان جایگزین به حساب کاربری خود اضافه کنید
      </div>
    </div>
    <div class="w-full overflow-y-auto mt-[17px]" v-if="!codeSent">
      <TelInput :error="errors.alt_number" title="شماره موبایل" v-model="form.alt_number"/>
      <MainActionButton class="mt-[48px] h-[44px]" @click="doSendCode">
        <div class="text-white text-center text-[14px] leading-[21px]">
          ارسال کد
        </div>
      </MainActionButton>
    </div>
    <div class="w-full overflow-y-auto mt-[17px]" v-else>
      <OtpForm @resend="doSendCode" @validate="validate" v-if="codeSent"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/alt-phone-number-drawer/Header.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import TelInput from "~/components/input/TelInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import OtpForm from "~/components/otp-drawer/OtpForm.vue";

definePageMeta({
  middleware: 'auth',
  layout: 'security'
})

const form = ref<ISetAltNumberForm>({
  alt_number: '',
})
const errors = ref({
  alt_number: ''
})

const codeSent = ref(false)

const doSendCode = async () => {
  if (!form.value.alt_number) {
    errors.value.alt_number = 'شماره تماس را وارد کنید'
    return
  }
  const res = await useCustomFetch('/own/alt-number', {
    method: "POST",
    body: form.value,
  })
  if (res.error.value) {

  }
  if (res.data.value) {
    codeSent.value = true
  }
}

const validate = async (code: string) => {
  const res = await useCustomFetch('/own/alt-number', {
    method: "PUT",
    body: {code: code, alt_number: form.value.alt_number},
  })
  if (res.error.value) {
  }
  if (res.data.value) {
    // closeDrawerClicked()
    // store.closeAllDrawers()
    //TODO: Alert
  }
}
const changePhoneNumber = () => {
  codeSent.value = false
}
</script>

<style scoped>

</style>