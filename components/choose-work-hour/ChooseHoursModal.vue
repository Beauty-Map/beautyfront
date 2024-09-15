<template>
  <Modal :show-close="false" :open="isOpen">
    <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
      <div class="font-semibold text-center text-[#133C3E] text-[18px] leading-[28px]">انتخاب ساعت</div>
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
  startHour: {
    type: String,
    required: true
  },
  endHour: {
    type: String,
    required: true
  },
})
const startHour = ref('08:00')
const endHour = ref('18:00')
const closeModal = () => {
  emits('close')
}

const saveModal = () => {
  const data = {
    start_hour: startHour.value,
    end_hour: endHour.value,
  }
  emits('save', data)
}

onMounted(() => {
  startHour.value = props.startHour
  endHour.value = props.endHour
})
</script>

<style scoped>

</style>