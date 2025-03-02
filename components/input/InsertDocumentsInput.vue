<template>
  <div class="flex flex-col items-start justify-start w-full px-1">

<!--      <input type="text" class="absolute left-[1px] right-[1px] top-[1px] bottom-[1px] text-right  rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[24px] placeholder:text-[#A9A7A7]"-->
<!--             @input="validateTextDebounce"-->
<!--             v-model="value"-->
<!--             @keyup="onKeyUpEvent"-->
<!--      >-->
      <div class="flex flex-row justify-between w-full">
        <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
             :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
        >
          {{ title }}
        </div>
        <button @click.prevent="showBox" class=" text-[12px] text-white flex flex-row justify-center items-center px-2 py-1 rounded-md bg-[#FF3CA0]">
          <PlusSmallIcon class=""/>
          مدرک جدید
        </button>
      </div>
<!--    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">-->
<!--      <ErrorRedIcon />-->
<!--      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>-->
<!--    </div>-->
    <div class="w-full flex flex-col justify-start items-start mt-[10px] gap-y-[10px]">
      <div class="cursor-pointer text-[#141414] font-semibold text-[16px] leading-[18px] flex flex-row justify-start items-center w-full" v-for="(d,i) in documents" :key="i">
        <span>{{ d }}</span>
        <CloseSmallIcon @click="removeDocument(i)" class="mr-[10px]"/>
      </div>
    </div>
    <Modal :show-close="false" :open="openBox">
      <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
        <div class="font-medium text-center text-[#133C3E] text-[22px] leading-[32px]">
          عنوان مدرک را وارد کنید
        </div>
        <div class="w-full relative border border-[#A9A7A7] rounded-[10px] h-[50px] flex flex-col justify-start items-center mt-[20px]">
          <input
              type="text"
              class=" px-2 h-[50px] w-full pr-[10px] rounded-[10px] text-right outline-none border-none focus:outline-none focus:border-none"
              ref="inputs"
              v-model="value"
          >
        </div>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
          <span @click="saveDocument">ذخیره</span>
          <span @click="closeBox">بستن</span>
        </div>
      </div>
    </Modal>

  </div>
</template>

<script setup lang="ts">
import PlusSmallIcon from "~/components/icons/PlusSmallIcon.vue";
import CloseSmallIcon from "~/components/icons/CloseSmallIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Array,
    default: () => []
  }
})
const value = ref<String>('')
const errorText = ref<String>('')
const openBox = ref<Boolean>(false)
const hasError = ref<Boolean>(false)
const documents = ref<String[]>([])
const inputs = ref()

onMounted(() => {
  if (props.modelValue) {
    documents.value = props.modelValue as String[]
  }
})

const removeDocument = (index: number) => {
  documents.value.splice(index, 1)
}

const onKeyUpEvent = (e: Event) => {
  if (e.key == 'Enter') {
    const v = e.target?.value
    if (v) {
      documents.value.push(v)
      value.value = ''
      validateTextDebounce()
    }
  }
}

const showBox = () => {
  openBox.value = true
}
const saveDocument = () => {
  const v = value.value
  console.log(value.value)
  if (v) {
    documents.value.push(v)
    value.value = ''
    closeBox()
    validateTextDebounce()
  }
}
const closeBox = () => {
  value.value = ''
  openBox.value = false
}

const validateTextNumber = () => {
  emits('update:modelValue', documents)
}

const validateTextDebounce = useDebounce(validateTextNumber, 500)

</script>

<style scoped>

</style>