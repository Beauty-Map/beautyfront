<template>
  <div class="w-full flex flex-col items-start justify-start">
    <MainTitle :title="'نزدیک ترین ها'" class="mb-[8px]"/>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full">
      <ArtistItem
          v-for="(a, i) in artists"
          :key="i"
          :artist="a"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import ArtistItem from "~/components/artist/ArtistItem.vue";

const artists = ref<IArtist[]>([])

const getArtists = async () => {
  const {data: data} = await useFetch('/api/artists')
  artists.value = (data.value as IArtist[])
}

getArtists()
</script>

<style scoped>

</style>