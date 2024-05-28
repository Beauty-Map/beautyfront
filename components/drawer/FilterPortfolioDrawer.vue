<template>
<div
    class="flex flex-col fixed px-[30px] py-[30px] md:hide top-0 bottom-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]"
    :class="[isOpen ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center">
    <div class="w-full flex flex-row items-center justify-between text-right font-medium text-[#141414] text-[18px] leading-[27px]">
      <span>{{ title }}</span>
      <ArrowUpIcon />
    </div>
    <div class="w-full flex flex-col gap-[10px] mt-4 items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]">
      <div
          @click="selectService(s)"
          v-for="(s, i) in serviceArray"
          :key="i"
          class="w-full flex flex-row items-center justify-between"
      >
        <span>{{ s.title }}</span>
        <DoneCheckIcon v-if="selectedService.id === s.id"/>
      </div>
    </div>
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
  }
})

const route = useRoute()

const close = () => {
  emits('close')
}

const serviceArray = ref<IService[]>([])
const selectedService = ref<IService|null>({
  id: -1,
  title: 'همه خدمات',
  image: '',
  is_active: 0,
  parent_id: null,
  created_at: '',
  updated_at: '',
  children: []
})

const selectService = (s: IService) => {
  selectedService.value = s
  emits('choose', s)
  emits('close')
}

const getServiceList = async () => {
  const {data: data} = await useFetch('http://localhost:8000/api/services')
  serviceArray.value = [
    {
      id: -1,
      title: 'همه خدمات',
    },
    ...data.value?.data
  ]
  initSelectedService()
}

const initSelectedService = () => {
  let service = route.query.services ? route.query.services as string : ''
  if (!service || !(/^-?\d+$/.test(service))) {
    selectedService.value = {
      id: -1,
      title: 'همه خدمات',
      image: '',
      is_active: 0,
      parent_id: null,
      created_at: '',
      updated_at: '',
      children: []
    }
  } else {
    const s = serviceArray.value.find(i => i.id == parseInt(service))
    if (!s) {
      selectedService.value = {
        id: -1,
        title: 'همه خدمات',
        image: '',
        is_active: 0,
        parent_id: null,
        created_at: '',
        updated_at: '',
        children: []
      }
    } else {
      selectedService.value = s
    }
  }
}

watch(() => route.query, initSelectedService)

getServiceList()
</script>

<style scoped>

</style>