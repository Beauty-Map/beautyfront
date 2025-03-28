<template>
  <div class="w-full">
    <ChooseTicketSubjectInput class="mb-[20px]" v-model="form.subject"/>
    <TicketTitleInput class="mb-[20px]" v-model="form.title"/>
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
</template>

<script setup lang="ts">
import ChooseTicketSubjectInput from "~/components/input/ChooseTicketSubjectInput.vue";
import TicketTitleInput from "~/components/input/TicketTitleInput.vue";
import TicketDescriptionInput from "~/components/input/TicketDescriptionInput.vue";
import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketChooseFile from "~/components/input/TicketChooseFile.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import LoadingComponent from "~/components/global/Loading.vue";

const router = useRouter()
const app = useNuxtApp()

const form = ref<ITicketForm>({
  subject: null,
  title: '',
  description: '',
  new_file: '',
})

const errors = ref({
  subject: '',
  title: '',
  description: '',
})

const loading = ref(false)

const doSendTicket = async () => {
  if (loading.value) {
    return
  }
  loading.value = true
  if (!validateForm()) {
    const res = await useCustomFetch('/own/tickets', {
      method: "POST",
      body: {
        title: form.value.title,
        subject_id: form.value.subject?.id,
        description: form.value.description,
        new_file: form.value.new_file,
      },
    })
    if (res.error.value) {
      app.$toast.error('متاسفانه خطایی رخ داده است. بعدا امتحان کنید', {rtl: true})
      loading.value = false
    }
    if (res.data.value) {
      app.$toast.error('درخواست شما با موفقیت ثبت شد', {rtl: true})
      router.back()
    }
  }
  loading.value = false
}

const validateForm = () => {
  let hasError = false
  if (!form.value.subject) {
    app.$toast.error('لطفا موضوع را وارد کنید', {rtl: true})
    hasError = true
  }
  if (!form.value.title) {
    app.$toast.error('لطفا عنوان را وارد کنید', {rtl: true})
    hasError = true
  }
  if (!form.value.title) {
    app.$toast.error('لطفا توضیحات را وارد کنید', {rtl: true})
    hasError = true
  }
  return hasError
}

const chooseFile = (file: string) => {
  form.value.new_file = file
}
</script>

<style scoped>

</style>