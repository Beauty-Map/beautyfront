<template>
  <nuxt-link :to="to" class="flex flex-row justify-start items-start w-full mb-6">
    <div class="mt-1">
      <slot name="icon"></slot>
    </div>
    <div class="flex flex-row justify-between items-center w-full mr-4 border-b border-[#A9A7A7] pb-4">
      <div class="text-[#133C3E] text-[12px] leading-[18px] font-medium"><slot name="title"></slot></div>
      <LeftArrow />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import LeftArrow from "~/components/icons/LeftArrow.vue";

const props = defineProps({
  to: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped>

</style>