<template>
  <div class="w-full flex flex-col items-start justify-start">
    <MainTitle :title="'نزدیک ترین ها'" class="mb-[8px]"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
      <NearestArtistItem />
    </div>
  </div>
</template>

<script setup lang="ts">

import NearestArtistItem from "~/components/main/NearestArtistItem.vue";
</script>

<style scoped>

</style>