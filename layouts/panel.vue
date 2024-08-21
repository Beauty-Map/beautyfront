<template>
  <div class="page h-full w-full flex flex-col relative">
    <PageLoading v-if="loading"/>
    <MainHeaderDesktop class="md:flex hidden"/>
    <div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">
      <SideBar class="md:flex hidden"/>
      <slot />
    </div>
    <Footer class="hidden md:flex" />
    <BottomNavigationBox class="md:hidden"/>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import SideBar from "~/components/sidebar/SideBar.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";
import Footer from "~/components/footer/Footer.vue";
import MainHeaderDesktop from "~/components/header/MainHeaderDesktop.vue";
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