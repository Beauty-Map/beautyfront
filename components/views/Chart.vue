<template>
  <div id="chart" class="w-full">
    <apexchart type="area" :height="height" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  chartOptions: {
    type: Object,
    required: true
  },
  series: {
    type: Array,
    required: true
  },
  height: {
    type: Number,
    default: 350
  }
})
</script>

<style scoped>

</style>