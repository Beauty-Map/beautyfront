<template>
  <div class="relative flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="absolute top-[-8px] right-[10px] bg-white z-[1] text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[3px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#A9A7A7]']"
         @click="openChooseHourDrawer"
    >
      <div class="flex items-center text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]">{{ showValue }}</div>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <Modal :show-close="false" :open="showChooseHourDrawer">
      <div class="w-full flex flex-col justify-start items-start max-w-[340px] min-w-[300px]">
        <div class="font-normal text-right text-[#141414] text-[16px] leading-[19px]">انتخاب ساعت</div>
        <div class="flex flex-row gap-[5px] mt-[20px] grow w-full">
          <div class="flex flex-col w-[52px] h-[80px] rounded-[10px] border border-[#A9A7A7] text-center">
            <div :class="[type == 'am' ? 'bg-[#5CB3FF33]' : '']" @click="setAm" class="cursor-pointer border-b border-b-[#A9A7A7] text-[#141414] font-normal text-[18px] leading-[21px] flex flex-col justify-center items-center rounded-t-[10px] w-full h-1/2">
              صبح
            </div>
            <div :class="[type == 'pm' ? 'bg-[#5CB3FF33]' : '']" @click="setPm" class="cursor-pointer border-t border-t-[#A9A7A7] text-[#141414] font-normal text-[18px] leading-[21px] flex flex-col justify-center items-center rounded-b-[10px] w-full h-1/2">
              عصر
            </div>
          </div>
          <div class="flex flex-row justify-center items-center gap-[8px] grow">
            <div @click="selectInput('minute')" class="flex justify-center items-center border border-[#A9A7A7] w-full h-full rounded-[10px]" :class="[selectedInput === 'minute' ? 'bg-[#5CB3FF33]' : '']">
              {{ minute }}
            </div>
            <div @click="selectInput('hour')" class="flex justify-center items-center border border-[#A9A7A7] w-full h-full rounded-[10px]" :class="[selectedInput === 'hour' ? 'bg-[#5CB3FF33]' : '']">
              {{ hour }}
            </div>
          </div>
        </div>
        <div class="w-full flex flex-row justify-center items-center gap-[8px] grow">
          <div class="flex justify-center items-center w-[256px] h-[256px]">
            <svg :width="256" :height="256" v-if="selectedInput == 'hour'">
              <!-- رسم دایره -->
              <circle :cx="center" :cy="center" :r="radius + 5" stroke="#A9A7A7" stroke-width="2" fill="none"/>
              <circle :cx="center" :cy="center" :r="2" stroke="#5CB3FF" stroke-width="2" fill="#5CB3FF"/>

              <!-- رسم اعداد ساعت به فارسی -->
              <foreignObject
                  @click="handleClick(n)"
                  v-for="n in 12"
                  :key="n"
                  :x="getNumberPosition(n).x - 24" :y="getNumberPosition(n).y - 24"
                  height="48px"
                  width="48px"
                  text-anchor="middle"
                  dominant-baseline="middle"
              >
                <div
                    class="h-full w-full flex justify-center items-center rounded-full"
                    :class="[selectedHour == n ? 'bg-[#5CB3FF]' : '']"
                >{{ n }}</div>
              </foreignObject>

              <!-- رسم خط از مرکز به عدد انتخاب شده -->
              <line v-if="selectedHour !== null" :x1="center" :y1="center" :x2="getLinePosition(selectedHour).x" :y2="getLinePosition(selectedHour).y" stroke="#5CB3FF" stroke-width="2"/>
            </svg>
            <svg :width="256" :height="256" v-if="selectedInput == 'minute'">
              <!-- رسم دایره -->
              <circle :cx="center" :cy="center" :r="radius + 5" stroke="#A9A7A7" stroke-width="2" fill="none"/>
              <circle :cx="center" :cy="center" :r="2" stroke="#5CB3FF" stroke-width="2" fill="#5CB3FF"/>

              <!-- رسم اعداد ساعت به فارسی -->
              <foreignObject
                  @click="handleMinuteClick(n)"
                  v-for="n in minutes"
                  :key="n"
                  :x="getNumberMinutePosition(n).x - 24" :y="getNumberMinutePosition(n).y - 24"
                  height="48px"
                  width="48px"
                  text-anchor="middle"
                  dominant-baseline="middle"
              >
                <div
                    class="h-full w-full flex justify-center items-center rounded-full"
                    :class="[selectedMinute == n ? 'bg-[#5CB3FF]' : '']"
                >{{ n }}</div>
              </foreignObject>

              <!-- رسم خط از مرکز به عدد انتخاب شده -->
              <line v-if="selectedMinute !== null" :x1="center" :y1="center" :x2="getLineMinutePosition(selectedMinute).x" :y2="getLineMinutePosition(selectedMinute).y" stroke="#5CB3FF" stroke-width="2"/>
            </svg>
          </div>
        </div>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[16px] leading-[19px] font-normal text-[#141414]">
          <span @click="doSave">ذخیره</span>
          <span @click="closeModal">بستن</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: () => ''
  }
})
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const showChooseHourDrawer = ref<Boolean>(false)

