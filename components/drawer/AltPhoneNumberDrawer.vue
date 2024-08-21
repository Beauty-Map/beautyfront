<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenSetAltNumber ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center mt-[40px]">
    <div class="w-full flex flex-row justify-start items-center">
      <Header />
      <BackIcon @click="goBack" />
    </div>
    <div class="w-full flex flex-row justify-start items-center mt-[40px]">
      <div class="font-medium text-[13px] leading-[20px] text-[#A9A7A7] text-center mx-7">
        شما میتوانید جهت بالا بردن امنیت حساب کاربری خود و برای دسترسی همیشگی به حساب کاربری خود یک شماره به عنوان جایگزین به حساب کاربری خود اضافه کنید
      </div>
    </div>
    <SetAltNumberForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/alt-phone-number-drawer/Header.vue";
import SetAltNumberForm from "~/components/alt-phone-number-drawer/SetAltNumberForm.vue";
import BackIcon from "~/components/icons/BackIcon.vue";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
  store.openSecurityDrawer()
}
</script>

<style scoped>

</style>