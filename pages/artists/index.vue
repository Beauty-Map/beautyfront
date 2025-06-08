<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full w-full">
    <PageHeader class="mb-4" />
    <ArtistsSearchList />
  </div>
</template>

<script setup lang="ts">
import PageHeader from "~/components/artists/PageHeader.vue";
import ArtistsSearchList from "~/components/artists/ArtistsSearchList.vue";
</script>

<style scoped></style>
