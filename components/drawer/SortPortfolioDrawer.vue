<template>
<div
    class="flex flex-col fixed px-[30px] py-[30px] top-0 bottom-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999]"
    :class="[isOpen ? 'fixed left-0' : 'fixed left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center">
    <div class="w-full relative flex flex-row items-center justify-center py-[23px]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">مرتب سازی</div>
      <BackIcon @click="goBack" class="absolute left-0"/>
    </div>
    <div class="w-full flex flex-row items-center justify-between text-right font-medium text-[#141414] text-[18px] leading-[27px]">
      <span>مرتب سازی</span>
      <ArrowUpIcon />
    </div>
    <div class="w-full flex flex-col gap-[10px] mt-4 items-start justify-start text-right font-medium text-[#141414] text-[14px] leading-[21px]">
      <div
          @click="selectSort(s)"
          v-for="(s, i) in sortArray"
          :key="i"
          class="w-full flex flex-row items-center justify-between"
      >
        <span>{{ s.title }}</span>
        <DoneCheckIcon v-if="selectedSort.id === s.id"/>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import ArrowUpIcon from "~/components/icons/ArrowUpIcon.vue";
import DoneCheckIcon from "~/components/icons/DoneCheckIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const route = useRoute()

const close = () => {
  emits('close')
}

const sortArray = ref<ISort[]>([
  {
    id: 1,
    title: 'پر بازدیدترین'
  },
  {
    id: 2,
    title: 'جدیدترین'
  },
  {
    id: 3,
    title: 'ارزان ترین'
  },
  {
    id: 4,
    title: 'گرانترین'
  },
  {
    id: 5,
    title: 'بیشترین تخفیف'
  },
])
const selectedSort = ref<ISort|null>({
  id: 1,
  title: 'پر بازدیدترین'
})

const initSelectedSort = () => {
  const orderBy = route.query.order_by
  const sortBy = route.query.sort_by
  if (!orderBy || orderBy == 'view') {
    selectedSort.value = sortArray.value[0]
  } else if (orderBy == 'created_at') {
    selectedSort.value = sortArray.value[1]
  } else if (orderBy == 'price') {
    if (sortBy == 'asc') {
      selectedSort.value = sortArray.value[2]
    } else if (sortBy == 'desc') {
      selectedSort.value = sortArray.value[3]
    } else if (sortBy == 'discount') {
      selectedSort.value = sortArray.value[4]
    }
  }
}
const selectSort = (s: ISort) => {
  selectedSort.value = s
  emits('choose', s)
  emits('close')
}

const goBack = () => {
  close()
}

watch(() => route.query, initSelectedSort)

initSelectedSort()
</script>

<style scoped>

</style>