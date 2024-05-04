<template>
  <div
      class="flex flex-col overflow-y-scroll w-full h-full bg-white"
  >
    <div class="flex flex-col justify-start items-start w-full sticky top-0 border-b border-b-[#A9A7A7]">
      <div class="w-full flex flex-row items-center justify-end pt-[23px] pl-[3px]">
        <Header />
        <BackIcon @click="goBack" />
      </div>
      <TabHeader @select="selectTab"/>
    </div>
    <FavouritePortfolioList :portfolios="portfolios" v-if="selectedTab == 1"/>
    <FavouriteArtistList :artists="artists" v-if="selectedTab == 2"/>

  </div>
</template>

<script setup lang="ts">

import Header from "~/components/favourite/Header.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import TabHeader from "~/components/favourite/TabHeader.vue";
import FavouritePortfolioList from "~/components/favourite/FavouritePortfolioList.vue";

const router = useRouter()

const portfolios = ref<IPortfolio[]>([])
const artists = ref<IArtist[]>([])

const selectedTab = ref<number>(1)

const goBack = () => {
  router.back()
}

const getPortfolios = async () => {
  const {data: data} = await useFetch('/api/portfolios')
  portfolios.value = (data.value as IPortfolio[])
}

const getArtists = async () => {
  const {data: data} = await useFetch('/api/artists')
  artists.value = (data.value as IArtist[])
}

const selectTab = (i: number) => {
  selectedTab.value = i
}

getPortfolios()
getArtists()
</script>

<style scoped>

</style>