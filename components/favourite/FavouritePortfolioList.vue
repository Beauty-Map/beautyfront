<template>
  <div class="w-full px-[25px] py-[25px] rounded-[8px]">
    <PortfolioItem
      v-for="(p, i) in portfolios"
      :key="i"
      :portfolio="p"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  portfolios: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>

<style scoped>

</style>