<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">آمار بازدید</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full gap-[20px] text-center flex flex-col justify-start items-center px-[10px] mt-[45px]">
      <div class="bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-[25px] px-[5px] py-[10px]">
        <client-only>
          <LazyViewsChart :height="240" :chart-options="chartOptions" :series="series"/>
        </client-only>
      </div>
      <div class="bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-[25px] px-[5px] py-[10px]">
        <client-only>
          <LazyViewsChart :height="240" :chart-options="chartOptions" :series="series"/>
        </client-only>
      </div>
      <div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-[25px] px-[5px] py-[10px]">
        <client-only>
          <LazyViewsChart :height="240" :chart-options="chartOptions" :series="series"/>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const user = useSanctumUser()

const series = [{
  name: "STOCK ABC",
  data: [30, 40, 35, 50, 49, 60, 70, 91],
}]
const chartOptions = {
  chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    }
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
}

const goBack = () => {
  router.replace('/panel/artist')
}

</script>

<style scoped>

</style>