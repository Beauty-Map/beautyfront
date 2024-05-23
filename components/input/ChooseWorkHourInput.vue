<template>
  <div @click="openChooseWorkHoursDrawer" class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
    >
      <input type="text" class="text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]"
             :placeholder="title"
             disabled
      >
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <WorkHoursDrawer
        :is-open="showChooseWorkHoursDrawer"
        @close="closeChooseWorkHoursDrawer"
        v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import WorkHoursDrawer from "~/components/drawer/WorkHoursDrawer.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Array<IWorkHour>,
    default: () => []
  }
})
const value = ref<IWorkHour[]>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const showChooseWorkHoursDrawer = ref<Boolean>(true)

const openChooseWorkHoursDrawer = () => {
  showChooseWorkHoursDrawer.value = true
}
const closeChooseWorkHoursDrawer = () => {
  showChooseWorkHoursDrawer.value = true
}

const validateWorkHours = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateWorkHoursDebounce = useDebounce(validateWorkHours, 500)

</script>

<style scoped>

</style>