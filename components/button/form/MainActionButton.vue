<template>
  <div :class="[disabled ? ' bg-[rgb(177,177,177)]' : ' bg-[#FF3CA0]']" class="cursor-pointer flex flex-row justify-center items-center rounded-[20px] h-[48px] w-full">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>

</style>