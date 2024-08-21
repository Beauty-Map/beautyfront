<template>
  <div class="w-full text-right font-semibold text-[#828282] text-[13px] leading-[20px]" @click="openResetPasswordModal">
    بازیابی رمز عبور
  </div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()
const openResetPasswordModal = () => {
  store.closeAllDrawers()
  store.openResetPasswordDrawer()
}
</script>

<style scoped>

</style>