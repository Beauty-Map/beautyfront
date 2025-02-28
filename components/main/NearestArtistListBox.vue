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
const locationCookie = useCookie('selectedLocation', {
  maxAge: 256*24*60*60
})

const toggleBookmark = (a) => {
}

const getArtists = async () => {
  setTimeout(async () => {
    let url = `/nearest?page=1&limit=6`
    if (locationCookie.value?.province) {
      url += `&province_id=${locationCookie.value?.province.id}`
    }
    if (locationCookie.value?.city) {
      url += `&city_id=${locationCookie.value?.city.id}`
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

watch(() => locationCookie.value, getArtists)
</script>

<style scoped>

</style>