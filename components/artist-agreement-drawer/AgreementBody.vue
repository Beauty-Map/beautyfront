<template>
  <div class="w-full flex flex-col justify-start items-start py-[13px] px-[20px]">
    <div v-html="html" class="w-full max-h-[312px] overflow-y-scroll">

    </div>
  </div>
</template>
<script setup lang="ts">
const html = ref('')

const res = await useCustomFetch('/settings', {
  method: "GET",
})
if (res.data.value) {
  html.value = res.data.value?.rule
}
</script>