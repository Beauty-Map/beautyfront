<template>
  <div class="w-full bg-white fixed bottom-0 py-[20px] px-[38px] left-0 right-0 border-t border-t-gray-500 flex flex-row justify-between items-center">
    <div @click="goToSupportPage" class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-white text-black border border-[#A9A7A7] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">
      <TicketListIcon />
      <span class="mr-[4px] whitespace-nowrap">تیکت های من</span>
    </div>
    <div @click="goToTicketPage" class="cursor-pointer flex flex-row items-center justify-start px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[44px] w-[130px]">
      <AddTicketIcon />
      <span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketListIcon from "~/components/icons/TicketListIcon.vue";

const router = useRouter()
const goToSupportPage = () => {
  router.push('/support/tickets')
}
const goToTicketPage = () => {
  router.push('/support/ticket')
}
</script>

<style scoped>

</style>