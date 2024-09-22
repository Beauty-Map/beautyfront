<template>
  <div class="w-full flex flex-col items-start justify-start">
    <MainTitle :title="'نزدیک ترین هنرمندان'" class="mb-[8px]"/>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full">
      <ArtistItem
          v-for="(a, i) in artists"
          :key="i"
          :artist="a"
          @toggleBookmark="toggleBookmark"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import ArtistItem from "~/components/artist/ArtistItem.vue";
import {useSearchStore} from "~/store/Search";

const artists = ref<IArtist[]>([])

const search = useSearchStore()

const toggleBookmark = (a) => {
}

const getArtists = async () => {
  const lat = search.lat
  const lng = search.lng
  setTimeout(async () => {
    let url = `/nearest`
    if (lat && lng) {
      url += `?lat=${lat}&lng=${lng}`
    }
    const res = await useCustomFetch(url, {
      method: "GET"
    })
    if (res.data.value) {
      artists.value = res.data.value?.data as IArtist[]
    }
  }, 500)
}

onMounted(() => {
  nextTick(() => {
    getArtists()
  })
})

watch(() => search.lat, getArtists)
watch(() => search.lng, getArtists)
</script>

<style scoped>

</style>