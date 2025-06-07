<template>
  <div class="page h-full w-full flex flex-col pt-[21px] pb-[79px] relative max-w-[425px] mx-auto">
    <PageLoading v-if="loading"/>
    <ProfileDrawer class="flex"/>
    <LoginDrawer class="flex"/>
    <RegisterDrawer class="flex"/>
    <SetPasswordDrawer class="flex"/>
    <CompleteProfileDrawer class="flex"/>
<!--    <NotificationDrawer class="flex"/>-->
    <SecurityDrawer class="flex"/>
    <SetNewPasswordDrawer class="flex"/>
    <ResetPasswordDrawer class="flex"/>
    <AltPhoneNumberDrawer class="flex"/>
    <div class="w-full min-h-screen flex flex-col justify-start items-start">
      <slot />
    </div>
    <BottomNavigationBox/>
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
import SecurityDrawer from "~/components/drawer/SecurityDrawer.vue";
import SetNewPasswordDrawer from "~/components/drawer/SetNewPasswordDrawer.vue";
import AltPhoneNumberDrawer from "~/components/drawer/AltPhoneNumberDrawer.vue";
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