<template>
<div
    class="flex flex-col fixed md:hidden top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenLogin ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">
    <BackIcon @click="goBack" />
  </div>
  <div class="flex flex-col justify-start items-center">
    <BeautyIcon class="mt-12"/>
    <Header />
    <LoginForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import BeautyIcon from "~/components/icons/AuthDrawer/BeautyIcon.vue";
import Header from "~/components/login-drawer/Header.vue";
import LoginForm from "~/components/login-drawer/LoginForm.vue";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
}
</script>

<style scoped>

</style>