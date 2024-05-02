<template>
  <div class="w-full flex flex-row items-start justify-start">
    <CheckBox v-model="value" @input="onToggleCheckBox"/>
    <div class="mr-2 text-[#141414] font-light text-[13px] leading-[20px] text-right"><span class="text-[#085EC2]">شرایط و قوانین استفاده</span> و <span class="text-[#085EC2]">سیاست نامه حریم خصوصی</span> بیوتی مپ را می پذیرم.</div>
  </div>
</template>

<script setup lang="ts">

import CheckBox from "~/components/input/CheckBox.vue";
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  }
})
const value = ref<Boolean>(false)

const onToggleCheckBox = () => {
  emits('update:modelValue', value.value)
}
</script>

<style scoped>

</style>