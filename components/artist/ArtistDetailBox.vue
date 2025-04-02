<template>
  <div class="w-full flex flex-col justify-start items-start">
    <Rating v-model="rate"/>
    <div class="w-full flex flex-row items-start justify-start mt-2 border-b border-b-[#A9A7A7] pb-[8px]">
      <img :src="getAvatar" alt="" class=" grow-0 h-[50px] w-[50px] border-[#FFD700] rounded-[50%] border-[2px]">
      <div class="flex flex-col grow justify-between items-start mr-2">
        <div class="flex flex-row gap-0.5 justify-start items-center">
          <BlueTick v-if="user.has_blue_tick" class="h-[20px] w-[20px]"/>
          <h1 class="font-semibold text-[18px] leading-[28px] text-right text-[#141414]">{{ user.full_name }}</h1>
        </div>
        <div class="text-[#133C3E] font-medium text-[12px] leading-[18px] w-full">
          <span>عضویت:</span>
          <span class="mr-1">{{getCreatedAtAgoFa}}</span>
        </div>
      </div>
    </div>
    <ArtistSocialMediaBox :socials="user.socials"/>
    <ArtistAddressBox :address="user.address" :distance="user.distance" :work-hours="user.work_hours" :created-at-ago-fa="user.created_at_ago_fa"/>
  </div>
</template>

<script setup lang="ts">
import BlueTick from "~/components/icons/BlueTick.vue";
import localizedFormat from "dayjs/plugin/localizedFormat";
import jalaliday from "jalaliday";
const dayjs = useDayjs()
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const getAvatar = computed(() => {
  if (props.user && props.user.avatar) {
    return props.user.avatar
  }
  return '/images/artist/2.png'
})

const getCreatedAtAgoFa = computed(() => {
  if (props.user.created_at == '')
    return '-'
  return dayjs(props.user.created_at).locale('fa').fromNow()
})
const rate = computed(() => {
  if (props.user.plan) {
    return props.user.plan.plan.star_count
  }
  return 3
})
</script>

<style scoped>

</style>