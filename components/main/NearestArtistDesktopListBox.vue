<template>
  <div class="w-full flex flex-col items-start justify-start bg-[#EBF3F580] py-[64px] px-[64px]">
    <div class="w-full flex justify-center">
      <div class="text-[#133C3E] font-semibold text-center text-[40px] max-w-[60%] w-full">
        با نزدیک ترین  هنرمندان شهر خود آشناشوید
      </div>
    </div>
    <div class="w-full mt-[40px]">
      <Splide :options="options" aria-label="">
        <SplideSlide v-for="(a, i) in artists" :key="i">
          <ArtistDesktopItem
              :id="a.id"
              :artist="a"
          />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useSearchStore} from "~/store/Search";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';

const artists = ref<IArtist[]>([])

const options = ref({
  direction: "rtl",
  autoWidth: true,
  pagination: false,
  arrows: true,
})

const search = useSearchStore()

const getArtists = async () => {
  const lat = search.lat
  const lng = search.lng
  const page = ref(1)
  const limit = ref(6)
  setTimeout(async () => {
    // let url = `/nearest?page=${page.value}&limit=${limit.value}`
    // if (lat && lng) {
    //   url += `&lat=${lat}&lng=${lng}`
    // }
    // const res = await useCustomFetch(url, {
    //   method: "GET"
    // })
    // if (res.data.value) {
    //   artists.value = res.data.value?.data as IArtist[]
    // }
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