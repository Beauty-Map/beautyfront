<template>
<div
    class="fixed flex flex-col h-full px-[30px] py-[30px] top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
    :class="[isOpen ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
>
  <div class="flex flex-col items-center justify-start px-4 mt-5">
    <img src="/intro/intro_1.png" alt="" class="max-h-[350px]">
    <p class="flex flex-col justify-center text-[#141414] font-medium text-[28px] leading-[40px] text-center self-center mt-11 w-full max-w-[275px]">
      <span>
      پنل هنرمندان بیوتی مپ، ابزار موفقیت کسب و کار شماست.
      </span>
      <span>
      Www.BeautyMap.ir
      </span>
    </p>
    <p class="justify-center text-center self-center mt-11 w-full max-w-[275px]">
    </p>
    <button class="w-full mt-4 mx-[20px] bg-[#FF3CA0] rounded-[15px] h-[48px] text-white cursor-pointer flex flex-row justify-center items-center" @click="doStart">
      <span>شروع</span>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">

const emits = defineEmits(['close'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const close = () => {
  emits('close')
}
const doStart = () => {
  close()
}
</script>

<style scoped>

</style>