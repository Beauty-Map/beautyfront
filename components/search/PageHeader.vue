<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex flex-row items-center justify-start">
      <SearchInput v-model="searchTerm"/>
    </div>
    <div class="w-full flex flex-row gap-[10px] justify-start items-center mt-2 py-2 ">
      <div @click="openFilterDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">
        <FilterIcon />
        <span>فیلتر</span>
        <ArrowDownIcon />
      </div>
      <div @click="openSortDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">
        <SortIcon />
        <span>مرتب سازی</span>
        <ArrowDownIcon />
      </div>
    </div>
    <FilterPortfolioDrawer @close="closeFilterDrawer" @choose="chooseService" :selected="selectedService" :is-open="showFilterDrawer" />
    <SortPortfolioDrawer @close="closeSortDrawer" @choose="chooseSort" :is-open="showSortDrawer" />
  </div>
</template>

<script setup lang="ts">

import SearchInput from "~/components/main/SearchInput.vue";
import FilterIcon from "~/components/icons/FilterIcon.vue";
import SortIcon from "~/components/icons/SortIcon.vue";
import ArrowDownIcon from "~/components/icons/ArrowDownIcon.vue";
import FilterPortfolioDrawer from "~/components/drawer/FilterPortfolioDrawer.vue";
import SortPortfolioDrawer from "~/components/drawer/SortPortfolioDrawer.vue";
import {useSearchStore} from "~/store/Search";

const route = useRoute()
const router = useRouter()
const searchTerm = ref<string>(route.query.term as string ?? '')

const searchStore = useSearchStore()

const showFilterDrawer = ref<Boolean>(false)
const showSortDrawer = ref<Boolean>(false)
const selectedService = ref({
  id: -1,
  title: 'همه خدمات',
  image: '',
  is_active: 0,
  parent_id: null,
  created_at: '',
  updated_at: '',
  children: []
})

const openFilterDrawer = () => {
  showFilterDrawer.value = true
}

const closeFilterDrawer = () => {
  showFilterDrawer.value = false
}

const chooseService = async (s: IService) => {
  let query = {
    ...route.query
  }
  delete query.page
  if (s.id == -1) {
    delete query.service
  } else {
    query.service = s.id.toString()
    selectedService.value = s
  }
  searchStore.reset()
  await router.replace({ query })
}

const openSortDrawer = () => {
  showSortDrawer.value = true
}

const closeSortDrawer = () => {
  showSortDrawer.value = false
}

const chooseSort = async (s: ISort) => {
  let query = {
    ...route.query
  }
  delete query.page
  switch (s.id) {
    case 1:
      delete query.order_by
      delete query.sort_by
          break
    case 2:
      query.order_by = 'created_at'
      query.sort_by = 'desc'
      break
    case 3:
      query.order_by = 'price'
      query.sort_by = 'asc'
      break
    case 4:
      query.order_by = 'price'
      query.sort_by = 'desc'
      break
    case 5:
      query.order_by = 'discount'
      query.sort_by = 'desc'
      break
  }
  searchStore.reset()
  await router.replace({ query })
}

const doSearch = async () => {
  const query = route.query ?? {}
  if (query.page) {
    delete query.page
  }
  const locationCookie = useCookie('selectedLocation', {
    maxAge: 256*24*60*60
  })
  if (locationCookie.value) {
    if (locationCookie.value?.province) {
      query.province_id = locationCookie.value?.province.id
    }
    if (locationCookie.value?.city) {
      query.city_id = locationCookie.value?.city.id
    }
  }
  query.page = searchStore.page.toString()
  if (query.page == "1") {
    useSearchStore().reset()
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
    }, 500)
  }
}

const doChangeTerm = async () => {
  let query = {
    ...route.query
  }
  if (!searchTerm.value) {
    delete query.term
    searchStore.reset()
  } else {
    query.term = searchTerm.value as string
    searchStore.reset()
  }
  await router.replace({ query })
  // await doSearch()
}

const onChangePage = async () => {
  await doSearch()
}

const onChangeTermDebounce = useDebounce(doChangeTerm, 500)
const onChangePageDebounce = useDebounce(onChangePage, 500)

watch(() => route.query, doSearch)
watch(() => searchTerm.value, onChangeTermDebounce)
watch(() => searchStore.page, onChangePageDebounce)

onMounted(() => {
  useSearchStore().resetArtists()
  nextTick(() => doSearch())
})
</script>

<style scoped>

</style>