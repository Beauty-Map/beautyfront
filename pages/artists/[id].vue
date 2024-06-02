<template>
  <div class="flex flex-col h-full relative pb-[100px]">
    <div class="pl-[3px] fixed left-[23px] pt-[21px] pb-[79px] z-[999999]">
      <PortfolioPageBackIcon @click="goBack" />
    </div>
    <div class="w-full h-full">
      <ArtistBannerSlideBox :images="user.banners"/>
    </div>
    <div class="w-full h-full px-[20px]">
      <ArtistDetailBox
        :user="user"
      />
    </div>

    <div class="w-full h-full px-[20px]">
      <ArtistBioAndPortfolioBox
        :user="user"
      />
    </div>

    <ArtistCallBox />
  </div>
</template>

<script setup lang="ts">

import PortfolioPageBackIcon from "~/components/icons/PortfolioPageBackIcon.vue";
import ArtistBioAndPortfolioBox from "~/components/artist/ArtistBioAndPortfolioBox.vue";

definePageMeta({
  layout: 'portfolio-single'
})

const router = useRouter()
const route = useRoute()
const user = ref<IArtist>({
  id: 1,
  full_name: "زیبا اعظمی",
  phone_number: '09381412419',
  bio: 'من با 0 سال سابقه در صنعت آرایشگری میخواهم مشتری بگیرم که بتوانم یاد بگیرم حتما برای شما سوال شده مگه بلد نیست؟',
  distance: '1.5km',
  is_bookmarked: false,
  avatar: '/images/artist/2.png',
  has_blue_tick: true,
  banners: ['/images/artist/banner.png', '/images/artist/banner.png'],
  rating: 4,
  address: 'همدان,پاسداران,جلالی,کوچه عقیل,بن بست 40,پلاک5,واحد 2',
  created_at_ago_fa: 'یک سال پیش',
  portfolios_count: 15,
  services_count: 3,
  services: [
    {
      id: 1,
      title: "خدمات ناخن",
      image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
      is_active: 1,
      parent_id: null,
      created_at: "2024-04-12T16:14:23.000000Z",
      updated_at: "2024-04-12T16:14:23.000000Z"
    },
    {
      id: 1,
      title: "خدمات ناخن",
      image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
      is_active: 1,
      parent_id: null,
      created_at: "2024-04-12T16:14:23.000000Z",
      updated_at: "2024-04-12T16:14:23.000000Z"
    },
    {
      id: 1,
      title: "خدمات ناخن",
      image: "https://via.placeholder.com/57x57.png/00ddaa?text=minus",
      is_active: 1,
      parent_id: null,
      created_at: "2024-04-12T16:14:23.000000Z",
      updated_at: "2024-04-12T16:14:23.000000Z"
    },
  ],
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
  ],
  portfolios: [
    {
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
    }
  ],
  licenses: [
    "مدارک و مجوزها جواز کسب - دوره بین المللی میکاپ",
    "مدارک و مجوزها جواز کسب - دوره بین المللی میکاپ",
    "مدارک و مجوزها جواز کسب - دوره بین المللی میکاپ",
    "مدارک و مجوزها جواز کسب - دوره بین المللی میکاپ",
    "مدارک و مجوزها جواز کسب - دوره بین المللی میکاپ",
    "مدارک و مجوزها جواز کسب - دوره بین المللی میکاپ",
  ]
})
const id = route.params.id
const getUser = async () => {
  const res = await useCustomFetch(`/users/${id}`, {
    method: "GET"
  })
  if (res.data.value) {
    user.value = res.data.value?.data as IArtist
  }
  if (res.error.value) {
    router.back()
  }
}

const goBack = () => {
  router.back()
}

await getUser()
</script>

<style scoped>

</style>