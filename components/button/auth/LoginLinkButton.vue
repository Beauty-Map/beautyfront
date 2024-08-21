<template>
  <button @click="openLoginDrawer" class="block md:hidden border border-[#141414] text-center text-[#141414] rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    ورود
  </button>
  <button @click="openLoginPage" class="hidden md:block border border-[#141414] text-center text-[#141414] rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    ورود
  </button>
</template>

<script setup lang="ts">
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()
const router = useRouter()
const openLoginDrawer = () => {
  store.openLoginDrawer()
}
const openLoginPage = () => {
  router.push('/login')
}
</script>

<style scoped>

</style>