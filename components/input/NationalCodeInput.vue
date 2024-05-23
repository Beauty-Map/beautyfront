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
      <input type="tel" class="text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pl-[40px] pr-[20px] placeholder:text-[#A9A7A7]"
             @input="validateNationalCodeDebounce"
             v-model="value"
             pattern= "[0-9]"
             :disabled="disabled"
      >
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError || error">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText || props.error}}</span>
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
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const value = ref<String>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)

const validateNationalCode = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateNationalCodeDebounce = useDebounce(validateNationalCode, 500)

</script>

<style scoped>

</style>