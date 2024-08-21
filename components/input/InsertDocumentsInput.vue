<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
    >
      <input type="text" class="absolute left-[1px] right-[1px] top-[1px] bottom-[1px] text-right  rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[24px] placeholder:text-[#A9A7A7]"
             @input="validateTextDebounce"
             v-model="value"
             @keyup="onKeyUpEvent"
      >
      <PlusSmallIcon class="absolute left-[4px] top-[8px]"/>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
    <div class="w-full flex flex-col justify-start items-start mt-[10px] gap-y-[10px]">
      <div class="cursor-pointer text-[#141414] font-semibold text-[16px] leading-[18px] flex flex-row justify-start items-center w-full" v-for="(d,i) in documents" :key="i">
        <span>{{ d }}</span>
        <CloseSmallIcon @click="removeDocument(i)" class="mr-[10px]"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
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
const hasError = ref<Boolean>(false)
const documents = ref<String[]>([])

onMounted(() => {
  documents.value = props.modelValue as String[]
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

const validateTextNumber = () => {
  emits('update:modelValue', documents)
}

const validateTextDebounce = useDebounce(validateTextNumber, 500)

</script>

<style scoped>

</style>