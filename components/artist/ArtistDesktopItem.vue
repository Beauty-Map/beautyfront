<template>
  <div @click="goToPage" class="min-h-[531px] mx-[10px] min-w-[384px] w-full flex rounded-[8px] px-[10px] py-[10px] mb-[25px]">
    <div class="flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[8px] w-full h-full">
      <img :src="getThumbnail" :alt="artist.full_name" class="w-full h-[275px] rounded-t-[8px]"/>
      <div class="w-full h-full px-[15px] py-[10px] flex flex-col justify-start items-start">
        <div class="w-full flex flex-row justify-between items-center">
          <h1 class="w-full text-[#141414] text-right font-semibold text-[24px] leading-[32px]">{{ artist.full_name }}</h1>
          <Bookmark @bookmark="toggleBookmark" :bookmarked="artist.is_bookmarked" />
        </div>
        <div class="w-full mb-[10px] flex flex-row justify-start items-center">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.41667 22.75C4.82083 22.75 4.31076 22.5378 3.88646 22.1135C3.46215 21.6892 3.25 21.1792 3.25 20.5833V5.41667C3.25 4.82083 3.46215 4.31076 3.88646 3.88646C4.31076 3.46215 4.82083 3.25 5.41667 3.25H20.5833C21.1792 3.25 21.6892 3.46215 22.1135 3.88646C22.5378 4.31076 22.75 4.82083 22.75 5.41667V20.5833C22.75 21.1792 22.5378 21.6892 22.1135 22.1135C21.6892 22.5378 21.1792 22.75 20.5833 22.75H5.41667ZM5.41667 19.5833C5.41667 20.1356 5.86438 20.5833 6.41667 20.5833H19.5833C20.1356 20.5833 20.5833 20.1356 20.5833 19.5833V6.41667C20.5833 5.86438 20.1356 5.41667 19.5833 5.41667H6.41667C5.86438 5.41667 5.41667 5.86438 5.41667 6.41667V19.5833ZM7.7 16.8167C7.20557 17.4759 7.67595 18.4167 8.5 18.4167H17.5C18.324 18.4167 18.7944 17.4759 18.3 16.8167L16.2375 14.0667C15.8375 13.5333 15.0375 13.5333 14.6375 14.0667L12.9875 16.2667C12.5875 16.8 11.7875 16.8 11.3875 16.2667L10.55 15.15C10.15 14.6167 9.35 14.6167 8.95 15.15L7.7 16.8167Z" fill="#1EFF81"/>
          </svg>
          <span class="mr-2">{{ artist.portfolios_count }}</span>
          <span class="whitespace-nowrap mr-2">نمونه کار</span>
        </div>
        <div class="w-full mb-[10px] flex flex-row justify-start items-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58329 20.1667L0.916626 10.0834L5.49996 7.33337V1.83337H9.16663V7.33337L13.75 10.0834L10.0833 20.1667H4.58329ZM15.5833 20.1667C15.3236 20.1667 15.1059 20.0789 14.9302 19.9032C14.7545 19.7275 14.6666 19.5098 14.6666 19.25C14.6666 18.9903 14.7545 18.7726 14.9302 18.5969C15.1059 18.4212 15.3236 18.3334 15.5833 18.3334H18.3333V16.5H15.5833C15.3236 16.5 15.1059 16.4122 14.9302 16.2365C14.7545 16.0608 14.6666 15.8431 14.6666 15.5834C14.6666 15.3237 14.7545 15.1059 14.9302 14.9302C15.1059 14.7546 15.3236 14.6667 15.5833 14.6667H18.3333V12.8334H15.5833C15.3236 12.8334 15.1059 12.7455 14.9302 12.5698C14.7545 12.3941 14.6666 12.1764 14.6666 11.9167C14.6666 11.657 14.7545 11.4393 14.9302 11.2636C15.1059 11.0879 15.3236 11 15.5833 11H18.3333V9.16671H15.5833C15.3236 9.16671 15.1059 9.07886 14.9302 8.90317C14.7545 8.72747 14.6666 8.50976 14.6666 8.25004C14.6666 7.99032 14.7545 7.77261 14.9302 7.59692C15.1059 7.42122 15.3236 7.33337 15.5833 7.33337H18.3333V5.50004H15.5833C15.3236 5.50004 15.1059 5.41219 14.9302 5.2365C14.7545 5.0608 14.6666 4.8431 14.6666 4.58337C14.6666 4.32365 14.7545 4.10594 14.9302 3.93025C15.1059 3.75455 15.3236 3.66671 15.5833 3.66671H19.25C19.7541 3.66671 20.1857 3.84622 20.5448 4.20525C20.9038 4.56428 21.0833 4.99587 21.0833 5.50004V18.3334C21.0833 18.8375 20.9038 19.2691 20.5448 19.6282C20.1857 19.9872 19.7541 20.1667 19.25 20.1667H15.5833ZM5.86663 18.3334H8.79996L11.5041 10.8625L8.66246 9.16671H6.00413L3.16246 10.8625L5.86663 18.3334Z" fill="#1EFF81"/>
          </svg>
          <div class="flex flex-row justify-start items-start flex-grow whitespace-nowrap mr-2">
            <span class="whitespace-nowrap text-ellipsis w-full">
              {{ getServicesName }}
            </span>
          </div>
        </div>
        <div class="w-full mb-[10px] flex flex-row justify-start items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="#1EFF81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z" stroke="#1EFF81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mr-2">{{ artist.address }}</span>
        </div>
        <MainActionButton class="mt-[24px] rounded-[8px]" @click="goToPage">
          <div class="text-white text-center text-[20px] leading-[30px]">پروفایل</div>
        </MainActionButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bookmark from "~/components/bookmark/Bookmark.vue";
import BlueTick from "~/components/icons/BlueTick.vue";
import ArtistLocationIcon from "~/components/icons/ArtistLocationIcon.vue";
import 'dayjs/locale/fa'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import jalaliday from 'jalaliday'
import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
const props = defineProps({
  artist: {
    type: Object,
    required: true,
  }
})

const router = useRouter()
const dayjs = useDayjs()
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)
const getThumbnail = computed(() => {
  return props.artist.avatar ? props.artist.avatar : '/images/artist/2.png'
})

const goToPage = () => {
  router.push(`/artists/${props.artist.id}`)
}

const toggleBookmark = (bookmarked: boolean) => {
  props.artist.is_bookmarked = bookmarked
}

const getServicesName = computed(() => {
  if (props.artist.services.length == 0)
    return 'تخصصی انتخاب نشده'
  return props.artist.services.map(i=>i.title).join(' , ')
})

</script>

<style scoped>

</style>