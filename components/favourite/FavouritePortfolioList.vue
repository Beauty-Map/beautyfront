<template>
  <div class="w-full px-[25px] py-[25px] rounded-[8px]">
    <PortfolioItem
      v-for="(p, i) in portfolios"
      :key="i"
      :portfolio="p"
      :is-bookmarked="p.is_bookmarked"
      @toggleBookmark="toggleBookmark"
    />
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['toggleBookmark'])
const props = defineProps({
  portfolios: {
    type: Array,
    default: () => [],
    required: true
  }
})
const toggleBookmark = (p) => {
  emits('toggleBookmark', p)
}
</script>

<style scoped>

</style>