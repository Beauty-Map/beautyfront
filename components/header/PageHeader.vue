<template>
  <div class="w-full flex flex-row relative mb-[25px]">
    <div v-if="title" class="mx-auto mt-[10px] text-center font-medium text-[16px] text-[#141414] leading-[24px]">{{ title }}</div>
    <ButtonBack class=" top-0 left-0"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>