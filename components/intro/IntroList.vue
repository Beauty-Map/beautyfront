<template>
  <IntroItem
      v-for="(s, n) in slides"
      :key="n"
      :intro="s"
  />
</template>

<script setup lang="ts">
import IntroItem from "~/components/intro/IntroItem.vue";

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  },
})
</script>

<style scoped>

</style>