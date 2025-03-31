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
    <div class="w-full flex-col justify-start items-start mt-[35px] md:border md:border-gray-500 md:rounded-[50px] md:py-[25px] px-[20px]">
      <TicketDescriptionInput class="mb-[20px]" v-model="form.description"/>
      <TicketChooseFile class="mb-[20px]" @choose="chooseFile"/>
      <button :disabled="loading" @click="doSendTicket" :class="[loading ? ' bg-[rgb(177,177,177)] text-white' : ' bg-[#FF3CA0] text-white']" class="cursor-pointer flex flex-row items-center justify-center px-[10px] py-[10px] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full">
      <span v-if="loading">
        <LoadingComponent />
      </span>
        <span v-else class="flex flex-row items-center justify-center">
        <AddTicketIcon />
        <span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span>
      </span>
      </button>
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
    <div class="ml-[10%] w-[80%] flex-col justify-start items-start mt-8 border border-gray-500 rounded-[8px] p-[20px]">
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
import CreateTicketForm from "~/components/support/CreateTicketForm.vue";
import LoadingComponent from "~/components/global/Loading.vue";
import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketDescriptionInput from "~/components/input/TicketDescriptionInput.vue";
import TicketChooseFile from "~/components/input/TicketChooseFile.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
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
const loading = ref(false)
const app = useNuxtApp()

const errors = ref({
  description: '',
})
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

const form = ref({
  description: '',
})

const goBack = () => {
  router.replace('/support/tickets')
}
const validateForm = () => {
  let hasError = false
  if (!form.value.description) {
    app.$toast.error('لطفا متن پاسخ را وارد کنید', {rtl: true})
    hasError = true
  }
  return hasError
}
const {$postRequest: postRequest}=app

const doSendTicket = async () => {
  if (loading.value) {
    return
  }
  loading.value = true
  if (!validateForm()) {
    postRequest(`/own/tickets/${ticket.value.id}/answer`, {
      subject_id: ticket.value.subject_id,
      title: ticket.value.title,
      description: form.value.description,
      parent_id: ticket.value.id,
    })
        .then(res=> {
          app.$toast.success('پاسخ شما با موفقیت ثبت شد', {rtl: true})
        })
        .catch(err => {
          const errors = Object.values(err.data.errors)
          for (const k in errors) {
            for (const e in errors[k]) {
              app.$toast.error(errors[k][e], {rtl: true,})
            }
          }
        })
        .finally(() => {
          form.value.description = ''
          loading.value = false
        })
  }
  loading.value = false
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