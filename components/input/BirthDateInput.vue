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
       <client-only>
         <CustomDatePicker
             ref="datePicker"
             format="YYYY-MM-DD"
             display-format="jYYYY/jMM/jDD"
             type="date"
             simple
             @change="validateBirthDateDebounce"
             v-model="value"
         />
       </client-only>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const value = ref<String>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)

const datePicker = ref()

const validateBirthDate = (dateTime: Object) => {
  emits('update:modelValue', dateTime.format('YYYY/MM/DD'))
}

const validateBirthDateDebounce = useDebounce(validateBirthDate, 500)

</script>

<style scoped>

</style>