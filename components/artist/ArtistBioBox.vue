<template>
  <div class="w-full flex flex-col items-center justify-between px-[27px] my-[8px]">
    <div class="w-full flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]">
      <h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">درباره من</h1>
      <div class="mt-[10px] font-normal text-right text-[#133C3E] text-[14px] leading-[21px]" v-html="bio"></div>
    </div>
    <div v-if="servicesCount" class="w-full flex flex-col mt-4 items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]">
      <h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">تخصص ها</h1>
      <span class="mt-[10px] font-normal text-right text-[#133C3E] text-[14px] leading-[21px]" v-for="(s, i) in services" :key="i">{{s.parent?.title ?? ''}} ({{ s.title }})</span>
    </div>
    <div class="mt-4 w-full flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]">
      <h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">مدارک و مجوزها</h1>
      <div v-for="(d,i) in licensesList" :key="i"
           class="mt-[10px] font-normal text-right text-[#133C3E] text-[16px] leading-[22px] cursor-pointer flex flex-row justify-start items-center w-full">
        <img :alt="d.title" v-if="d.image" :src="d.image" class="w-10 h-10 rounded ml-2 object-cover" />
        <span>{{ d.title }}</span>
      </div>
    </div>
    <div class="mt-4 w-full flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]">
      <h1 class="font-semibold text-[#141414] text-right text-[16px] leading-[23px]">امکانات</h1>
      <div v-for="(d,i) in features" :key="i"
           class="mt-[10px] font-normal text-right text-[#133C3E] text-[16px] leading-[22px] cursor-pointer flex flex-row justify-start items-center w-full">
        <span>{{ d.title }}</span>
      </div>
    </div>
    <div class="w-full mt-4 mx-4 flex flex-col items-start justify-start pb-[18px] border-b border-b-[#A9A7A7]">
      <h1 class="w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]">برنامه هفتگی</h1>
      <div class="w-full mt-[10px] font-normal text-right text-[#133C3E] text-[16px] leading-[22px]">
        <div v-for="(w,i) in workHours" :key="i" class="flex flex-row justify-between items-center mb-[5px]">
          <span>{{ days[w.day_index - 1] }}</span>
          <span>{{ getDayName(w) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bio: {
    type: String,
    default: ''
  },
  workHours: {
    type: Array,
    default: () => [],
    required: true
  },
  licenses: {
    type: Array,
    default: () => [],
    required: true
  },
  services: {
    type: Array,
    default: () => [],
    required: true
  },
  features: {
    type: Array,
    default: () => [],
    required: true
  },
  servicesCount: {
    type: Number,
    default: 0,
    required: true
  },
})

const days = ref([
  'شنبه',
  'یک شنبه',
  'دو شنبه',
  'سه شنبه',
  'چهار شنبه',
  'پنج شنبه',
  'جمعه',
])

const getDayName = (workHour: IWorkHour) => {
  let start = workHour.start_hour
  let end = workHour.end_hour
  let name = ''
  name += toAMorPM(start)
  name += ' - '
  name += toAMorPM(end)
  return name
}

const toAMorPM = (hour: string) => {
  let name = ''
  let hourInt = parseInt(hour.substring(0, 2))
  if (hourInt <= 12) {
    name += `${hour} صبح`
  } else if (hourInt <= 19) {
    name += `${hour} بعد از ظهر`
  } else {
    name += `${hour} شب`
  }
  return name
}

const normalizeLicenses = (licenses: any): { title: string, image?: string }[] => {
  if (!Array.isArray(licenses)) return []
  return licenses.map((item) => {
    if (typeof item === 'string') {
      return { title: item, image: '' }
    }
    return item
  })
}
const licensesList = computed(()=> {
  return normalizeLicenses(props.licenses)
})
</script>

<style scoped>

</style>