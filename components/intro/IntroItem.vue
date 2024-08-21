<template>
  <div class="flex flex-col items-center justify-start px-4 mt-5">
    <img :src="intro.image" alt="">
    <p class="justify-center self-center mt-11 w-full max-w-[275px]">
      {{ intro.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  intro: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped>

</style>