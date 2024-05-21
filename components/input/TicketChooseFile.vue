<template>
  <div class="cursor-pointer flex flex-col items-start justify-start max-w-[200px] mx-auto">
    <div @click="openChooseFile" class="text-[#133C3E] rounded-[25px] font-medium text-[15px] text-center leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[8px] px-[12px] cursor-pointer flex flex-row justify-start items-center">
      <TicketFileIcon />
      <span>فایل پیوست (اختیاری)</span>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <input accept="application/pdf,image/jpeg,image/png" hidden type="file" ref="file" @change="onFileChoose">
  </div>
</template>

<script setup lang="ts">

import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import TicketFileIcon from "~/components/icons/TicketFileIcon.vue";

const emits = defineEmits(['choose'])
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const file = ref()
const base64File = ref<string | ArrayBuffer | null>(null);

const openChooseFile = () => {
  file.value?.click()
}

const onFileChoose = ($event: Event) => {
  const file = $event.target?.files[0];
  if (!file) {
    emits('choose', '')
    return
  }
  const reader = new FileReader();

  reader.onload = () => {
    base64File.value = reader.result;
    emits('choose', base64File.value)
  };

  reader.readAsDataURL(file);

}

</script>

<style scoped>

</style>