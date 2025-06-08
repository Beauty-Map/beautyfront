<template>
  <div class="flex flex-col justify-start items-start">
    <ArtistItem
        v-for="(p, i) in searchStore.artists"
        :key="i"
        :artist="p"
    />
    <InfiniteLoading
        v-if="searchStore.showInfiniteScroll"
        class="mx-auto"
        @infinite="paginateDebounce"
    />
  </div>
</template>

<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { useSearchStore } from "~/store/Search";

const searchStore = useSearchStore();

const paginate = async () => {
  if (searchStore.loadingArtists || searchStore.page >= searchStore.lastPage) return;
  searchStore.loadingArtists = true;
  searchStore.page++;
};

const paginateDebounce = useDebounce(paginate, 300);
</script>

<style scoped></style>
