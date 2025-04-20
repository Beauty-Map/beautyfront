<template>
<div class="md:flex hidden flex-col justify-start items-start h-full w-full">
  <div class="w-full flex flex-row justify-start items-center mt-[40px]">
    <Header class="text-center"/>
  </div>

</div>
<div class="flex flex-col justify-start items-start h-full w-full">
  <div class="flex flex-row justify-start items-center mt-[40px]">
    <Header />
    <BackIcon @click="goBack" />
  </div>
  <SecurityLinkBox class="mt-8"/>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import Header from "~/components/security-drawer/Header.vue";
import SecurityLinkBox from "~/components/security-drawer/SecurityLinkBox.vue";
import {definePageMeta} from "#imports";
definePageMeta({
  middleware: 'auth',
  layout: 'security'
})
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped>

</style>