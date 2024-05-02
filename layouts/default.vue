<template>
  <div class="page h-full w-full flex flex-col pt-[21px] pb-[79px] relative">
    <PageLoading v-if="loading"/>
    <ProfileDrawer />
    <LoginDrawer />
    <slot />
    <BottomNavigationBox class="md:hidden"/>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import MainHeader from "~/components/header/MainHeader.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";
import ProfileDrawer from "~/components/drawer/ProfileDrawer.vue";
import LoginDrawer from "~/components/drawer/LoginDrawer.vue";
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