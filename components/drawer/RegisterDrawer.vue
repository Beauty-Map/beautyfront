<template>
<div
    class="flex flex-col fixed  top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenRegister ? 'fixed left-0' : 'fixed left-[-100%]']"
>
  <div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">
    <BackIcon @click="goBack" />
  </div>
  <div class="flex flex-col justify-start items-center">
    <BeautyIcon class="mt-12"/>
    <Header />
    <RegisterForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import BeautyIcon from "~/components/icons/AuthDrawer/BeautyIcon.vue";
import Header from "~/components/register-drawer/Header.vue";
import RegisterForm from "~/components/register-drawer/RegisterForm.vue";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
}
</script>

<style scoped>

</style>