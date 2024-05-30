<template>
  <div class="cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center">
    <div class="w-full h-full flex flex-row justify-between items-center" @click="openModal">
      <span class="text-black text-right font-medium text-[16px] leading-[21px]">
        شماره تماس رزرو نوبت
      </span>
      <span class="w-[120px] text-ellipsis text-left overflow-hidden text-[#A9A7A7] font-light text-[16px] leading-[19px]">
        {{ getPhoneNumber }}
      </span>
    </div>
    <Modal :show-close="false" :open="showModal">
      <div class=" flex flex-col justify-start items-start max-w-[340px] min-w-[250px]">
        <div class="text-right  text-black text-[15px] leading-[18px] font-normal ">تنظیم شماره</div>
        <div class="flex flex-row justify-start items-center mt-[18px]">
          <CheckBox v-model="hasTel" />
          <span class="text-black text-[16px] leading-[19px] font-normal mr-[5px]">تلفن ثابت</span>
        </div>
        <div class="flex flex-row justify-start items-center mt-[14px]">
          <CheckBox v-model="hasPhoneNumber" />
          <span class="text-black text-[16px] leading-[19px] font-normal mr-[5px]">شماره موبایل</span>
        </div>
        <div v-if="!(hasTel || hasPhoneNumber)" class="flex flex-row items-center mt-[28px]" :class="[showSecondPhoneNumber ? 'justify-end' : 'justify-start']">
          <div class="w-full flex flex-row justify-end items-center relative" v-if="showSecondPhoneNumber" >
            <svg @click="closeSecondPhoneNumber" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#141414"/>
            </svg>
            <input placeholder="09381412419" v-model="secondPhoneNumber" type="tel" class="mr-[5px] w-full text-left dir-ltr border border-[#A9A7A7] focus:outline-[#A9A7A7] py-[12px] px-[8px] rounded-[10px]"/>
          </div>
          <div v-else @click="openSecondPhoneNumber" class="w-full cursor-pointer text-[#2920D9] text-[14px] leading-[16px] font-normal mr-[5px]">شماره دیگر</div>
        </div>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]">
          <span @click="saveModal">ذخیره</span>
          <span @click="closeModal">بستن</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import CheckBox from "~/components/input/CheckBox.vue";

const emits = defineEmits(['update:hasTel', 'update:hasPhoneNumber', 'update:secondPhoneNumber'])
const props = defineProps({
  hasTel: {
    type: Boolean,
    default: false,
  },
  hasPhoneNumber: {
    type: Boolean,
    default: false,
  },
  secondPhoneNumber: {
    type: String,
    default: '',
  }
})

const showModal = ref(false)
const hasTel = ref(props.hasTel)
const hasPhoneNumber = ref(props.hasPhoneNumber)
const showSecondPhoneNumber = ref(props.secondPhoneNumber != '')
const secondPhoneNumber = ref(props.secondPhoneNumber)
const user = useSanctumUser()

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  hasTel.value = props.hasTel
  hasPhoneNumber.value = props.hasPhoneNumber
  showSecondPhoneNumber.value = props.secondPhoneNumber != ''
  secondPhoneNumber.value = props.secondPhoneNumber
  showModal.value = false
}

const openSecondPhoneNumber = () => {
  showSecondPhoneNumber.value = true
}

const closeSecondPhoneNumber = () => {
  secondPhoneNumber.value = ''
  showSecondPhoneNumber.value = false
}

const saveModal = () => {
  emits('update:hasTel', hasTel.value)
  emits('update:hasPhoneNumber', hasPhoneNumber.value)
  if (hasTel.value || hasPhoneNumber.value) {
    secondPhoneNumber.value = ''
  }
  emits('update:secondPhoneNumber', secondPhoneNumber.value)
  setTimeout(() => {
    closeModal()
  }, 300)
}

const getPhoneNumber = computed(() => {
  if (props.secondPhoneNumber) {
    return props.secondPhoneNumber
  }
  if (props.hasTel) {
    return user.value?.tel_number
  }
  if (props.hasPhoneNumber) {
    return user.value?.phone_number
  }
})

</script>

<style scoped>

</style>