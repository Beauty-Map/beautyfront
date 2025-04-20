<template>
<div
    class="flex flex-col fixed top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenSetPassword ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center mt-[40px]">
    <Header />
    <SetPasswordForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/set-password-drawer/Header.vue";
import SetPasswordForm from "~/components/set-password-drawer/SetPasswordForm.vue";

const store = useDrawerStore()

</script>

<style scoped>

</style>