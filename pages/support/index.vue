<template>
  <div
      class="flex flex-col px-[17px] w-full h-screen md:h-auto"
  >
    <div class="flex flex-col justify-start items-start mt-[17px]">
      <div class="w-full flex flex-row justify-start items-center">
        <Header />
        <BackIcon @click="goBack" />
      </div>
      <div class="w-full flex-col min-h-[400px] justify-start items-start mt-[35px] md:border md:border-gray-500 md:rounded-[50px] md:py-[25px] px-[20px] flex gap-12">
        <LazySupportItem
            :title="'تیکت به پشتیبانی'"
            @click="openTicketPage"
        />
        <a href="https://t.me/Modir_Foroush" target="_blank" class="w-full flex flex-row justify-between items-center px-[12px] py-[8px] border border-[#133C3E] rounded-[12px]">
          <div class="flex flex-row grow justify-start items-center">
            <TelegramIcon />
            <span class="mr-[17px] font-semibold text-[#141414] text-[13px] leading-[20px] text-right">ارتباط مستقیم</span>
          </div>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import Header from "~/components/support/Header.vue";
import TelegramIcon from "~/components/icons/TelegramIcon.vue";
import SupportItemIcon from "~/components/icons/SupportItemIcon.vue";
import ArrowRightIcon from "~/components/icons/ArrowRightIcon.vue";

definePageMeta({
  layout: 'ticket',
  middleware: 'auth'
})

const router = useRouter()

const goBack = () => {
  router.back()
}

const openTicketPage = () => {
  router.push('/support/ticket')
}
</script>

<style scoped>

</style>