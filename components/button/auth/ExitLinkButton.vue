<template>
  <button @click="doExit" class="border border-red-400 text-center text-red-500 rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    خروج
  </button>
</template>

<script setup lang="ts">

import {useAuthStore} from "~/store/Auth";
import {useDrawerStore} from "~/store/Drawer";

const app = useNuxtApp()
const store = useDrawerStore()
const auth = useAuthStore()
const router = useRouter()
const doExit = () => {
  auth.setUser(null)
  auth.setToken(null)
  const token = useCookie('token')
  token.value = ''
  app.$toast.success('با موفقیت خارج شدید', {rtl: true})
  store.closeAllDrawers()
  router.replace('/')
}
</script>

<style scoped>

</style>