<template>
  <div class="w-full">
    <div class="flex flex-col justify-start items-center font-medium text-center text-[13px] leading-[20px] text-[#133C3E]" v-if="timerEnded">
      کد را دریافت نکردید!
      <span class="text-[#400842] font-medium underline cursor-pointer" @click="resendCode">ارسال مجدد</span>
    </div>
    <div v-else class="flex flex-col justify-start items-center font-medium text-center text-[16px] leading-[20px] text-[#133C3E]">
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['resend'])
const props = defineProps({
  period: {
    type: Number,
    default: 120
  },
  reset: {
    type: Boolean,
    required: true
  }
})

const time = ref<number>(props.period)
const timerEnded = ref<Boolean>(false)
timerEnded.value = false

const resendCode = () => {
  emits('resend')
}

const count = () => {
  timerEnded.value = false;
  const timeCounter = setInterval(() => {
    if (time.value == 1) {
      clearInterval(timeCounter);
      timerEnded.value = true;
      time.value = 120
    } else {
      time.value = time.value - 1
    }
  }, 1000);
}
onMounted(() => {
  count()
})

watch(() => props.reset, count)

defineExpose({
  count
});
</script>

<style scoped>

</style>