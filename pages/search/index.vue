<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full w-full">
    <PageHeader class="mb-4"/>
    <PortfolioSearchList/>
  </div>
</template>

<script setup lang="ts">

import PageHeader from "~/components/search/PageHeader.vue";
import PortfolioSearchList from "~/components/search/PortfolioSearchList.vue";

definePageMeta({
  layout: 'default'
})

</script>

<style scoped>

</style>