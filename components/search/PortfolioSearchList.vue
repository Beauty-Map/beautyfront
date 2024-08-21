<template>
  <div class="flex flex-col justify-start items-start">
    <PortfolioItem
        v-for="(p,i) in searchStore.portfolios"
        :key="i"
        :portfolio="p"
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
  if (searchStore.page <= searchStore.lastPage) {
    searchStore.paginate()
  }
}

const paginateDebounce = useDebounce(paginate, 500)

</script>

<style scoped>

</style>