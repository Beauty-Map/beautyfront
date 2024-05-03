<template>
  <div class="h-screen w-full flex flex-col justify-start items-center">
    <LazyIntroList
        :slides="introArray"
    />
  </div>
</template>

<script setup lang="ts">
const introArray = ref([])

const getIntroList = async () => {
  const {data: data} = await useFetch('http://localhost:8000/api/intros')
  introArray.value = data.value?.data
}
getIntroList()
</script>

<style scoped>

</style>