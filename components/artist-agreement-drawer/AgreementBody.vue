<template>
  <div class="w-full flex flex-col justify-start items-start py-[13px] px-[20px]">
    <div v-html="html" class="w-full max-h-[312px] overflow-y-scroll">

    </div>
  </div>
</template>
<script setup lang="ts">
const html = ref(`
  <div>
    <h1 class="">3. Clause 3</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.
      </p>
  </div>
`)
</script>