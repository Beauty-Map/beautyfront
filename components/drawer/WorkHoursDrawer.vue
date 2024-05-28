<template>
<div
    class="fixed flex flex-col h-full py-[30px] md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
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
        @click="openDaysModal"
        class="cursor-pointer border border-[#A9A7A7] rounded-full bg-white px-[18px] py-[8px] text-[#133C3E] font-medium text-[15px] leading-[23px] text-center"
    >
      ویرایش روز
    </div>
  </div>
  <div class="w-full flex flex-row items-center justify-start mt-12">
    <p>تعطیلات رسمی آماده ارائه خدمات هستم</p>
    <CheckBox v-model="workOnHolidays"/>
  </div>
  <div class="mt-[80px] px-[22px] w-full flex flex-row items-center justify-center">
    <MainActionButton @click="doSave">
      <div class="text-white text-center text-[20px] leading-[30px] py-[11px]">ذخیره اطلاعات</div>
    </MainActionButton>
  </div>
  <ChooseHoursModal
      v-if="showHoursModal"
      :is-open="showHoursModal"
      @save="saveHoursModal"
      @close="closeHoursModal"
      :start-hour="startHour"
      :end-hour="endHour"
  />
  <ChooseDaysModal
      v-if="showDaysModal"
      :is-open="showDaysModal"
      @save="saveDaysModal"
      @close="closeDaysModal"
      :work-hours="workHours"
  />
  <ChooseItemModal
      v-if="showItemModal"
      :is-open="showItemModal"
      @save="saveItemModal"
      @close="closeItemModal"
      :work-hour="item"
  />
  <ChooseAllModal
      v-if="showAllModal"
      :is-open="showAllModal"
      @save="saveAllModal"
      @close="closeAllModal"
      :work-hours="workHours"
      :is-closed="isClosed"
      :is-all-day-open="isAllDayOpen"
  />
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import WorkHourItem from "~/components/work-hour-drawer/WorkHourItem.vue";
import CheckBox from "~/components/input/CheckBox.vue";
import ChooseAllModal from "~/components/choose-work-hour/ChooseAllModal.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import ChooseItemModal from "~/components/choose-work-hour/ChooseItemModal.vue";
import ChooseHoursModal from "~/components/choose-work-hour/ChooseHoursModal.vue";
import ChooseDaysModal from "~/components/choose-work-hour/ChooseDaysModal.vue";

const emits = defineEmits(['close', 'update:modelValue', 'update:isClosed', 'update:isAllDayOpen', 'update:workOnHolidays'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  modelValue: {
    type: Array<IWorkHour>,
    default: () => []
  },
  isAllDayOpen: {
    type: Boolean,
    default: false
  },
  isClosed: {
    type: Boolean,
    default: false
  },
  workOnHolidays: {
    type: Boolean,
    default: false
  }
})
const workHours = ref<IWorkHour[]>(props.modelValue)
const showItemModal = ref(false)
const showAllModal = ref(false)
const showHoursModal = ref(false)
const showDaysModal = ref(false)
const index = ref<number>(0)
const item = ref<IWorkHour|null>(null)
const isClosed = ref<boolean>(props.isClosed)
const workOnHolidays = ref<boolean>(props.workOnHolidays)
const isAllDayOpen = ref<boolean>(props.isAllDayOpen)
const startHour = ref('')
const endHour = ref('')

const openItemModal = (w: IWorkHour, i: number) => {
  item.value = w
  index.value = i
  showItemModal.value = true
}
const closeItemModal = () => {
  showItemModal.value = false
  item.value = null
  index.value = 0
}

const saveItemModal = (w: IWorkHour) => {
  workHours.value[index.value] = w
  closeItemModal()
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
  startHour.value = workHours.value.length > 0 ? workHours.value[0].start_hour : '08:00'
  endHour.value = workHours.value.length > 0 ? workHours.value[0].end_hour : '20:00'
  showHoursModal.value = true
}
const closeHoursModal = () => {
  showHoursModal.value = false
  startHour.value = ''
  endHour.value = ''
}

const saveHoursModal = (hours: Object) => {
  for (let i = 0; i < workHours.value.length; i++) {
    workHours.value[i].start_hour = hours.start_hour
    workHours.value[i].end_hour = hours.end_hour
  }
  closeHoursModal()
}

const openDaysModal = () => {
  showDaysModal.value = true
}
const closeDaysModal = () => {
  showDaysModal.value = false
}
const saveDaysModal = (wh: number[]) => {
  let whList: IWorkHour[] = []
  let start_hour = workHours.value.length > 0 ? workHours.value[0].start_hour : '08:00'
  let end_hour = workHours.value.length > 0 ? workHours.value[0].end_hour : '20:00'
  const commonItems = workHours.value.filter(item => wh.includes(item.day_index));
  const uniqueNewItems = wh
      .filter(index => !workHours.value.some(item => item.day_index === index))
      .map(index => (<IWorkHour>{ start_hour: start_hour, end_hour: end_hour, day_index: index }));

  whList.push(...commonItems, ...uniqueNewItems);
  whList.sort((a, b) => a.day_index - b.day_index);
  workHours.value = whList
  closeDaysModal()
}

const saveAllModal = (data: Object) => {
  let whList:IWorkHour[] = []
  for (let i = 0; i < data.selected_days.length; i++) {
    let w: IWorkHour = {
      day_index: data.selected_days[i],
      end_hour: data.end_hour,
      start_hour: data.start_hour,
    }
    whList.push(w)
  }
  workHours.value = whList
  closeAllModal()
  isClosed.value = data.is_closed
  isAllDayOpen.value = data.is_all_day_open
}

const doSave = () => {
  emits('update:modelValue', workHours.value)
  emits('update:isClosed', isClosed.value)
  emits('update:isAllDayOpen', isAllDayOpen.value)
  emits('update:workOnHolidays', workOnHolidays.value)
  setTimeout(() => {
    close()
  }, 500)
}

const goBack = () => {
  close()
}
</script>

<style scoped>

</style>