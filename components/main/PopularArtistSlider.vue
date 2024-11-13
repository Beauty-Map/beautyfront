<template>
  <div class="w-full flex flex-col items-start justify-start" v-if="slide">
    <MainTitle :title="'هنرمندان محبوب'" class="mb-[8px]"/>
    <PopularArtistSliderItem
      :image="slide.image"
      :main-title="slide.main_title"
      :sub-title="slide.sub_title"
      :description="slide.description"
      :link-url="slide.link_url"
      :link-title="slide.link_title"
    />
  </div>
</template>

<script setup lang="ts">
import PopularArtistSliderItem from "~/components/main/PopularArtistSliderItem.vue";
const slide = ref(null)

const getArtist = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  let url = '/main-sliders'
  getRequest(url)
      .then(res => {
        slide.value = res.data
      })
}

onMounted(async () => await getArtist())
</script>

<style scoped>

</style>