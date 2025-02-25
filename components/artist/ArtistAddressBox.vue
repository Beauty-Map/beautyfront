<template>
  <div class="text-right w-full flex flex-col gap-[5px]">
    <div v-if="address" class="w-full flex flex-row items-center">
      <HeaderLocationIcon class="w-[20px] h-[20px]"/>
      <div class="text-[#141414] font-medium text-[13px] leading-[15px]"> {{ address }} </div>
    </div>
    <div v-if="distance" class="w-full flex flex-row items-center flex-wrap">
      <TimeIcon class="w-[20px] h-[20px]"/>
      <div class="text-[#141414] font-medium text-[13px] leading-[15px]">
        <span>فاصله از شما</span>
        <span>{{ distance }}</span>
      </div>
      <span class="mx-1" v-if="workHours.length > 0"> | </span>
      <div v-if="workHours.length > 0" class="text-[#141414] font-medium text-[13px] leading-[15px]">
        <span>{{ getStartAndEndWorkDayName() }}</span>
      </div>
      <span class="mx-1" v-if="workHours.length > 0"> | </span>
      <div v-if="workHours.length > 0" class="text-[#141414] font-medium text-[13px] leading-[15px]">
        <span>{{ getStartAndEndWorkTimeName() }}</span>
      </div>
      <span class="mx-1 text-[#1EFF81] font-medium text-[13px] leading-[15px] cursor-pointer" v-if="workHours.length > 0" @click="openWorkHoursBox"> دیدن همه </span>
    </div>
    <div class="w-full flex flex-row items-center" v-if="createdAtAgoFa">
      <GreenTick class="w-[20px] h-[20px]"/>
      <div class="text-[#141414] font-medium text-[13px] leading-[15px]">
        <span>سابقه عضویت:</span>
        <span>{{ createdAtAgoFa }}</span>
      </div>
    </div>
    <Modal :open="showWorkHoursBox" @close="closeWorkHoursBox">
      <div class="w-full flex flex-col items-start justify-start pb-[18px]">
        <h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]">برنامه هفتگی</h1>
        <div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]">
          <div v-for="(w,i) in workHours" :key="i" class="flex flex-row justify-between items-center mb-[5px]">
            <span>{{ days[w.day_index] }}</span>
            <span>{{ getDayName(w) }}</span>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import HeaderLocationIcon from "~/components/icons/HeaderLocationIcon.vue";
import TimeIcon from "~/components/icons/TimeIcon.vue";
import GreenTick from "~/components/icons/GreenTick.vue";
const props = defineProps({
  address: {
    type: String,
    default: ''
  },
  distance: {
    type: String,
    default: ''
  },
  createdAtAgoFa: {
    type: String,
    default: ''
  },
  workHours: {
    type: Array,
    default: () => [],
    required: true
  }
})

const days = ref<string[]>([
  'شنبه',
  'یک شنبه',
  'دو شنبه',
  'سه شنبه',
  'چهار شنبه',
  'پنج شنبه',
  'جمعه',
])

const showWorkHoursBox = ref<Boolean>(false)

const openWorkHoursBox = () => {
  showWorkHoursBox.value = true
}

const closeWorkHoursBox = () => {
  showWorkHoursBox.value = false
}

const getDayName = (workHour: IWorkHour) => {
  let start = workHour.start_hour
  let end = workHour.end_hour
  let name = ''
  name += toAMorPM(start)
  name += ' - '
  name += toAMorPM(end)
  return name
}

const getStartAndEndWorkDayName = () => {
  if (props.workHours.length == 0) {
    return ''
  }
  if (props.workHours.length == 1) {
    return days.value[props.workHours[0]?.day_index]
  }
  if (props.workHours.length > 2) {
    return `${days.value[props.workHours[0]?.day_index]} - ${days.value[props.workHours[props.workHours?.length - 1]?.day_index]}`
  }
}

const getStartAndEndWorkTimeName = () => {
  if (props.workHours.length == 0) {
    return ''
  }
  return `${toAMorPM(props.workHours[0]?.start_hour)} - ${toAMorPM(props.workHours[0]?.end_hour)}`
}

const toAMorPM = (hour: string) => {
  let name = ''
  let hourInt = parseInt(hour.substring(0, 2))
  if (hourInt <= 12) {
    name += `${hour} صبح`
  } else if (hourInt <= 19) {
    name += `${hour} بعد از ظهر`
  } else {
    name += `${hour} شب`
  }
  return name
}
</script>

<style scoped>

</style>