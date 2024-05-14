<template>
  <div class="flex flex-row w-full gap-4 items-center justify-start">
    <ButtonMainSearchFilter />
    <MainSearchInput v-model="searchTerm" @update:model-value="onSearch"/>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const searchTerm = ref<string>('')

const onSearch = (term: string) => {
  router.push(`/search?term=${term}`)
}
</script>

<style scoped>

</style>