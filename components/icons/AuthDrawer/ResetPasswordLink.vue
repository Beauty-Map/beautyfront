<template>
  <div class="w-full mt-[18px] text-right font-semibold text-black text-[16px] leading-[20px]" @click="openResetPasswordModal">
    برای بازیابی رمز عبور کلیک کنید
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