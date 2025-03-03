<template>
  <div @click="goToPage" class="w-full flex flex-row gap-[20px] rounded-[8px] px-[10px] py-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-[25px]">
    <div class="w-full flex flex-col relative pb-[40px]">
      <div class="w-full flex flex-row justify-start items-center">
        <BlueTick v-if="artist.has_blue_tick"/>
        <h1 class="text-right font-medium text-[14px] leading-[18px] text-[#141414]">{{ artist.full_name }}</h1>
      </div>
<!--      <div class="font-medium text-[#141414] text-[9px] mt-2 leading-[11px] text-right">-->
<!--        تاریخ عضویت: {{ getCreatedAtAgoFa }}-->
<!--      </div>-->
      <div class="flex flex-row gap-[8px] items-center justify-start mt-[10px]">
        <div class="font-medium text-[#141414] text-[10px] leading-[15px] text-center bg-[#FFEA2E61] border border-[#1EFF81] px-[6px] py-[2px] rounded-[12px]">
          <span class="whitespace-nowrap">نمونه کار</span>
          <span class="mr-1">({{ artist.portfolios_count }})</span>
        </div>
        <div class="font-medium text-[#141414] text-[10px] leading-[15px] text-center bg-[#FFEA2E61] border border-[#1EFF81] px-[6px] py-[2px] rounded-[12px]">
          <span class="whitespace-nowrap">تخصص</span>
          <span class="mr-1">({{ artist.services_count }})</span>
        </div>
      </div>
      <div class="flex flex-col items-start justify-start gap-[8px] mt-[10px] overflow-hidden">
        <div class="text-right text-[9px] text-[#141414] leading-[13px] font-medium">
          <div class="text-ellipsis break-words">{{ artist.address ? artist.address : 'محل کار ثبت نشده است' }}</div>
        </div>
<!--        <div class="flex flex-row">-->
<!--          <ArtistLocationIcon />-->
<!--          <span class="text-right text-[9px] text-[#ED2C25] leading-[13px] font-medium">-->
<!--            <span>({{ artist.distance }})</span>-->
<!--          </span>-->
<!--        </div>-->
      </div>
      <div class="flex flex-row items-center justify-end pl-[10px] mt-[10px]">
        <Rating v-model="artist.rating"/>
      </div>
      <div class="flex flex-row items-center justify-start absolute right-0 bottom-0 z-[9999]">
        <Bookmark @bookmark="toggleBookmark" :bookmarked="artist.is_bookmarked" />
        <nuxt-link to="/" class="bg-[#085EC2] mr-[20px] rounded-[10px] px-[10px] py-[4px] text-white text-[8px] leading-[12px] cursor-pointer font-medium text-center">بیوگرافی کامل هنرمند</nuxt-link>
      </div>
    </div>
      <img :src="getThumbnail" :alt="artist.full_name" class="object-cover h-[125px] w-[125px] min-w-[125px] rounded-[8px] border border-[#5CB3FF] shadow-[2px_3px_6.5px_0px_#00000040]"/>
  </div>
</template>

<script setup lang="ts">
import Bookmark from "~/components/bookmark/Bookmark.vue";
import BlueTick from "~/components/icons/BlueTick.vue";
import ArtistLocationIcon from "~/components/icons/ArtistLocationIcon.vue";
import 'dayjs/locale/fa'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import jalaliday from 'jalaliday'
import {useAuthStore} from "~/store/Auth";
import {useDrawerStore} from "~/store/Drawer";
import {useSearchStore} from "~/store/Search";
const emits = defineEmits(['click', 'toggleBookmark'])
const props = defineProps({
  artist: {
    type: Object,
    required: true,
  }
})

const app = useNuxtApp()
const auth = useAuthStore()
const drawerStore = useDrawerStore()
const router = useRouter()
const dayjs = useDayjs()
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)
const getThumbnail = computed(() => {
  return props.artist.avatar ? props.artist.avatar : '/images/artist/2.png'
})

const goToPage = () => {
  useSearchStore().resetArtists()
  router.push(`/artists/${props.artist.id}`)
}

const toggleBookmark = (bookmarked: boolean) => {
  if (!auth.user) {
    drawerStore.openLoginDrawer()
    return
  }
  const {$postRequest:postRequest} = app
  postRequest(`/artists/${props.artist.id}/like`, {})
      .then(res => {
        props.artist.is_bookmarked = !props.artist.is_bookmarked
        emits('toggleBookmark', props.artist)
      })
}

const getCreatedAtAgoFa = computed(() => {
  if (props.artist.created_at == '')
    return '-'
  return dayjs(props.artist.created_at).locale('fa').fromNow()
})

</script>

<style scoped>

</style>