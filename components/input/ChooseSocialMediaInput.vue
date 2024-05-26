<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="w-full flex flex-row justify-end rounded-[8px] relative  "
    >
      <RubikaInputIcon class="cursor-pointer" @click="openModal('rubika')"/>
      <EitaaInputIcon class="cursor-pointer" @click="openModal('eita')"/>
      <WhatsappInputIcon class="cursor-pointer" @click="openModal('whatsapp')"/>
      <WebInputIcon class="cursor-pointer" @click="openModal('web')"/>
      <BaleInputIcon class="cursor-pointer" @click="openModal('bale')"/>
      <TelegramInputIcon class="cursor-pointer" @click="openModal('telegram')"/>
      <InstagramInputIcon class="cursor-pointer" @click="openModal('instagram')"/>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>

    <Modal :show-close="false" :open="showModal">
      <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
        <div class="font-medium text-center text-[#133C3E] text-[22px] leading-[32px]">
          {{ getHeaderText }}
        </div>
        <div class="w-full relative border border-[#A9A7A7] rounded-[10px] h-[50px] flex flex-col justify-start items-center mt-[20px]">
          <input
              :type="getType"
              dir="ltr"
              class="h-[50px] w-full pr-[10px] rounded-[10px] text-left outline-none border-none focus:outline-none focus:border-none"
              :class="[showAtSign ? ' pl-[30px] ' : showWWW ? 'pl-[50px]' : ' pl-[10px] ']"
              @input="validateTextDebounce"
              ref="inputs"
          >
          <span v-if="showWWW"  class="absolute left-[8px] top-[30%]">www</span>
          <AtSignIcon v-if="showAtSign" class="absolute left-[8px] top-[35%]"/>
        </div>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
          <span @click="saveModal">ذخیره</span>
          <span @click="closeModal">بستن</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import BaleInputIcon from "~/components/icons/BaleInputIcon.vue";
import WebInputIcon from "~/components/icons/WebInputIcon.vue";
import InstagramInputIcon from "~/components/icons/InstagramInputIcon.vue";
import TelegramInputIcon from "~/components/icons/TelegramInputIcon.vue";
import WhatsappInputIcon from "~/components/icons/WhatsappInputIcon.vue";
import EitaaInputIcon from "~/components/icons/EitaaInputIcon.vue";
import RubikaInputIcon from "~/components/icons/RubikaInputIcon.vue";
import AtSignIcon from "~/components/icons/AtSignIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'درباره خود,سابقه کاری و...'
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const value = ref<ISocialMedia>(props.modelValue as ISocialMedia)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const showModal = ref<Boolean>(true)
const type = ref<string>('rubika')
const inputs = ref()

const openModal = (t: string = 'rubika') => {
  type.value = t
  showModal.value = true
}

const closeModal = () => {
  type.value = 'rubika'
  showModal.value = false
  value.value[type.value] = props.modelValue[type.value]
}

const saveModal = () => {
  emits('update:modelValue', value.value)
  closeModal()
}

const getHeaderText = computed(() => {
  switch (type.value) {
    case 'instagram':
      return 'آدرس پیج اینستاگرام خود را بدون وارد کردن @ وارد کنید'

    case 'telegram':
      return 'آی دی تلگرام خود را بدون وارد کردن @ وارد کنید'

    case 'bale':
      return 'آی دی بله خود را بدون وارد کردن @ وارد کنید'

    case 'eita':
      return 'آی دی ایتا خود را بدون وارد کردن @ وارد کنید'

    case 'rubika':
      return 'آدرس پیج روبیکا خود را بدون وارد کردن @ وارد کنید'

    case 'whatsapp':
      return 'آی دی واتساپ خود را بدون وارد کردن @ وارد کنید'

    case 'web':
      return 'آدرس سایت خود را بدون وارد کردن www وارد کنید'

  }
})

const showAtSign = computed(() => {
  return type.value != 'web'
})

const showWWW = computed(() => {
  return type.value == 'web'
})

const getType = computed(() => {
  return type.value == 'web' ? 'url' : 'text'
})

const validateText = ($event: Event) => {
  value.value[type.value] = $event.target?.value
}

const validateTextDebounce = useDebounce(validateText, 500)

</script>

<style scoped>

</style>