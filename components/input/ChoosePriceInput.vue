<template>
  <div class="cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center">
    <div class="w-full h-full flex flex-row justify-between items-center" @click="openModal">
      <span class=" text-black text-right font-medium text-[16px] leading-[21px]">
        تنظیم قیمت
      </span>
      <div class=" flex flex-col justify-start items-start">
        <span v-if="formattedPropPrice" class="flex flex-row text-left font-medium text-[12px] leading-[18px]"
          :class="[formattedPropDiscountPrice ? 'text-[#ED2C25] line-through' : 'text-black']"
        >
          <span>
            {{ formattedPropPrice }}
          </span>
          <span class="mr-[5px]">
            TON
          </span>
        </span>
        <span v-if="formattedPropDiscountPrice" class="flex flex-row text-left text-black font-medium text-[12px] leading-[18px]">
          <span>
            {{ formattedPropDiscountPrice }}
          </span>
          <span class="mr-[5px]">
            TON
          </span>
        </span>
      </div>
    </div>
    <Modal :show-close="false" :open="showModal">
      <div class="w-full flex flex-col justify-start items-start max-w-[340px] min-w-[250px]">
        <div class="text-right  text-black text-[15px] leading-[18px] font-normal ">تنظیم قیمت</div>
        <div class="w-full flex flex-col items-start justify-start mt-[28px]">
          <div class="w-full flex flex-row justify-end items-center relative border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]">
            <span class="absolute top-[-12px] right-[12px] z-10 bg-white text-center text-black text-[14px] leading-[21px] font-medium px-[10px]">قیمت</span>
            <input placeholder="20,000,000" :value="formattedPrice" @input="onPriceInput" type="number" class="text-[16px] leading-[19px] w-full pl-[42px] outline-none focus:outline-none text-left dir-ltr py-[12px] px-[8px] rounded-[10px]"/>
            <span class="absolute left-[2px] top-[10px] text-[16px] leading-[19px] ">TON</span>
          </div>
          <div v-if="showDiscountPrice" class="mt-[27px] w-full flex flex-row justify-end items-center relative border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]">
            <span class="absolute top-[-12px] right-[12px] z-10 bg-white text-center text-black text-[14px] leading-[21px] font-medium px-[10px]">قیمت با تخفیف</span>
            <input placeholder="20,000,000" :value="formattedDiscountPrice" @input="onDiscountPriceInput" type="number" class="text-[16px] leading-[19px] w-full pl-[42px] outline-none focus:outline-none text-left dir-ltr py-[12px] px-[8px] rounded-[10px]"/>
            <span class="absolute left-[2px] top-[10px] text-[16px] leading-[19px] ">TON</span>
          </div>
          <div v-else @click="openDiscountPrice" class="mt-[27px] w-full cursor-pointer text-[#2920D9] text-[14px] leading-[16px] font-normal mr-[5px]">قیمت با تخفیف</div>
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

const emits = defineEmits(['update:price', 'update:discountPrice'])
const props = defineProps({
  price: {
    type: Number,
    default: 0,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
})

const showModal = ref(false)
const price = ref(props.price)
const showDiscountPrice = ref(props.discountPrice != 0)
const discountPrice = ref(props.discountPrice)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const openDiscountPrice = () => {
  showDiscountPrice.value = true
}

const formattedPrice = computed(() => {
  if (!price.value) {
    return ''
  }
  return price.value.toLocaleString()
})

const formattedDiscountPrice = computed(() => {
  if (!discountPrice.value) {
    return ''
  }
  return discountPrice.value.toLocaleString()
})

const formattedPropPrice = computed(() => {
  if (!props.price) {
    return ''
  }
  return price.value.toLocaleString()
})

const formattedPropDiscountPrice = computed(() => {
  if (!props.discountPrice) {
    return ''
  }
  return discountPrice.value.toLocaleString()
})

const onPriceInput = (e) => {
  const value = e.target.value.replace(/\D/g, '')
  price.value = value ? parseInt(value) : ''
  e.target.value = price.value.toLocaleString()
}

const onDiscountPriceInput = (e) => {
  const value = e.target.value.replace(/\D/g,'')
  discountPrice.value = value ? parseInt(value) : ''
  e.target.value = discountPrice.value.toLocaleString()
}

const saveModal = () => {
  emits('update:price', price.value)
  emits('update:discountPrice', discountPrice.value)
  setTimeout(() => {
    closeModal()
  }, 300)
}

const setValues = () => {
  price.value = props.price
  discountPrice.value = props.discountPrice
  showDiscountPrice.value = props.discountPrice != 0
}

watch(() => props.price, () => setValues())
watch(() => props.discountPrice, () => setValues())
</script>

<style scoped>

</style>