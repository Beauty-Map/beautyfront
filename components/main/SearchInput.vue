<template>
  <div class="flex flex-row relative w-full gap-2text-pink-500 rounded border border-solid border-zinc-500 border-opacity-70">
    <input dir="auto" inputmode="search" ref="search" :value="modelValue" @input="onInputDebounce" @keydown.enter="enterPressed" type="search" :placeholder="placeholder" class="search-input rounded w-full py-2 pr-8 pl-2.5 text-xs font-medium text-right outline-none focus:outline-none">
    <SearchIcon class="absolute top-[10px] right-[8px] "/>
  </div>
</template>

<script setup lang="ts">

import SearchIcon from "~/components/icons/SearchIcon.vue";
const emits = defineEmits(['update:modelValue', 'doSearch'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})
const search = ref()
const onInput = (e: Event) => {
  emits('update:modelValue', e.target?.value)
  emits('doSearch', e.target?.value)
}

const onInputDebounce = useDebounce(onInput, 1200)

const enterPressed = (e: Event) => {
  e.preventDefault()
  emits('update:modelValue', search.value.value)
  emits('doSearch', search.value.value)
}
</script>

<style scoped>

</style>