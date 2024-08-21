<template>
<BackIcon @click="goBack" />
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>

</style>