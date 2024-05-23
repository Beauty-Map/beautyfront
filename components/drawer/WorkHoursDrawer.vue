<template>
<div
    class="fixed flex flex-col h-full px-[30px] py-[30px] md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
    :class="[isOpen ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
>
  <div class="flex flex-row items-center justify-between pl-[3px]">
    <div></div>
    <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">ساعت کاری</div>
    <BackIcon @click="goBack" />
  </div>
  <div class="w-full flex flex-col items-center justify-start mt-12">
    <WorkHourItem
      v-for="(w, i) in workHours"
      :key="i"
      :index="i"
      :work-hour="w"
    />
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import WorkHourItem from "~/components/work-hour-drawer/WorkHourItem.vue";

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

const workHours = ref<IWorkHour[]>(props.modelValue)

const close = () => {
  emits('close')
}

const goBack = () => {
  close()
}
</script>

<style scoped>

</style>