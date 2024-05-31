<template>
  <div class="relative w-full h-[200px]">
    <img :src="getBanner" alt="" class="w-full h-full"/>
    <div class="absolute top-[20px] left-[20px] right-[20px] flex flex-row justify-between items-center">
      <div class="">
        <EditPenIcon class="cursor-pointer" @click="openArtistProfileDrawer"/>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div @click="goToWalletPage" class="cursor-pointer px-[8px] h-[37px] ml-[17px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
          <AddMoneyIcon />
          <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
          <DollarIcon />
        </div>
        <BackTransparentIcon class="cursor-pointer" @click="goBack"/>
      </div>
    </div>
    <div class="absolute bottom-[12px] left-[35px] right-[35px] px-[9px] py-[9px]
     flex flex-row justify-between items-center
     bg-white rounded-[17px] border border-[#A9A7A7]">
      <div class="w-full flex flex-row justify-between  flex-wrap items-center">
        <div class="flex flex-row justify-start items-center">
          <img :alt="full_name" :src="getAvatar"
               class="w-[55px] h-[55px] rounded-[100%] border border-[#B2550F]">
          <div class="py-[5px] flex flex-col items-start justify-start mr-[6px] h-[55px]">
            <div class="w-full flex flex-row gap-[2px] text-[#133C3E] font-medium text-[14px] leading-[21px]">
              <span class="whitespace-nowrap text-ellipsis overflow-hidden max-w-[80px]">{{ full_name }}</span>
              <Rating :star-count="5" v-model="rates"/>
            </div>
            <div class="mt-[5px] text-[#133C3E] font-light text-[14px] leading-[21px]">
              {{ planTitle }}
            </div>
          </div>
        </div>
        <NotificationIcon @click="openNotificationDrawer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackTransparentIcon from "~/components/icons/BackTransparentIcon.vue";
import EditPenIcon from "~/components/icons/EditPenIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import DollarIcon from "~/components/icons/DollarIcon.vue";
import NotificationIcon from "~/components/icons/NotificationIcon.vue";
import {useDrawerStore} from "~/store/Drawer";

const props = defineProps({
  full_name: {
    type: String,
    default: ''
  },
  planTitle: {
    type: String,
    default: 'عادی'
  },
  banner: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  rate: {
    type: Number,
    default: 0
  },
})
const user = useSanctumUser()

const getBanner = computed(() => props.banner ? props.banner : '/panel/header.png')
const getAvatar = computed(() => props.avatar ? props.avatar : '/panel/header.png')

const router = useRouter()

const rates = ref(props.rate)

const goBack = () => {
  router.replace('/')
}

const store = useDrawerStore()

const openArtistProfileDrawer = () => {
  store.openArtistProfileDrawer()
}

const openNotificationDrawer = () => {

}

const goToWalletPage = () => {
  router.push('/panel/artist/wallet')
}
</script>

<style scoped>

</style>