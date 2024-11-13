<template>
  <div class="flex flex-row w-full gap-4 items-center justify-start">
<!--    <ButtonMainSearchFilter />-->
<!--    <MainSearchInput v-model="searchTerm" @update:model-value="onSearch"/>-->
    <MainSearchInput v-model="searchTerm" @doSearch="onSearch"/>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const searchTerm = ref<string>('')

const onSearch = (term: string) => {
  let url = `/search`
  if (term) {
    url += `?term=${term}`
  }
  router.push(url)
}
</script>

<style scoped>

</style>