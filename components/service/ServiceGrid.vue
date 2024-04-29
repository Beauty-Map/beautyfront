<template>
  <div class="grid grid-cols-4 gap-8 w-full">
    <ServiceItem
      v-for="(s, i) in serviceArray"
      :key="i"
      :id="s.id"
      :title="s.title"
      :image="s.image"
      :cicle="circle"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  circle: {
    type: Boolean,
    default: true
  }
})
const serviceArray = ref([])

const getServiceList = async () => {
  const {data: data} = await useFetch('http://localhost:8000/api/services')
  serviceArray.value = data.value.data
}
getServiceList()

</script>

<style scoped>

</style>