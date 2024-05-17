<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenSetNewPassword ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center mt-[40px]">
    <div class="w-full flex flex-row justify-start items-center">
      <Header />
      <BackIcon @click="goBack" />
    </div>
    <SetPasswordForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/set-new-password-drawer/Header.vue";
import SetPasswordForm from "~/components/set-new-password-drawer/SetPasswordForm.vue";
import BackIcon from "~/components/icons/BackIcon.vue";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
  store.openSecurityDrawer()
}
</script>

<style scoped>

</style>