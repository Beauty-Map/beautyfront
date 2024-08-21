<template>
  <div class="w-full rounded-[50px] bg-white shadow-[0px_5px_30px_5px_#00000040] px-[70px] py-[40px]">
    <Splide v-if="portfolios.length > 0" :options="options" aria-label="">
      <SplideSlide v-for="(p,i) in portfolios" :key="i">
        <PortfolioDesktopItem
            :portfolio="p"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import {useCustomFetch} from "~/composables/useCustomFetch";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';

const props = defineProps({
  userId: {
    type: Number,
    required: true
  }
})

const options = ref({
  direction: "rtl",
  autoWidth: true,
  pagination: false,
  arrows: true,
})

const portfolios = ref<IPortfolio[]>([])
const getUserPortfolios = async () => {
  const res = await useCustomFetch(`/users/${props.userId}/portfolios`, {
    method: "GET",
  })
  if (res.error.value) {

  }
  if (res.data.value) {
    portfolios.value = res.data?.value?.data as IPortfolio[]
  }
}
onMounted(() => nextTick(async () => {
  await getUserPortfolios()
}))
</script>

<style scoped>

</style>