<template>
  <div class="page h-full w-full flex flex-col relative max-w-[425px] mx-auto">
    <PageLoading v-if="loading"/>
    <div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">
      <slot />
    </div>
    <BottomNavigationBox class=""/>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";
import SecurityLinkSideBar from "~/components/security-drawer/SecurityLinkSideBar.vue";
const nuxt = useNuxtApp()
const loading = ref<boolean>(true)

nuxt.hook('page:loading:start', () => {
  loading.value = true
})
nuxt.hook('page:loading:end', () => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>

</style>