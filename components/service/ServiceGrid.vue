<template>
  <div class="grid grid-cols-3 gap-x-2 gap-y-8 w-full">
    <ServiceItem
      v-for="(s, i) in services"
      :key="i"
      :id="s.id"
      :title="s.title"
      :image="s.image"
      :circle="circle"
      :is-link="isLink"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  circle: {
    type: Boolean,
    default: true
  },
  services: {
    type: Array,
    default: () => []
  },
  isLink: {
    type: Boolean,
    default: true
  }
})

</script>

<style scoped>

</style>