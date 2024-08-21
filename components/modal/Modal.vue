<template>
  <div class="bg-[rgba(0,0,0,.4)] duration-500 transition-all fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-[999999999]" @click="closeModal"
      :class="[open ? 'flex' : 'hidden']"
  >
    <div class="bg-white relative rounded-[12px] max-w-[calc(100vw-40px)] min-w-[150px] min-h-[150px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
    :class="showClose ? 'px-[30px] py-[30px]' : 'px-[20px] py-[20px]'">
      <CloseIcon v-if="showClose" @click="closeModal" class="absolute top-[5px] right-[5px]"/>
      <div class="w-full h-full"><slot></slot></div>
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
  },
  showClose: {
    type: Boolean,
    default: true,
  }
})

const closeModal = () => {
  emits('close')
}
</script>

<style scoped>

</style>