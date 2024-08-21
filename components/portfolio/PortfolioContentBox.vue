<template>
  <div class="flex flex-col justify-start items-start px-[10px]">
    <PortfolioContentHeader :id="portfolio.id" :title="portfolio.title" :service="portfolio.service"/>
    <PortfolioContentDescription :description="portfolio.description" :work-hours="portfolio.work_hours"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  portfolio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>