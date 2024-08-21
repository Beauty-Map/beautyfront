<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
    >
      <div
          @click="openChooseWorkHoursDrawer"
          class="flex items-center text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]">{{ showValue }}</div>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <WorkHoursDrawer
        :is-open="showChooseWorkHoursDrawer"
        @close="closeChooseWorkHoursDrawer"
        :model-value="value"
        @update:model-value="updateValue"
        v-if="showChooseWorkHoursDrawer"
        :is-all-day-open="isAllDayOpen"
        :is-closed="isClosed"
        :work-on-holidays="workOnHolidays"
        @update:is-all-day-open="updateIsAllDayOpen"
        @update:is-closed="updateIsClosed"
    />
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import WorkHoursDrawer from "~/components/drawer/WorkHoursDrawer.vue";

const emits = defineEmits(['update:modelValue', 'update:isClosed', 'update:isAllDayOpen'])
const props = defineProps({
  title: {
    type: String,
    default: ''
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
const value = ref<IWorkHour[]>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const showChooseWorkHoursDrawer = ref<Boolean>(false)
const days = ref([
  'شنبه',
  'یک شنبه',
  'دو شنبه',
  'سه شنبه',
  'چهار شنبه',
  'پنج شنبه',
  'جمعه',
])
const showValue = computed(() => {
  if (props.modelValue?.length > 1) {
    return `از ` + days.value[props.modelValue[0].day_index - 1] + ' تا ' + days.value[props.modelValue[props.modelValue?.length - 1].day_index - 1]
  }
  if (props.modelValue?.length == 1) {
    return days.value[props.modelValue[0].day_index]
  }
  return props.title
})

const openChooseWorkHoursDrawer = () => {
  showChooseWorkHoursDrawer.value = true
}
const closeChooseWorkHoursDrawer = () => {
  showChooseWorkHoursDrawer.value = false
}

const updateIsAllDayOpen = (open: Boolean) => {
  emits('update:isAllDayOpen', open)
}

const updateIsClosed = (open: Boolean) => {
  emits('update:isClosed', open)
}

const updateValue = (workHours: IWorkHour[]) => {
  value.value = workHours
  emits('update:modelValue', value.value)
}
</script>

<style scoped>

</style>