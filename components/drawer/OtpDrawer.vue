<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenOtp ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center mt-[40px]">
    <Header :phone-number="phoneNumber" @change-phone-number="goBack"/>
    <OtpForm v-if="store.isOpenOtp"/>
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/otp-drawer/Header.vue";
import OtpForm from "~/components/otp-drawer/OtpForm.vue";

const store = useDrawerStore()

const phoneNumber = ref<String>('09381412419')

const goBack = () => {
  store.closeAllDrawers()
  store.openRegisterDrawer()
}
</script>

<style scoped>

</style>