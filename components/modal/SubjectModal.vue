<template>
  <div class="bg-[rgba(0,0,0,.4)] duration-500 transition-all fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-[9999]" @click.stop="closeModal"
      :class="[open ? 'flex' : 'hidden']"
  >
    <div class="bg-white mx-[20px] max-h-[70%] relative rounded-[12px] min-w-[200px] min-h-[150px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <CloseIcon @click="closeModal" class="absolute top-[14px] right-[14px]"/>
      <div class="bg-[#133C3E] text-white font-semibold text-[14px] leading-[21px] rounded-t-[12px] h-[60px] flex flex-row justify-center items-center">
        <span>انتخاب موصوع</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import CloseIcon from "~/components/icons/CloseIcon.vue";

const emits = defineEmits(['close'])
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  }
})

const closeModal = () => {
  emits('close')
}
</script>

<style scoped>

</style>