<template>
  <div class="w-full flex flex-col items-start justify-start">
    <MainTitle :title="'خدمات'" class="mb-[8px]"/>
    <ServiceGrid :services="services"/>
  </div>
</template>

<script setup lang="ts">
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