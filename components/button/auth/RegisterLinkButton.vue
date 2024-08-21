<template>
  <button @click="openRegisterDrawer" class="border border-white bg-[#141414] text-center text-[#F0FFF7] rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    ثبت نام
  </button>
</template>

<script setup lang="ts">
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()
const router = useRouter()
const openRegisterDrawer = () => {
  router.push('/register')
}
</script>

<style scoped>

</style>