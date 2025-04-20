<template>
  <div class="flex flex-col w-full h-full relative max-w-[425px] mx-auto">
    <PageLoading v-if="loading"/>
    <div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">
      <div class="w-full h-full flex flex-col justify-start items-start overflow-y-scroll mb-[80px]">
        <slot />
        <div class="mt-[60px] w-full bg-white pb-[20px] px-[38px] flex-row justify-center gap-[20px] items-center">
          <div @click="goToSupportPage" class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-white text-black border border-[#A9A7A7] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">
            <TicketListIcon />
            <span class="mr-[4px] whitespace-nowrap">تیکت های من</span>
          </div>
          <div @click="goToTicketPage" class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">
            <AddTicketIcon />
            <span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span>
          </div>
        </div>
      </div>
    </div>
    <LazySupportTicketBottomBox class="flex"/>
<!--    <Footer class="hidden md:flex" />-->
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import SideBar from "~/components/sidebar/SideBar.vue";
import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketListIcon from "~/components/icons/TicketListIcon.vue";
const nuxt = useNuxtApp()
const loading = ref<boolean>(true)
const router = useRouter()
const goToSupportPage = () => {
  router.push('/support/tickets')
}
const goToTicketPage = () => {
  router.push('/support/ticket')
}
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