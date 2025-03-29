<template>
  <div class="h-[calc(100vh-110px)] md:h-full w-full flex flex-col justify-start items-start mt-[17px]">
    <div class="w-full flex flex-row justify-start items-center">
      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full font-semibold text-[16px] leading-[24px] text-[#141414] text-center">
          تماس با پشتیبانی
        </div>
      </div>
      <BackIcon @click="goBack" />
    </div>
    <div v-for="(a, i) in answers" :key="i" :class="[a.user_id !== ticket.user_id ? 'bg-[#e7e7e7] mr-[10%]' : 'ml-[10%]']" class="w-[80%] flex-col justify-start items-start mt-8 border border-gray-500 rounded-[8px] p-[20px]">
      <div class="user">
        <div class="user-info">
          {{ a.user?.full_name ?? a.user?.email }} (اپراتور)
        </div>
        <div class="date">{{ getCreatedAtAgoFa(a) }}</div>
      </div>
      <hr />
      <div class="break-words mt-4">
        {{ a.description }}
      </div>
    </div>
    <div class="ml-[10%] w-[90%] flex-col justify-start items-start mt-8 border border-gray-500 rounded-[8px] p-[20px]">
      <div class="user">
        <div class="user-info break-words">
          {{ ticket.user?.full_name ?? ticket.user?.email }}
        </div>
        <div class="date">{{ getCreatedAtAgoFa(ticket) }}</div>
      </div>
      <hr />
      <div class="break-words mt-4">
        {{ ticket.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import localizedFormat from "dayjs/plugin/localizedFormat";
import jalaliday from "jalaliday";
definePageMeta({
  layout: 'ticket',
  middleware: 'auth'
})

const dayjs = useDayjs()
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)
const router = useRouter()
const route = useRoute()

const answers = ref<ITicket[]>([])

const ticket = ref<ITicket>({
  id: 0,
  subject_id: 0,
  subject: {
    id: 0,
    title: '',
  },
  title: '',
  description: '',
  file: '',
  user_id: 0,
  user: {
    id: 0,
    full_name: '',
    phone_number: '',
    avatar: '',
    has_blue_tick: false,
  },
  created_at: '',
})
const goBack = () => {
  router.replace('/support/tickets')
}

const getTicket = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/own/tickets/${route.params.id}`)
      .then(res => {
        ticket.value = res.data
        getTicketAnswers()
      })
}
const getTicketAnswers = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/own/tickets/${route.params.id}/answers`)
      .then(res => {
        answers.value = res.data
      })
}

const getCreatedAtAgoFa = (t) => {
  if (t.created_at == '')
    return '-'
  return dayjs(t.created_at).locale('fa').fromNow()
}

onMounted(() => {
  setTimeout(() => {
    getTicket()
  })
})
</script>

<style scoped>

</style>