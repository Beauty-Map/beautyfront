<template>
  <div class="mt-[20px] w-full flex flex-col items-start justify-start pb-[90px]">
    <div class="w-full relative flex flex-row items-center justify-center py-[23px] border-b border-b-[#A9A7A7]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">نمونه کار</div>
      <BackIcon @click="goBack" class="absolute left-[30px]"/>
    </div>
    <div class="w-full flex flex-col my-[8px] px-[15px]">
      <div class="w-full flex flex-row gap-[10px] justify-start items-center">
        <div @click="openFilterDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">
          <FilterIcon />
          <span>فیلتر</span>
          <ArrowDownIcon />
        </div>
      </div>
      <div class="mt-[8px] w-full flex flex-col justify-start items-start">
        <PortfolioItem
            v-for="(p, i) in portfolios"
            :key="i"
            :portfolio="p"
        />
      </div>
    </div>
    <div class="fixed pt-[10px] left-0 right-0 bottom-0 pb-[40px] px-[30px] flex flex-col justify-start items-start bg-white z-[9999]">
      <nuxt-link to="/panel/artist/portfolios/create" class="cursor-pointer flex flex-row justify-start items-center">
        <PlusButtonIcon />
        <div class="px-[8px] py-[3px] rounded-full bg-[#E7FAF4] text-center mr-[4px] text-[#133C3E] font-medium text-[12px] leading-[18px]">نمونه کار جدید</div>
      </nuxt-link>
    </div>
    <FilterPortfolioDrawer @close="closeFilterDrawer" @choose="chooseService" :is-open="showFilterDrawer" />
  </div>
</template>

<script setup lang="ts">

import ArrowDownIcon from "~/components/icons/ArrowDownIcon.vue";
import FilterPortfolioDrawer from "~/components/drawer/FilterPortfolioDrawer.vue";
import FilterIcon from "~/components/icons/FilterIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import PlusButtonIcon from "~/components/icons/PlusButtonIcon.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const portfolios = ref<IPortfolio[]>([])
const showFilterDrawer = ref<Boolean>(false)

const goBack = () => {
  router.replace('/panel/artist')
}

const openFilterDrawer = () => {
  showFilterDrawer.value = true
}

const closeFilterDrawer = () => {
  showFilterDrawer.value = false
}

const chooseService = (s: IService) => {
  console.log(s, "s")
}

const getArtists = async () => {
  const {data: data} = await useFetch('/api/portfolios')
  portfolios.value = (data.value as IPortfolio[])
}

getArtists()
</script>

<style scoped>

</style>