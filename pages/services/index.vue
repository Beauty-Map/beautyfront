<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full">
    <PageHeader :title="'سرویس ها'" class="mb-[60px]"/>
    <ServiceGrid :circle="false"/>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "~/components/header/PageHeader.vue";

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>

</style>