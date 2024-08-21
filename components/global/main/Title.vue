<template>
  <h1 class="main-title text-right">{{ title }}</h1>
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