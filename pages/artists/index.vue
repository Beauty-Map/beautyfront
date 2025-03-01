<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full w-full">
    <PageHeader class="mb-4"/>
    <PortfolioSearchList/>
  </div>
</template>

<script setup lang="ts">

import PageHeader from "~/components/artists/PageHeader.vue";
import PortfolioSearchList from "~/components/artists/ArtistsSearchList.vue";
import {useSearchStore} from "~/store/Search";

definePageMeta({
  layout: 'default'
})
onMounted(() => useSearchStore().resetArtists())
</script>

<style scoped>

</style>