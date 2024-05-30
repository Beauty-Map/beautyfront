<template>
  <div
      class="flex flex-col px-[17px] w-full h-screen"
  >
    <div class="flex flex-col justify-start items-start mt-[17px]">
      <div class="w-full flex flex-row justify-start items-center">
        <Header />
        <BackIcon @click="goBack" />
      </div>
      <div class="w-full flex-col justify-start items-start mt-[35px]">
        <LazySupportItem
          :title="'تیکت به پشتیبانی'"
          @click="openTicketPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import Header from "~/components/support/Header.vue";

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