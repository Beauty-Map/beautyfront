<template>
  <Modal :show-close="false" :open="isOpen">
    <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
      <div class="font-semibold text-center text-[#133C3E] text-[18px] leading-[28px]">ویرایش ساعت کاری</div>
<!--      <div class="flex flex-row items-center justify-start gap-[5px] mt-[10px]">-->
<!--        <div v-for="(d, i) in days" @click="selectDay(i)"-->
<!--             :class="[isDaySelected(i) ? 'bg-[#5CB3FF33] border-none' : 'border border-[#A9A7A7]  bg-white']"-->
<!--             class="w-[35px] h-[35px] flex justify-center items-center rounded-full-->
<!--             text-center text-[#133C3E] font-semibold text-[14px] leading-[21px] cursor-pointer">-->
<!--          {{ d[0] }}-->
<!--        </div>-->
<!--      </div>-->
      <div class="w-full flex flex-row justify-start items-center mt-[20px]">
        <ChooseHourInput :title="'از ساعت'" v-model="startHour"/>
        <ChooseHourInput :title="'تا ساعت'" v-model="endHour"/>
      </div>
      <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
        <span @click="saveModal">ذخیره</span>
        <span @click="closeModal">بستن</span>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">

import ChooseHourInput from "~/components/input/ChooseHourInput.vue";
import CheckBox from "~/components/input/CheckBox.vue";

const emits = defineEmits(['close', 'save'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  workHour: {
    type: Object,
    required: true
  },
})
const days = ref([
  'شنبه',
  'یک شنبه',
  'دو شنبه',
  'سه شنبه',
  'چهار شنبه',
  'پنج شنبه',
  'جمعه',
])
const selectedDay = ref<number>(props.workHour.day_index)
const startHour = ref('')
const endHour = ref('')
const isDaySelected = (index: number) => {
  return selectedDay.value == (index + 1)
}
const selectDay = (index: number) => {
  selectedDay.value = (index + 1)
}

const closeModal = () => {
  emits('close')
}

const saveModal = () => {
  const data = {
    start_hour: startHour.value,
    end_hour: endHour.value,
    day_index: selectedDay.value
  }
  emits('save', data)
}

onMounted(() => {
  selectedDay.value = props.workHour.day_index
  startHour.value = props.workHour?.start_hour
  endHour.value = props.workHour?.end_hour
})
</script>

<style scoped>

</style>