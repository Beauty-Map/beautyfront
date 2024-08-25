<template>
  <div class="page h-full w-full flex flex-col pt-[21px] pb-[79px] md:pt-0 md:pb-0 relative">
    <PageLoading v-if="loading"/>
    <ProfileDrawer class="md:hidden flex"/>
    <LoginDrawer class="md:hidden flex"/>
    <RegisterDrawer class="md:hidden flex"/>
    <SetPasswordDrawer class="md:hidden flex"/>
    <CompleteProfileDrawer class="md:hidden flex"/>
    <NotificationDrawer class="md:hidden flex"/>
    <SecurityDrawer class="md:hidden flex"/>
    <SetNewPasswordDrawer class="md:hidden flex"/>
    <ResetPasswordDrawer class="md:hidden flex"/>
    <AltPhoneNumberDrawer class="md:hidden flex"/>
    <MainHeaderDesktop class="md:flex hidden"/>
<!--    <div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">-->
    <div class="w-full min-h-screen flex flex-col justify-start items-start">
      <slot />
    </div>
    <Footer class="hidden md:flex" />
    <BottomNavigationBox class="md:hidden"/>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";
import ProfileDrawer from "~/components/drawer/ProfileDrawer.vue";
import LoginDrawer from "~/components/drawer/LoginDrawer.vue";
import RegisterDrawer from "~/components/drawer/RegisterDrawer.vue";
import SetPasswordDrawer from "~/components/drawer/SetPasswordDrawer.vue";
import CompleteProfileDrawer from "~/components/drawer/CompleteProfileDrawer.vue";
import NotificationDrawer from "~/components/drawer/NotificationDrawer.vue";
import SecurityDrawer from "~/components/drawer/SecurityDrawer.vue";
import SetNewPasswordDrawer from "~/components/drawer/SetNewPasswordDrawer.vue";
import AltPhoneNumberDrawer from "~/components/drawer/AltPhoneNumberDrawer.vue";
import MainHeaderDesktop from "~/components/header/MainHeaderDesktop.vue";
import ResetPasswordDrawer from "~/components/drawer/ResetPasswordDrawer.vue";
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