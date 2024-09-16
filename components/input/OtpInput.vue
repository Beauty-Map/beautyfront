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
  }
})
const otpArray = ref<String[]>([])

const container = ref()

const handleInput = (e: any, n: number) => {
  const input = e.target.value;

  // بررسی اینکه ورودی فقط عدد بین ۰ تا ۹ باشد
  if (/^[0-9]$/.test(input)) {
    otpArray.value[n] = input;

    // اگر کاراکتر صحیح وارد شد، به فیلد بعدی برو
    if (n < props.length - 1) {
      setTimeout(() => {
        container.value.children[n + 1].focus();
      }, 50);
    }
  } else {
    otpArray.value[n] = '';  // اگر ورودی نامعتبر بود پاک شود
  }

  // به‌روزرسانی مقدار اصلی
  setTimeout(() => {
    emits('update:modelValue', otpArray.value.join(''));
  }, 100);
}

// مدیریت پاک کردن
const handleBackspace = (n: number) => {
  if (n > 0) {
    otpArray.value[n] = '';
    setTimeout(() => {
      container.value.children[n - 1].focus();
    }, 50);
  }
}

const handleEnter = (e: any, n: number) => {
  const children = container.value.children
  const pressedKey = e.key.toString();
  alert(pressedKey)
  if (n > 0 && (pressedKey == 'Backspace' || pressedKey == 'Delete')) {
    otpArray.value[n] = ''
    setTimeout(() => {
      children[n-1].focus()
    }, 50)
  } else {
    const matched = pressedKey.match(/^[0-9]$/)
    alert(matched)
    if (!matched) {
      otpArray.value[n] = ''
      return
    } else {
      if (n < props.length - 1) {
        otpArray.value[n] = pressedKey
        setTimeout(() => {
          children[n+1].focus()
        }, 50)
      }
    }
  }
  setTimeout(() => {
    emits('update:modelValue', otpArray.value.join(''))
  }, 100)
}
</script>

<style scoped>

</style>