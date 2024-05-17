<template>
  <div class="cursor-pointer flex flex-col text-center justify-center items-center relative">
    <SelectedHover class="absolute -top-[8px]" v-if="selected"/>
    <slot></slot>
    <div class="text-center text-white text-[12px] leading-[18px] mt-1">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectedHover from "~/components/bottom-navigation/SelectedHover.vue";

const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
    required: true,
  }
})
</script>

<style scoped>

</style>