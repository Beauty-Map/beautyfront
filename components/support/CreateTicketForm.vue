<template>
  <div class="w-full">
    <ChooseTicketSubjectInput class="mb-[20px]" v-model="form.subject"/>
    <TicketTitleInput class="mb-[20px]" v-model="form.title"/>
    <TicketDescriptionInput class="mb-[20px]" v-model="form.description"/>
    <TicketChooseFile class="mb-[20px]" @choose="chooseFile"/>
    <div @click="doSendTicket" class="cursor-pointer flex flex-row items-center justify-center px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full">
      <AddTicketIcon />
      <span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChooseTicketSubjectInput from "~/components/input/ChooseTicketSubjectInput.vue";
import TicketTitleInput from "~/components/input/TicketTitleInput.vue";
import TicketDescriptionInput from "~/components/input/TicketDescriptionInput.vue";
import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketChooseFile from "~/components/input/TicketChooseFile.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";

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

const doSendTicket = async () => {
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
    }
    if (res.data.value) {
      app.$toast.error('درخواست شما با موفقیت ثبت شد', {rtl: true})
      router.back()
    }
  }
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