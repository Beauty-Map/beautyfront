<template>
  <div @click="onUpdateClicked" class="cursor-pointer mb-[25px] w-full text-[#133C3E] font-medium leading-[23px] text-[15px] flex flex-row items-center justify-between">
    <div class="flex flex-row gap-[4px] justify-start items-center">
      <EditPenIcon />
      <span>{{ days[workHour.day_index] }}</span>
    </div>
    <div class="flex flex-row gap-[4px] justify-end items-center">
      <span>{{ toAMorPM(workHour.start_hour) }}</span>
      -
      <span>{{ toAMorPM(workHour.end_hour) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import EditPenIcon from "~/components/icons/EditPenIcon.vue";

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  workHour: {
    type: Object,
    required: true
  }
})

const onUpdateClicked = () => {

}

const days = ref([
  'شنبه',
  'یک شنبه',
  'دو شنبه',
  'سه شنبه',
  'چهار شنبه',
  'پنج شنبه',
  'جمعه',
])

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