<template>
  <div class="flex flex-col items-start justify-start">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
    >
      <input type="number" class="text-left h-[38px] w-full rounded-[8px] outline-none focus:outline-none pl-[40px] pr-[20px] placeholder:text-[#A9A7A7]"
             @input="validateTelNumberDebounce"
             v-model="value"
             pattern= "[0-9]"
      >
      <ContactRedIcon v-if="hasError" class="absolute left-[10px] top-[10px]"/>
      <ContactIcon v-else class="absolute left-[10px] top-[10px]"/>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactIcon from "~/components/icons/ContactIcon.vue";
import ContactRedIcon from "~/components/icons/ContactRedIcon.vue";
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

const validateTelNumber = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateTelNumberDebounce = useDebounce(validateTelNumber, 500)

</script>

<style scoped>

</style>