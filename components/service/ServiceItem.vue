<template>
  <nuxt-link :to="`/services/${id}`" class="flex flex-col items-center justify-start">
    <img :src="image" alt="" class="w-[57px] h-[57px] mb-2" :class="{'rounded-[50%]': circle, 'rounded-[8px]': !circle}">
    <div class="text-center leading-[18px] text-xs">{{ title }}</div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  circle: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>

</style>