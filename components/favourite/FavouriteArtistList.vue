<template>
  <div class="w-full px-[25px] py-[25px] rounded-[8px]">
    <ArtistItem
      v-for="(a, i) in artists"
      :key="i"
      :artist="a"
    />
  </div>
</template>

<script setup lang="ts">

import ArtistItem from "~/components/artist/ArtistItem.vue";

const props = defineProps({
  artists: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>

<style scoped>

</style>