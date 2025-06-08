<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex flex-row items-center justify-start">
      <SearchInput :placeholder="'جستجو در هنرمندان'" v-model="searchTerm" @doSearch="doSearch"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import SearchInput from "~/components/main/SearchInput.vue";
import {useSearchStore} from "~/store/Search";

const route = useRoute()
const router = useRouter()
const searchTerm = ref<string>(route.query.term as string ?? '')

const searchStore = useSearchStore()

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
    useSearchStore().resetArtists()
  }
  const {$getRequest: getRequest}=useNuxtApp()
  let queries = []
  for (const [key, value] of Object.entries(query)) {
    queries.push(`${key}=${value}`)
  }
  let url = '/search/artists'
  if (queries.length > 0) {
    url += `?${queries.join('&')}`
  }
  getRequest(url, query)
      .then(res => {
        let list = res.data as []
        if (list.length == 0) {
          searchStore.showInfiniteScroll = false
          return
        }
        searchStore.artists = [
          ...searchStore.artists,
          ...list
        ]
        searchStore.lastPage = res.last_page
        setTimeout(() => {
          searchStore.showInfiniteScroll = true
        }, 500)
      })
  searchStore.loadingArtists = false
}

const doChangeTerm = async () => {
  let query = {
    ...route.query
  }
  if (!searchTerm.value) {
    delete query.term
    searchStore.resetArtists()
  } else {
    query.term = searchTerm.value as string
    searchStore.resetArtists()
  }
  await router.replace({ query })
  // await doSearch()
}

const onChangePage = async () => {
  await doSearch()
}

const onChangeTermDebounce = useDebounce(doChangeTerm, 1500)
const onChangePageDebounce = useDebounce(onChangePage, 500)

watch(() => route.query, doSearch)
watch(() => searchTerm.value, onChangeTermDebounce)
watch(() => searchStore.page, onChangePageDebounce)

onMounted(() => {
  nextTick(() => doSearch())
})
</script>

<style scoped>

</style>