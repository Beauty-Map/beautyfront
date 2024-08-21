<template>
  <div class="w-full max-w-[80%] mx-auto">
    <ServiceDesktopGrid :services="services"/>
  </div>
</template>

<script setup lang="ts">
import ServiceDesktopGrid from "~/components/service/ServiceDesktopGrid.vue";

const services = ref<IService[]>([])
const getServices = async () => {
  const res = await useCustomFetch('/services', {
    method: "GET",
  })
  if (res.data.value) {
    services.value = res.data.value?.data as IService[]
  }
}

onMounted(() => {
  nextTick(() => getServices())
})
</script>

<style scoped>

</style>