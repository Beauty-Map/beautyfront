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
    <FavouritePortfolioList :portfolios="portfolios" v-if="selectedTab == 1" @toggle-bookmark="togglePortfolioBookmark"/>
    <FavouriteArtistList :artists="artists" v-if="selectedTab == 2" @toggle-bookmark="toggleArtistBookmark"/>
  </div>
</template>

<script setup lang="ts">

import Header from "~/components/favourite/Header.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import TabHeader from "~/components/favourite/TabHeader.vue";
import FavouritePortfolioList from "~/components/favourite/FavouritePortfolioList.vue";

definePageMeta({
  middleware: 'auth',
})

const router = useRouter()
const app = useNuxtApp()

const portfolios = ref<IPortfolio[]>([])
const artists = ref<IArtist[]>([])
const {$getRequest: getRequest}=app

const selectedTab = ref<number>(1)

const goBack = () => {
  router.back()
}

const togglePortfolioBookmark = () => {
  getPortfolios()
}

const toggleArtistBookmark = () => {
  getArtists()
}

const getPortfolios = async () => {
  getRequest('/own/portfolios/favourite')
      .then((res) => {
        portfolios.value = (res.data as IPortfolio[])
      })
}

const getArtists = async () => {
  getRequest('/own/artists/favourite')
      .then((res) => {
        artists.value = (res.data as IArtist[])
      })
}

const selectTab = (i: number) => {
  selectedTab.value = i
}

onMounted(() => nextTick(async () => {
    await getPortfolios()
    await getArtists()
  })
)
</script>

<style scoped>

</style>
<script setup lang="ts">
</script>