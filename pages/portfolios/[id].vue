<template>
  <div class="flex flex-col h-full relative">
    <div class="flex flex-row items-center justify-between pl-[3px] absolute left-[23px] right-[15px] pt-[21px] pb-[79px] z-[999999]">
      <PortfolioPageHeader
          :user="portfolio.user"
          :rating="portfolio.rating"
      />
      <PortfolioPageBackIcon @click="goBack" />
    </div>
    <div class="w-full h-full">
      <PortfolioSlideBox :images="portfolio.images"/>
    </div>
    <div class="w-full h-full pt-[21px] pb-[79px]">
      <PortfolioContentBox
          :portfolio="portfolio"
      />
    </div>
    <PortfolioBottomBox :portfolio="portfolio" />
  </div>
</template>

<script setup lang="ts">

import PortfolioPageBackIcon from "~/components/icons/PortfolioPageBackIcon.vue";

definePageMeta({
  layout: 'portfolio-single'
})

const router = useRouter()
const route = useRoute()
const portfolio = ref<IPortfolio>({
  id: 1,
  title: 'خدمات ناخن',
  description: 'کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر است. زنان و مردانی که موهای وز، فر یا مجعد دارند می‌توانند به کمک این روش، زیبایی و طراوت موهای خود را افزایش دهند. در واقع کراتینه مو یک روش صافی دائمی نیست، اما در صورت رعایت مراقبت‌های لازم بعد از صافی، اثرات آن حدود چهار تا ۶ ماه روی موها باقی می‌ماند',
  rating: 4.5,
  price: 100000,
  discount_price: 90000,
  is_bookmarked: true,
  has_tel: true,
  has_phone_number: false,
  showing_phone_number: '09381412419',
  service_id: 1,
  service: {
    id: 1,
    title: "خدمات ناخن",
    image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
    is_active: 1,
    parent_id: null,
    created_at: "2024-04-12T16:14:23.000000Z",
    updated_at: "2024-04-12T16:14:23.000000Z"
  },
  user_id: 1,
  user: {
    id: 1,
    full_name: "زیبا اعظمی",
    phone_number: '09381412419',
    avatar: '/images/artist/2.png',
    has_blue_tick: true
  },
  images: ['/images/artist/1.jpg', '/images/artist/1.jpg'],
  work_hours: [
    {
      "day_index": 1,
      "start_hour": "09:12",
      "end_hour": "08:00"
    },
    {
      "day_index": 2,
      "start_hour": "09:12",
      "end_hour": "08:00"
    },
    {
      "day_index": 3,
      "start_hour": "09:12",
      "end_hour": "08:00"
    },
    {
      "day_index": 4,
      "start_hour": "09:12",
      "end_hour": "08:00"
    }
  ]
})
const id = route.params.id
const getPortfolio = async () => {
  const res = await useCustomFetch(`/portfolios/${id}`, {
    method: "GET"
  })
  if (res.data.value) {
    portfolio.value = res.data.value.data as IPortfolio
  }
  if (res.error.value) {
    router.back()
  }
}

const goBack = () => {
  router.back()
}

await getPortfolio()
</script>

<style scoped>

</style>