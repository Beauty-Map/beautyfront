<template>
  <div class="flex flex-col justify-start items-start">
    <ArtistItem
        v-for="(p,i) in searchStore.artists"
        :key="i"
        :artist="p"
    />
    <InfiniteLoading :firstload="true" v-if="searchStore.showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
  </div>
</template>

<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import {useSearchStore} from "~/store/Search";
const searchStore = useSearchStore()

const paginate = async () => {
  if (searchStore.loadingArtists) return
  if (searchStore.page <= searchStore.lastPage) {
    searchStore.paginate()
  }
}

const paginateDebounce = useDebounce(paginate, 500)

onMounted(() => {
  searchStore.page = 1
})
</script>

<style scoped>

</style>