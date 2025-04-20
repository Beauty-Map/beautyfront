<template>
  <div
      class="flex flex-col fixed  top-0 bottom-0 w-full duration-700 ease-in-out bg-white z-[999999999]"
      :class="[isOpen ? 'left-0' : 'left-[-100%]']"
  >
    <div class="relative h-screen flex flex-col justify-start items-center w-full">
      <div class="border-b border-b-[#A9A7A7] relative w-full flex flex-row items-center justify-center py-[23px]">
        <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">نردبان</div>
        <BackIcon @click="goBack" class="absolute left-[10px]"/>
      </div>
      <div class="overflow-y-scroll relative px-[30px] pt-[30px] pb-[60px] h-full w-full flex flex-col gap-[10px] items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]">
        <PortfolioLadderingItem
            v-for="(p, i) in portfolios"
            :key="i"
            :portfolio="p"
            @click="selectItem(p.id)"
            :selected="isItemSelected(p.id)"
        />
        <InfiniteLoading :firstload="true" v-if="showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
      </div>
      <div class="absolute z-[9999999999] bottom-0 pb-[30px] right-0 left-0 bg-white px-[20px]">
        <button
            @click="doAccept"
            class="cursor-pointer w-full font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white z-[999999] bg-[#FF3CA0] mt-[10px] rounded-full h-[44px] ">
          تایید
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import InfiniteLoading from "v3-infinite-loading";
import PortfolioLadderingItem from "~/components/portfolio/PortfolioLadderingItem.vue";
import {useAuthStore} from "~/store/Auth";

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'فیلتر'
  },
})

const auth = useAuthStore()
const user = ref(auth.user)

const portfolios = ref<IPortfolio[]>([])
const selectedItems = ref<IPortfolio[]>([])
const showInfiniteScroll = ref<Boolean>(false)
const lastPage = ref<number>(1)
const page = ref<number>(1)

const paginate = async () => {
  if (page <= lastPage) {
    page.value++
    await getPortfolios()
  }
}

const paginateDebounce = useDebounce(paginate, 500)

const getPortfolios = async () => {
  const res = await useCustomFetch(`/own/portfolios/laddering?limit=10&page=${page.value}`, {
    method: "GET"
  })
  if (res.data.value) {
    let list = (res.data.value.data as IPortfolio[])
    if (list.length == 0) {
      showInfiniteScroll.value = false
      return
    }
    portfolios.value = [
      ...portfolios.value,
      ...list
    ]
    lastPage.value = (res.data.value.last_page as number)
    setTimeout(() => {
      showInfiniteScroll.value = true
    }, 300)
  }
}

const selectItem = (id: number) => {
  let index = findIndex(id)
  if (index > -1) {
    selectedItems.value.splice(index, 1)
  } else {
    selectedItems.value.push(id)
  }
}

const isItemSelected = (id) => {
  return findIndex(id) > -1
}

const findIndex = (id) => {
  return selectedItems.value.indexOf(id)
}

const goBack = () => {
  close()
}
const close = () => {
  portfolios.value = []
  emits('close')
}

const doAccept = () => {
  emits('choose', selectedItems.value)
  setTimeout(() => {
    emits('close')
  }, 200)
}

watch(() => props.isOpen, () => {
  if (props.isOpen) {
    getPortfolios()
  }
})
</script>

<style scoped>

</style>