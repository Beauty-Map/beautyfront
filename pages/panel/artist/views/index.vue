<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">آمار بازدید</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full text-center font-semibold text-[16px] text-[#141414] leading-[24px] mt-[25px]">آمار بازدید کارت ویزیت شما</div>
    <div class="w-full gap-[20px] text-center flex flex-col justify-start items-center px-[10px] mt-[25px]">
      <PortfolioItem
          v-for="(p, i) in portfolios"
          :key="i"
          :portfolio="p"
          :is-bookmarked="p.is_bookmarked"
          :is-panel="true"
          :star-count="p.star_count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useAuthStore} from "~/store/Auth";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const auth = useAuthStore()
const user = ref(auth.user)

const portfolios = ref<IPortfolio[]>([])

const goBack = () => {
  router.replace('/panel/artist')
}

const getPortfoliosView = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/own/portfolios`)
      .then(res => {
        portfolios.value = res.data
      })
}

onMounted(async () => await getPortfoliosView())
</script>

<style scoped>

</style>