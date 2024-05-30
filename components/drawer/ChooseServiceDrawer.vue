<template>
  <div
      class="flex flex-col fixed px-[30px] py-[30px] md:hide top-0 bottom-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]"
      :class="[isOpen ? 'left-0' : 'left-[-100%]']"
  >
    <div class="flex flex-col justify-start items-center h-full w-full relative">
      <div class="w-full flex flex-row items-center justify-between text-right font-medium text-[#141414] text-[18px] leading-[27px]">
        <span>{{ title }}</span>
        <ArrowUpIcon />
      </div>
      <div class="h-full w-full flex flex-col gap-[10px] mt-4 items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]">
        <div
            @click="selectService(s)"
            v-for="(s, i) in serviceArray"
            :key="i"
            class="w-full flex flex-row items-center justify-between"
        >
          <span>{{ s.title }}</span>
          <DoneCheckIcon v-if="selectedService && selectedService.id === s.id"/>
        </div>
      </div>
      <button
          @click="doAccept"
          class="cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] w-full mt-[10px] rounded-full h-[44px] ">
        تایید
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import ArrowUpIcon from "~/components/icons/ArrowUpIcon.vue";
import DoneCheckIcon from "~/components/icons/DoneCheckIcon.vue";

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'فیلتر'
  },
  service: {
    type: Object,
    required: true
  },
  selected: {
    type: Object,
    default: null
  }
})

const close = () => {
  emits('close')
}

const serviceArray = ref<IService[]>([])
const selectedService = ref<IService|null>(props.selected as IService)

const selectService = (s: IService) => {
  selectedService.value = s
}

const getServiceList = async () => {
  const {data: data} = await useFetch(`http://localhost:8000/api/services/${props.service.id}/children`)
  serviceArray.value = [
    ...data.value?.data
  ]
}

const doAccept = () => {
  emits('choose', selectedService.value)
  emits('close')
}

watch(() => props.isOpen, () => {
  if (props.isOpen) {
    getServiceList()
  }
  selectedService.value = props.selected as IService
})
</script>

<style scoped>

</style>