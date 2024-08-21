<template>
  <div class="w-full flex flex-col my-[8px]">
    <div class="w-full flex flex-row gap-[10px] justify-start items-center">
      <div @click="openFilterDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">
        <FilterIcon />
        <span>فیلتر</span>
        <ArrowDownIcon />
      </div>
      <div @click="openSortDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">
        <SortIcon />
        <span>مرتب سازی</span>
        <ArrowDownIcon />
      </div>
    </div>
    <div class="mt-[8px] w-full flex flex-col justify-start items-start">
      <PortfolioItem
          v-for="(p, i) in portfolios"
          :key="i"
          :portfolio="p"
      />
    </div>
    <FilterPortfolioDrawer @close="closeFilterDrawer" @choose="chooseService" :is-open="showFilterDrawer" />
    <SortPortfolioDrawer @close="closeSortDrawer" @choose="chooseSort" :is-open="showSortDrawer" />
  </div>
</template>

<script setup lang="ts">

import ArrowDownIcon from "~/components/icons/ArrowDownIcon.vue";
import FilterIcon from "~/components/icons/FilterIcon.vue";
import SortIcon from "~/components/icons/SortIcon.vue";
import FilterPortfolioDrawer from "~/components/drawer/FilterPortfolioDrawer.vue";
import SortPortfolioDrawer from "~/components/drawer/SortPortfolioDrawer.vue";

const portfolios = ref<IPortfolio[]>([])
const page = ref<Number>(1)

const showFilterDrawer = ref<Boolean>(false)
const showSortDrawer = ref<Boolean>(false)

const openFilterDrawer = () => {
  showFilterDrawer.value = true
}

const closeFilterDrawer = () => {
  showFilterDrawer.value = false
}

const chooseService = (s: IService) => {
  console.log(s)
}

const openSortDrawer = () => {
  showSortDrawer.value = true
}

const closeSortDrawer = () => {
  showSortDrawer.value = false
}

const chooseSort = (s: ISort) => {
  console.log(s)
}

const paginate = (p: number = 1) => {
  page.value = p
  getPortfolios()
}

const getPortfolios = () => {
  portfolios.value = [
      ...portfolios.value,
      ...[
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
      ]
  ]
}

paginate()
</script>

<style scoped>

</style>