<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full">
    <PageHeader :title="'سرویس ها'" class="mb-[60px]"/>
    <ServiceGrid :services="serviceArray" :circle="false"/>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "~/components/header/PageHeader.vue";

definePageMeta({
  layout: 'default'
})
const serviceArray = ref([])

const getServiceList = async () => {
  const {data: data} = await useFetch('http://localhost:8000/api/services')
  serviceArray.value = data.value?.data
}

getServiceList()
</script>

<style scoped>

</style>