<template>
  <div class="w-full flex flex-col my-[8px]">
    <div class="w-full flex flex-row gap-[10px] justify-start items-center">
<!--      <div @click="openFilterDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">-->
<!--        <FilterIcon />-->
<!--        <span>فیلتر</span>-->
<!--        <ArrowDownIcon />-->
<!--      </div>-->
<!--      <div @click="openSortDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">-->
<!--        <SortIcon />-->
<!--        <span>مرتب سازی</span>-->
<!--        <ArrowDownIcon />-->
<!--      </div>-->
    </div>
    <div class="mt-[8px] w-full flex flex-col justify-start items-start">
      <PortfolioItem
          v-for="(p, i) in searchStore.portfolios"
          :key="i"
          :portfolio="p"
      />
      <div class="w-full text-center mt-4" v-if="!searchStore.showInfiniteScroll && searchStore.portfolios.length == 0">موردی یافت نشد!</div>
      <InfiniteLoading :firstload="true" v-if="searchStore.showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
    </div>
<!--    <FilterPortfolioDrawer @close="closeFilterDrawer" @choose="chooseService" :is-open="showFilterDrawer" />-->
<!--    <SortPortfolioDrawer @close="closeSortDrawer" @choose="chooseSort" :is-open="showSortDrawer" />-->
  </div>
</template>

<script setup lang="ts">

// import FilterIcon from "~/components/icons/FilterIcon.vue";
// import SortIcon from "~/components/icons/SortIcon.vue";
// import FilterPortfolioDrawer from "~/components/drawer/FilterPortfolioDrawer.vue";
// import SortPortfolioDrawer from "~/components/drawer/SortPortfolioDrawer.vue";
import InfiniteLoading from "v3-infinite-loading";
import {useSearchStore} from "~/store/Search";

const searchStore = useSearchStore()
const route = useRoute()
const page = ref<Number>(1)

const showSortDrawer = ref<Boolean>(false)
const paginate = (p: number = 1) => {
  if (searchStore.page <= searchStore.lastPage) {
    searchStore.paginate()
    getPortfolios()
  }
}

const getPortfolios = async () => {
  const page = searchStore.page.toString()
  const query = {
    page: page,
    user_id: route.params.id
  }
  const res = await useCustomFetch('/search', {
    method: "GET",
    query: query,
  })
  if (res.data.value) {
    let list = res.data.value ? res.data.value?.data as [] : []
    if (list.length == 0) {
      searchStore.showInfiniteScroll = false
      return
    }
    searchStore.portfolios = [
      ...searchStore.portfolios,
      ...list
    ]
    searchStore.lastPage = res.data.value?.last_page
    setTimeout(() => {
      searchStore.showInfiniteScroll = true
    }, 300)
  }
}
const paginateDebounce = useDebounce(paginate, 500)

watch(() => searchStore.page, paginateDebounce)
onMounted(()=> {
  searchStore.resetArtists()
  searchStore.reset()
  getPortfolios()
})
</script>

<style scoped>

</style>