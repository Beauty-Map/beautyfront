<template>
<div
    class="fixed flex flex-col h-fullpy-[30px] md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
    :class="[isOpen ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
>
  <div class="flex flex-row items-center px-[28px] justify-between">
    <div></div>
    <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">ساعت کاری</div>
    <BackIcon @click="goBack" />
  </div>
  <div class="w-full flex flex-col items-center justify-start mt-12 px-[5px] ">
    <WorkHourItem
      v-for="(w, i) in workHours"
      :key="i"
      :index="i"
      :work-hour="w"
      @click="openItemModal(w, i)"
    />
  </div>
  <div class="w-full flex flex-row gap-[5px] items-center justify-between mt-12">
    <div
        @click="openAllModal"
        class="cursor-pointer border border-[#A9A7A7] rounded-full bg-white px-[18px] py-[8px] text-[#133C3E] font-medium text-[15px] leading-[23px] text-center"
    >
      ویرایش کلی
    </div>
    <div
        @click="openHoursModal"
        class="cursor-pointer border border-[#A9A7A7] rounded-full bg-white px-[18px] py-[8px] text-[#133C3E] font-medium text-[15px] leading-[23px] text-center"
    >
      ویرایش ساعات
    </div>
    <div
        @click="openDayModal"
        class="cursor-pointer border border-[#A9A7A7] rounded-full bg-white px-[18px] py-[8px] text-[#133C3E] font-medium text-[15px] leading-[23px] text-center"
    >
      ویرایش روز
    </div>
  </div>
  <div class="w-full flex flex-row items-center justify-start mt-12">
    <p>تعطیلات رسمی آماده ارائه خدمات هستم</p>
    <CheckBox v-model="workOnHolidays"/>
  </div>
  <Modal :show-close="false" :open="showItemModal">
    <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
      <div class="font-semibold text-center text-[#133C3E] text-[18px] leading-[28px]">انتخاب روز و ساعت</div>
      <div class="flex flex-row items-center justify-start gap-[5px] mt-[10px]">
        <div v-for="(d, i) in days" @click="selectDay(i)"
             :class="[isDaySelected(i) ? 'bg-[#5CB3FF33] border-none' : 'border border-[#A9A7A7]  bg-white']"
             class="w-[35px] h-[35px] flex justify-center items-center rounded-full
             text-center text-[#133C3E] font-semibold text-[14px] leading-[21px] cursor-pointer">
          {{ d[0] }}
        </div>
      </div>
      <div class="w-full flex flex-row justify-start items-center mt-[30px]">
        <CheckBox />
        <span>24 ساعته باز است</span>
      </div>
      <div class="w-full flex flex-row justify-start items-center mt-[20px]">
        <CheckBox />
        <span>بسته است</span>
      </div>
      <div class="w-full flex flex-row justify-start items-center mt-[20px]">
        <ChooseHourInput :title="'از ساعت'"/>
        <ChooseHourInput :title="'تا ساعت'"/>
      </div>
    </div>
  </Modal>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import WorkHourItem from "~/components/work-hour-drawer/WorkHourItem.vue";
import CheckBox from "~/components/input/CheckBox.vue";
import ChooseHourInput from "~/components/input/ChooseHourInput.vue";

const emits = defineEmits(['close', 'update:modelValue'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  modelValue: {
    type: Array<IWorkHour>,
    default: () => []
  }
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
const workHours = ref<IWorkHour[]>(props.modelValue)
const showItemModal = ref(true)
const showAllModal = ref(false)
const showHoursModal = ref(false)
const showDayModal = ref(false)
const workOnHolidays = ref(false)
const index = ref<number>(0)
const item = ref<IWorkHour|null>(null)
const selectedDays = ref<number[]>([1,2])
const isDaySelected = (index: number) => {
  return selectedDays.value.includes(index)
}
const selectDay = (index: number) => {
  const i = selectedDays.value.indexOf(index)
  if (i != -1) {
    selectedDays.value.splice(i, 1)
  } else {
    selectedDays.value.push(index)
    selectedDays.value.sort((a,b) => a - b)
  }
}

const openItemModal = (w: IWorkHour, i: number) => {
  item.value = w
  index.value = i
}

const close = () => {
  emits('close')
}

const openAllModal = () => {
  showAllModal.value = true
}
const closeAllModal = () => {
  showAllModal.value = false
}

const openHoursModal = () => {
  showHoursModal.value = true
}
const closeHoursModal = () => {
  showHoursModal.value = false
}

const openDayModal = () => {
  showDayModal.value = true
}
const closeDayModal = () => {
  showDayModal.value = false
}

const goBack = () => {
  close()
}
</script>

<style scoped>

</style>