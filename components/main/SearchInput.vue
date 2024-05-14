<template>
  <div class="flex flex-row relative w-full gap-2text-pink-500 rounded border border-solid border-zinc-500 border-opacity-70">
    <input :value="modelValue" @input="onInputDebounce" type="search" placeholder="جستجو در بیوتی مپ" class="search-input rounded w-full py-2 pr-8 pl-2.5 text-xs font-medium text-right outline-none focus:outline-none">
    <SearchIcon class="absolute top-[10px] right-[8px] "/>
  </div>
</template>

<script setup lang="ts">

import SearchIcon from "~/components/icons/SearchIcon.vue";
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: false
  }
})
const onInput = (e: Event) => {
  emits('update:modelValue', e.target?.value)
}

const onInputDebounce = useDebounce(onInput, 500)
</script>

<style scoped>

</style>