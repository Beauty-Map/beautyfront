<template>
  <div class="h-full flex flex-col justify-start items-start mt-[17px] mb-[110px]">
    <div class="w-full flex flex-row justify-start items-center">
      <Header />
      <BackIcon @click="goBack" />
    </div>
    <div class="w-full flex-col justify-start items-start mt-[35px]">
      <CreateTicketForm />
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import Header from "~/components/support/Header.vue";
import CreateTicketForm from "~/components/support/CreateTicketForm.vue";

definePageMeta({
  layout: 'ticket',
  middleware: 'auth'
})

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>

</style>