<template>
  <div class="bg-[rgba(0,0,0,.4)] duration-500 transition-all fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-[999999999]" @click="closeModal"
      :class="[open ? 'flex' : 'hidden']"
  >
    <div class="bg-white relative rounded-[12px] px-[30px] py-[30px] min-w-[150px] min-h-[150px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <CloseIcon v-if="showClose" @click="closeModal" class="absolute top-[5px] right-[5px]"/>
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