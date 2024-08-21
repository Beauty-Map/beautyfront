<template>
  <div class="flex flex-col items-start justify-start w-full">
    <div class="w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-center">
      <TicketTitleIcon />
      <div class="flex flex-row grow mr-[10px]">
        <input type="text" class="text-right h-full bg-transparent w-full outline-none focus:outline-none placeholder:text-[#133C3E]"
               @input="updateTextDebounce"
               v-model="value"
               placeholder="عنوان"
        >
      </div>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import TicketTitleIcon from "~/components/icons/TicketTitleIcon.vue";
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const value = ref<String>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)

const updateText = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const updateTextDebounce = useDebounce(updateText, 500)
</script>

<style scoped>

</style>