<template>
  <div class="h-screen py-[65px] w-full flex flex-col justify-start items-center">
    <IntroList
        :slides="introArray"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "intro"
})
const introArray = ref([])

const getIntroList = async () => {
  const {data: data} = await useFetch('/api/intros')
  introArray.value = (data.value as [])
}
getIntroList()
</script>

<style scoped>

</style>