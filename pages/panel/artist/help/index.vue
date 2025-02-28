<template>
  <div class="pt-[10px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">راهنمای استفاده</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div v-html="help" v-if="help" class="w-full h-full px-4"></div>
    <div v-else class="w-full text-center font-semibold mt-16">موردی یافت نشد!</div>
  </div>
</template>

<script setup lang="ts">


import BackIcon from "~/components/icons/BackIcon.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const help = ref('')

const goBack = () => {
  router.back()
}
const getSetting = () => {


  const {$getRequest:getRequest} = useNuxtApp()
  getRequest(`/settings`)
      .then(res => {
        help.value = res.help.replace('\n', '</br>')
      })
}
onMounted(() => getSetting())
</script>

<style scoped>

</style>