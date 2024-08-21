<template>
  <div class="w-full flex flex-col justify-start items-start">
    <Rating v-model="user.rating"/>
    <div class="w-full flex flex-row items-start justify-start mt-2 border-b border-b-[#A9A7A7] pb-[8px]">
      <img :src="getAvatar" alt="" class=" grow-0 h-[50px] w-[50px] border-[#FFD700] rounded-[50%] border-[2px]">
      <div class="flex flex-col grow justify-between items-start mr-2">
        <div class="flex flex-row gap-0.5 justify-start items-center">
          <BlueTick v-if="user.has_blue_tick" class="h-[20px] w-[20px]"/>
          <h1 class="font-semibold text-[18px] leading-[28px] text-right text-[#141414]">{{ user.full_name }}</h1>
        </div>
        <div v-if="user.services.length > 0"  class="text-[#133C3E] font-medium text-[12px] leading-[18px] w-full">
          <span>تخصص ها:</span>
          <span class="mr-1">{{getServices()}}</span>
        </div>
      </div>
    </div>
    <ArtistSocialMediaBox />
    <ArtistAddressBox :address="user.address" :distance="user.distance" :work-hours="user.work_hours" :created-at-ago-fa="user.created_at_ago_fa"/>
  </div>
</template>

<script setup lang="ts">
import BlueTick from "~/components/icons/BlueTick.vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const getServices = () => {
  let services = []
  for (let i = 0; i < props.user.services.length; i++) {
    let s = props.user.services[i]
    services.push(s.title)
  }
  return services.reverse().join(' , ')
}

const getAvatar = computed(() => {
  if (props.user && props.user.avatar) {
    return props.user.avatar
  }
  return '/images/artist/2.png'
})
</script>

<style scoped>

</style>