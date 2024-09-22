<template>
  <div class="w-full px-[25px] py-[25px] rounded-[8px]">
    <ArtistItem
      v-for="(a, i) in artists"
      :key="i"
      :artist="a"
      @toggleBookmark="toggleBookmark"
    />
  </div>
</template>

<script setup lang="ts">

import ArtistItem from "~/components/artist/ArtistItem.vue";

const emits = defineEmits(['toggleBookmark'])
const props = defineProps({
  artists: {
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