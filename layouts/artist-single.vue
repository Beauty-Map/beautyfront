<template>
  <div class="page h-full w-full flex flex-col relative">
    <PageLoading v-if="loading"/>
    <ProfileDrawer class="md:hidden flex"/>
    <LoginDrawer class="md:hidden flex"/>
    <RegisterDrawer class="md:hidden flex"/>
    <SetPasswordDrawer class="md:hidden flex"/>
    <CompleteProfileDrawer class="md:hidden flex"/>
    <NotificationDrawer class="md:hidden flex"/>
    <SecurityDrawer class="md:hidden flex"/>
    <SetNewPasswordDrawer class="md:hidden flex"/>
    <AltPhoneNumberDrawer class="md:hidden flex"/>
    <MainHeaderDesktop class="md:flex hidden"/>
    <div class="w-full min-h-screen flex flex-col justify-start items-start">
      <slot />
    </div>
    <Footer class="hidden md:flex" />
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import AltPhoneNumberDrawer from "~/components/drawer/AltPhoneNumberDrawer.vue";
import LoginDrawer from "~/components/drawer/LoginDrawer.vue";
import SecurityDrawer from "~/components/drawer/SecurityDrawer.vue";
import SetNewPasswordDrawer from "~/components/drawer/SetNewPasswordDrawer.vue";
import MainHeaderDesktop from "~/components/header/MainHeaderDesktop.vue";
import CompleteProfileDrawer from "~/components/drawer/CompleteProfileDrawer.vue";
import RegisterDrawer from "~/components/drawer/RegisterDrawer.vue";
import ProfileDrawer from "~/components/drawer/ProfileDrawer.vue";
import SetPasswordDrawer from "~/components/drawer/SetPasswordDrawer.vue";
import NotificationDrawer from "~/components/drawer/NotificationDrawer.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";
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