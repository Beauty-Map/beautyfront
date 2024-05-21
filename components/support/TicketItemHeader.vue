<template>
  <div class="px-[14px] py-[14px] font-medium text-[#141414] rounded-t-[20px] bg-[#F7F5C4] flex flex-row justify-between items-start w-full">
    <div class="flex flex-row justify-start items-center text-[12px] leading-[18px]">
      <TicketIDIcon />
      <span>شناسه:</span>
      <span>{{ id }}</span>
    </div>
    <div class="flex flex-row justify-env items-center text-[12px] leading-[16px]">
      <div class="flex flex-row justify-start items-center">
        <TicketDateIcon />
        <span>{{ getDate() }}</span>
      </div>
      <div class="flex flex-row justify-start items-center">
        <TicketTimeIcon />
        <span>{{ getTime() }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TicketIDIcon from "~/components/icons/TicketIDIcon.vue";
import TicketDateIcon from "~/components/icons/TicketDateIcon.vue";
import { useDayjs } from '#dayjs' // not need if you are using auto import
const dayjs = useDayjs()
import 'dayjs/locale/fa'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import jalaliday from 'jalaliday'
import TicketTimeIcon from "~/components/icons/TicketTimeIcon.vue";
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
})

const getDate = () => {
  return dayjs(props.createdAt).calendar('jalali').locale('fa').format('YYYY-MM-DD')
}
const getTime = () => {
  return dayjs(props.createdAt).calendar('jalali').locale('fa').format('HH:mm:ss')
}

</script>

<style scoped>

</style>