<template>
  <div class="flex flex-col items-start justify-start w-full">
    <div @click="openChooseSubjectModal" class="w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-center">
      <TicketSubjectIcon />
      <div class="flex flex-row grow mr-[10px]">
        <span v-if="subject">{{ subject.title }}</span>
        <span v-else>انتخاب موضوع</span>
      </div>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <SubjectModal :open="showChooseSubject" @close="closeChooseSubjectModal">
      <div class=" w-full h-full min-h-[293px] justify-center items-start gap-x-[5px] gap-y-[5px] px-[28px] py-[28px] flex flex-row flex-wrap">
        <div @click.stop="chooseSubject(s)" class="min-h-[45px] flex justify-center items-center border border-[#133C3E] text-[#133C3E] font-medium text-[12px] leading-[18px] text-center bg-[#F7F5C4] w-[125px] py-[8px] px-[16px] rounded-[10px]" v-for="(s, i) in subjects" :key="i">
          {{ s.title }}
        </div>
      </div>
    </SubjectModal>
  </div>
</template>

<script setup lang="ts">

import TicketSubjectIcon from "~/components/icons/TicketSubjectIcon.vue";
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import SubjectModal from "~/components/modal/SubjectModal.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object,
    default: ''
  }
})
const subject = ref<ISubject|null>(props.modelValue as (ISubject | null))
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const showChooseSubject = ref<Boolean>(false)
const subjects = ref<ISubject[]>([])

const getSubjects = async () => {
  const res = await useCustomFetch('/subjects', {
    method: "get",
  })
  if (res.data.value) {
    subjects.value = res.data.value?.data as ISubject[]
  }
}

const openChooseSubjectModal = () => {
  showChooseSubject.value = true
}

const closeChooseSubjectModal = () => {
  showChooseSubject.value = false
}

const chooseSubject = (s: ISubject|null) => {
  subject.value = s
  emits('update:modelValue', s)
  closeChooseSubjectModal()
}

getSubjects()
</script>

<style scoped>

</style>