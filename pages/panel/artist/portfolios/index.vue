<template>
  <div class="mt-[20px] w-full flex flex-col items-start justify-start pb-[90px]">
    <div class="w-full relative flex flex-row items-center justify-center py-[23px] border-b border-b-[#A9A7A7]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">نمونه کار</div>
      <BackIcon @click="goBack" class="absolute left-[30px]"/>
    </div>
    <div class="w-full flex flex-col my-[8px] px-[15px]">
      <div class="w-full flex flex-row gap-[10px] justify-start items-center">
        <div @click="openFilterDrawer" class="cursor-pointer flex flex-row gap-[4px] justify-start items-center">
          <FilterIcon />
          <span>فیلتر</span>
          <ArrowDownIcon />
        </div>
      </div>
      <div class="mt-[8px] w-full flex flex-col justify-start items-start">
        <PortfolioItem
            v-for="(p, i) in portfolios"
            :key="i"
            :portfolio="p"
            :is-bookmarked="p.is_bookmarked"
            :is-panel="true"
        />
        <InfiniteLoading :firstload="true" v-if="showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
      </div>
    </div>
    <div class="fixed pt-[10px] left-0 right-0 bottom-0 pb-[40px] px-[30px] flex flex-col justify-start items-start bg-white z-[9999]">
      <nuxt-link @click.prevent="openNewPortfolioPage" class="cursor-pointer flex flex-row justify-start items-center">
        <PlusButtonIcon />
        <div class="px-[8px] py-[3px] rounded-full bg-[#E7FAF4] text-center mr-[4px] text-[#133C3E] font-medium text-[12px] leading-[18px]">نمونه کار جدید</div>
      </nuxt-link>
    </div>
    <FilterPortfolioDrawer @close="closeFilterDrawer" @choose="chooseService" :is-open="showFilterDrawer" />
    <Modal :show-close="false" :open="showModal">
      <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
        <div class="w-full relative rounded-[10px] h-[50px] flex flex-col justify-start items-center mt-[20px]">
          برای ثبت نمونه کار ابتدا اطلاعات پروفایل خود را تکمیل کنید.
        </div>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
          <span @click="closeModal">متوجه شدم</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import ArrowDownIcon from "~/components/icons/ArrowDownIcon.vue";
import FilterPortfolioDrawer from "~/components/drawer/FilterPortfolioDrawer.vue";
import FilterIcon from "~/components/icons/FilterIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import PlusButtonIcon from "~/components/icons/PlusButtonIcon.vue";
import InfiniteLoading from "v3-infinite-loading";
import AtSignIcon from "~/components/icons/AtSignIcon.vue";
import {useAuthStore} from "~/store/Auth";
import {useDrawerStore} from "~/store/Drawer";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})

const router = useRouter()
const auth = useAuthStore()
const store = useDrawerStore()
const portfolios = ref<IPortfolio[]>([])
const lastPage = ref<number>(1)
const page = ref<number>(1)
const showFilterDrawer = ref<Boolean>(false)
const showInfiniteScroll = ref<Boolean>(false)
const showModal = ref<Boolean>(false)
const selectedService = ref<IService|null>(null)

const goBack = () => {
  router.replace('/panel/artist')
}

const openNewPortfolioPage = () => {
  if (!auth.user?.is_artist_profile_completed) {
    openModal()
    return
  }
  router.push('/panel/artist/portfolios/create')
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  store.openArtistProfileDrawer()
}

const openFilterDrawer = () => {
  showFilterDrawer.value = true
}

const closeFilterDrawer = () => {
  showFilterDrawer.value = false
}

const chooseService = (s: IService) => {
  selectedService.value = s
  setTimeout(async () => {
    page.value = 1
    portfolios.value = []
    showInfiniteScroll.value = false
    await getPortfolios()
  }, 500)
}
const paginate = async () => {
  if (page <= lastPage) {
    page.value++
    await getPortfolios()
  }
}

const paginateDebounce = useDebounce(paginate, 500)

const getPortfolios = async () => {
  let url = `/own/portfolios?limit=10&page=${page.value}`
  if (selectedService.value) {
    url += `&services=${selectedService.value.id}`
  }
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(url)
      .then(res => {
        let list = (res.data as IPortfolio[])
        if (list.length == 0) {
          showInfiniteScroll.value = false
          return
        }
        portfolios.value = [
          ...portfolios.value,
          ...list
        ]
        lastPage.value = (res.last_page as number)
        setTimeout(() => {
          showInfiniteScroll.value = true
        }, 300)
      })
}
onMounted(() => {
  nextTick(() => getPortfolios())
})
</script>

<style scoped>

</style>