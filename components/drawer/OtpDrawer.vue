<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[isOpen ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center mt-[40px]">
    <Header :email="email" @change-email="goBack"/>
    <OtpForm @resend="resendOtp" @validate="validate" v-if="isOpen"/>
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/otp-drawer/Header.vue";
import OtpForm from "~/components/otp-drawer/OtpForm.vue";

const emits = defineEmits(['changeEmail', 'resend', 'validate', 'close'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
const store = useDrawerStore()

const email = ref<String>('')

const goBack = () => {
  emits('close')
}

const resendOtp = () => {
  emits('resend')
}

const validate = (code: string) => {
  emits('validate', code)
}
</script>

<style scoped>

</style>