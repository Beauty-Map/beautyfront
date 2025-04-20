<template>
  <div class="h-[calc(100vh-110px)] w-full flex flex-col justify-start items-start mt-[17px]">
    <div class="w-full flex flex-row justify-start items-center">
      <Header />
      <BackIcon @click="goBack" />
    </div>
    <div class="w-full flex-col justify-start items-start mt-[35px] min-h-[400px] px-[20px]">
      <TicketItem
        v-for="(t,i) in tickets"
        :key="i"
        :ticket="t"
      />
      <div class="text-center w-full" v-if="tickets.length == 0">
        شما تیکتی ثبت نکرده اید!<br>
        تیکت جدید <nuxt-link to="/support/ticket"> ثبت</nuxt-link> کنید
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import Header from "~/components/support/Header.vue";
import TicketItem from "~/components/support/TicketItem.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
definePageMeta({
  layout: 'ticket',
  middleware: 'auth'
})

const router = useRouter()

const tickets = ref<ITicket[]>([])
const page = ref(1)
const goBack = () => {
  router.replace('/support')
}

const paginate = () => {
  page.value += 1
  getTickets()
}

const getTickets = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/own/tickets?page=${page.value}&limit=10`)
      .then(res => {
        const list = res.data as []
        tickets.value.push(...list)
      })
}
onMounted(() => {
  setTimeout(() => {
    getTickets()
  })

})
</script>

<style scoped>

</style>