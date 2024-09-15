<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full w-full" v-if="service">
    <PageHeader :title="service.title" class="mb-[60px]"/>
    <ServiceGrid :services="service.children" :circle="false" :is-link="false" v-if="service.children.length > 0"/>
    <div v-else class="w-full text-center ">
      هیچ آیتمی یافت نشد!
    </div>
  </div>
</template>

<script setup lang="ts">

import PageHeader from "~/components/header/PageHeader.vue";
import ServiceGrid from "~/components/service/ServiceGrid.vue";

definePageMeta({
  layout: 'default'
})

const app = useNuxtApp()
const route = useRoute()
const service = ref<IService>()
const id = route.params.id
const getService = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/services/${id}`)
      .then(res => {
        service.value = res.data as IService
      })
}

onMounted(() => nextTick(async () => await getService()))
</script>

<style scoped>

</style>