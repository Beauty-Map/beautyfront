<template>
  <div class="flex flex-col px-[23px] py-[10px] h-full">
    {{service}}
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const service = ref<IService>()
const id = route.params.id
const getService = async () => {
  const {data: data} = await useFetch(`http://localhost:8000/api/services/${id}`)
  service.value = data.value?.data as IService
}

await getService()
</script>

<style scoped>

</style>