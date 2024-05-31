<template>
  <Modal :show-close="false" :open="isOpen">
    <div class="flex flex-col items-center justify-start px-0">
      <h3 class="flex flex-col justify-start items-center text-[#141414] text-center font-semibold text-[18px] leading-[28px]">
        <span>خرید شما</span>
        <span>با کد رهگیری {{ order.order_id }} انجام گردید.</span>
        <span class="text-[16px] leading-[24px]">از شما بابت خرید ممنونیم</span>
        <span class="text-[16px] leading-[24px]">سکه ها به اکانت کاربری شما اضافه شد</span>
      </h3>
      <div class="w-full flex flex-col justify-start items-start py-[13px] px-[20px]">
        <img src="/panel/artist_agree_result.png" />
      </div>
      <button @click="closeModal" class="min-w-[300px] mt-4 mx-[30px] mb-[10px] bg-[#FF3CA0] rounded-full h-[48px] text-white cursor-pointer flex flex-row justify-center items-center">
        <span>متوجه شدم</span>
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">


const emits = defineEmits(['close'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  orderID: {
    type: Number,
    required: true
  },
})

const order = ref({
  order_id: '342314'
})

const closeModal = () => {
  emits('close')
}
</script>

<style scoped>

</style>