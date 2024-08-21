<template>
  <Modal :show-close="false" :open="isOpen">
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
      <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
        <span @click="saveModal">ذخیره</span>
        <span @click="closeModal">بستن</span>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">

const emits = defineEmits(['close', 'save'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  workHours: {
    type: Array,
    default: () => []
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
const selectedDays = ref<number[]>([])
const isDaySelected = (index: number) => {
  return selectedDays.value.includes(index + 1)
}
const selectDay = (index: number) => {
  const i = selectedDays.value.indexOf(index + 1)
  if (i != -1) {
    selectedDays.value.splice(i, 1)
  } else {
    selectedDays.value.push(index + 1)
    selectedDays.value.sort((a,b) => a - b)
  }
}

const closeModal = () => {
  emits('close')
}

const saveModal = () => {
  emits('save', selectedDays.value)
}

onMounted(() => {
  selectedDays.value = props.workHours.map(i => i.day_index)
})
</script>

<style scoped>

</style>