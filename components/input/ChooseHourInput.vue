<template>
  <div class="relative flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="absolute top-[-8px] right-[10px] bg-white z-[1] text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[3px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#A9A7A7]']"
    >
      <input  @click="openChooseHourDrawer" type="text" class="text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]"
             disabled
             :value="value"
      >
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
            <div :class="[getAmOrPm(value) == 'am' ? 'bg-[#5CB3FF33]' : '']" @click="setAm" class="cursor-pointer border-b border-b-[#A9A7A7] text-[#141414] font-normal text-[18px] leading-[21px] flex flex-col justify-center items-center rounded-t-[10px] w-full h-1/2">
              صبح
            </div>
            <div :class="[getAmOrPm(value) == 'pm' ? 'bg-[#5CB3FF33]' : '']" @click="setPm" class="cursor-pointer border-t border-t-[#A9A7A7] text-[#141414] font-normal text-[18px] leading-[21px] flex flex-col justify-center items-center rounded-b-[10px] w-full h-1/2">
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
        <div class="flex flex-row justify-center items-center gap-[8px] grow">
          <div class="flex justify-center items-center w-[256px] h-[256px]">
            <svg :width="256" :height="256">
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
          </div>
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
    type: Number,
    default: () => 0
  }
})
const value = ref<number>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const showChooseHourDrawer = ref<Boolean>(false)

const selectedInput = ref<string>('hour')
const minute = ref<string>('00')
const hour = ref<string>('00')
const center = ref<number>(128)
const radius = ref<number>(108)
const selectedHour = ref<number|null>(12)

const selectInput = (input: string) => {
  selectedInput.value = input
}

const openChooseHourDrawer = () => {
  showChooseHourDrawer.value = true
}
const closeChooseHourDrawer = () => {
  showChooseHourDrawer.value = false
}
const getAmOrPm = (time) => {
  return time >= 12 ? 'pm' : 'am';
}

const setAm = () => {
  if (getAmOrPm(value.value) == 'pm') {
    value.value -= 12
  }
}
const setPm = () => {
  if (getAmOrPm(value.value) == 'am') {
    value.value += 12
  }
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
const handleClick = (n) => {
  selectedHour.value = n
}

const validateWorkHours = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateWorkHoursDebounce = useDebounce(validateWorkHours, 500)

</script>

<style scoped>

</style>