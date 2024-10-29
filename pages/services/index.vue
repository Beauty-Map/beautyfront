<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full w-full">
    <PageHeader :title="'دسته بندی ها'" class="mb-[60px]"/>
    <ServiceGrid :services="serviceArray" :circle="false"/>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/header/PageHeader.vue";
import ServiceGrid from "../../components/service/ServiceGrid.vue";

definePageMeta({
  layout: 'default'
})
const serviceArray = ref<IService[]>([])

const getServiceList = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest('/services')
      .then(res => {
        alert('Hiiii')
        serviceArray.value = res.data as IService[]
      })
}

onMounted(async () => {
  alert('yes!!!')
  await getServiceList()
  alert('no!!!')
})
</script>

<style scoped>

</style>