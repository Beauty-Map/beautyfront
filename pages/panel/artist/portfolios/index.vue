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
        <InfiniteLoading :firstload="true" v-if="showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
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
import InfiniteLoading from "v3-infinite-loading";
import {useSearchStore} from "~/store/Search";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const portfolios = ref<IPortfolio[]>([])
const lastPage = ref<number>(1)
const page = ref<number>(1)
const showFilterDrawer = ref<Boolean>(false)
const showInfiniteScroll = ref<Boolean>(false)

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
const paginate = async () => {
  if (page <= lastPage) {
    page.value++
    await getPortfolios()
  }
}

const paginateDebounce = useDebounce(paginate, 500)
const getPortfolios = async () => {
  const res = await useCustomFetch(`http://localhost:8000/api/own/portfolios?limit=10&page=${page.value}`, {
    method: "get"
  })
  if (res.data.value) {
    let list = (res.data.value.data as IPortfolio[])
    if (list.length == 0) {
      showInfiniteScroll.value = false
      return
    }
    portfolios.value = [
        ...portfolios.value,
        ...list
    ]
    lastPage.value = (res.data.value.last_page as number)
    setTimeout(() => {
      showInfiniteScroll.value = true
    }, 300)
  }
}
onMounted(() => {
  nextTick(() => getPortfolios())
})
</script>

<style scoped>

</style>