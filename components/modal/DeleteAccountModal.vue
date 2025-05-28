<template>
  <div class="bg-transparent duration-500 transition-all  top-0 right-0 bottom-0 left-0 flex flex-col justify-end items-center z-[999999999]" @click="closeModal"
      :class="[open ? 'flex' : 'hidden']"
  >
    <div class="mb-[30px] mx-6 bg-white relative rounded-[12px] px-[17px] py-[17px] min-w-[150px] min-h-[150px] shadow-[0px_8px_8px_-4px_#e2e8f0]">
      <DeleteAccountAlertIcon class="mb-2"/>
      <div class="w-full flex flex-col justify-start items-start">
        <div class="font-semibold text-right text-[#141414] text-[17px] leading-[26px]">
          پاک کردن حساب کاربری
        </div>
        <div class="mt-[8px] font-semibold text-right text-[#828282] text-[14px] leading-[21px]">
          آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست.
        </div>
        <div class="mt-[15px] w-full flex flex-row justify-between items-center font-medium text-center text-white text-[14px] leading-[21px]">
          <button @click="doDelete" class="min-w-[130px] bg-[#ED2C25] rounded-[50px] py-[10px] px-[38px]">
            پاک کردن
          </button>
          <button @click="closeModal" class="min-w-[130px] bg-[#1EFF81] rounded-[50px] py-[10px] px-[38px] text-black">
            لغو
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import DeleteAccountAlertIcon from "~/components/icons/DeleteAccountAlertIcon.vue";

const emits = defineEmits(['close', 'delete'])
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})

const closeModal = () => {
  emits('close')
}

const doDelete = () => {
  emits('delete')
}
</script>

<style scoped>

</style>