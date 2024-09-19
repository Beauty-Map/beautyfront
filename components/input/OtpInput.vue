<template>
  <div ref="container" class="flex flex-row gap-2 items-center justify-center py-4 ltr-dir w-full px-1">
    <input
        type="number"
        class="text-center h-[46px] w-[40px] rounded-[8px] outline-none duration-300 border text-[#141414] placeholder:text-[#141414]"
        :class="[hasError ? 'border-[#FF3CA0] focus:border-[#FF3CA0] shadow-[0px_0px_5.5px_0px__#FF3CA0]' : 'border-[#A9A7A7] focus:border-[#133C3E]']"
        placeholder="_"
        v-for="n in length"
        :key="n"
        v-model="otpArray[n-1]"
        maxlength="1"
        @input="(e) => handleInput(e, n-1)"
        @keydown.backspace.prevent="handleBackspace(n-1)"
    >
  </div>
</template>

<script setup lang="ts">

import {useOtpResetSignal} from "~/composables/useOtpResetSignal";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 4
  },
  hasError: {
    type: Boolean,
    default: false,
    required: true
  },
})
const otpArray = ref<String[]>([])

const container = ref()
const { otpResetSignal } = useOtpResetSignal();

const handleInput = (e: any, n: number) => {
  let input = e.target.value;
  if (n == props.length - 1) {
    if (input) {
      input = input.charAt(0)
    }
  }
  if (/^[0-9]$/.test(input)) {
    otpArray.value[n] = input;

    if (n < props.length - 1) {
      setTimeout(() => {
        container.value.children[n + 1].focus();
      }, 50);
    }
  } else {
    otpArray.value[n] = '';
  }

  setTimeout(() => {
    emits('update:modelValue', otpArray.value.join(''));
  }, 100);
}

// مدیریت پاک کردن
const handleBackspace = (n: number) => {
  if (n >= 0) {
    otpArray.value[n] = '';
      setTimeout(() => {
        container.value.children[n - 1].focus();
      }, 50);
  }
}

watch(() => props.modelValue, () => {
  if (!props.modelValue) {
    otpArray.value = []
  }
})
watch(otpResetSignal, (value) => {
  if (value) {
    otpArray.value = []
  }
});
</script>

<style scoped>

</style>