const selectedInput = ref<string>('hour')
const minute = ref<string>('00')
const hour = ref<string>('12')
const type = ref<string>('am')
const center = ref<number>(128)
const radius = ref<number>(108)
const selectedHour = ref<number|null>(12)
const selectedMinute = ref<number|null>(0)
const minutes = ref<number[]>([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55])

const selectInput = (input: string) => {
  selectedInput.value = input
}

const openChooseHourDrawer = () => {
  showChooseHourDrawer.value = true
}
const closeChooseHourDrawer = () => {
  showChooseHourDrawer.value = false
}
const closeModal = () => {
  reset()
  closeChooseHourDrawer()
}
const setAm = () => {
  type.value = 'am'
}
const setPm = () => {
  type.value = 'pm'
}

const getNumberPosition = (n) => {
  const angle = (n - 3) * (360 / 12) * (Math.PI / 180);
  const x = center.value + (radius.value - 20) * Math.cos(angle);
  const y = center.value + (radius.value - 20) * Math.sin(angle);
  return { x, y };
}

const getLinePosition = (n) => {
  const angle = (n - 3) * (360 / 12) * (Math.PI / 180);
  const x = center.value + (radius.value - 44) * Math.cos(angle);
  const y = center.value + (radius.value - 44) * Math.sin(angle);
  return { x, y };
}

const getNumberMinutePosition = (n) => {
  const angle = (n - 15) * (360 / 60) * (Math.PI / 180);
  const x = center.value + (radius.value - 20) * Math.cos(angle);
  const y = center.value + (radius.value - 20) * Math.sin(angle);
  return { x, y };
}

const getLineMinutePosition = (n) => {
  const angle = (n - 15) * (360 / 60) * (Math.PI / 180);
  const x = center.value + (radius.value - 44) * Math.cos(angle);
  const y = center.value + (radius.value - 44) * Math.sin(angle);
  return { x, y };
}
const handleClick = (n) => {
  selectedHour.value = n

  if (n < 10) {
    hour.value = `0${n}`
  } else {
    hour.value = n
  }
}
const handleMinuteClick = (n) => {
  selectedMinute.value = n
  if (n < 10) {
    minute.value = `0${n}`
  } else {
    minute.value = n
  }
}

const showValue = computed(() => {
  return hour.value + ':' + minute.value + ' ' + type.value
})

const doSave = () => {
  let h = type.value == 'pm' && parseInt(hour.value) < 12 ? (parseInt(hour.value) + 12).toString() : parseInt(hour.value).toString()
  h = parseInt(h) > 10 ? h : `0${h}`
  let m = parseInt(minute.value) > 10 ? minute.value : `0${parseInt(minute.value)}`
  let time = `${h}:${m}`
  emits('update:modelValue', time)
  closeModal()
}

watch(() => props.modelValue, () => reset())
const reset = () => {
  hour.value = props.modelValue.split(':')[0]
  type.value = hour.value && parseInt(hour.value) >= 12 ? 'pm' : 'am'
  hour.value = parseInt(hour.value) >= 12 ? (parseInt(hour.value) - 12).toString() : hour.value
  selectedHour.value = parseInt(hour.value)
  minute.value = props.modelValue.split(':')[1]
  selectedMinute.value = parseInt(minute.value)
}
</script>

<style scoped>

</style>