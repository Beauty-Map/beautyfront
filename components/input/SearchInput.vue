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
      <input type="text" class="text-right h-[38px] w-full rounded-[8px] outline-none focus:outline-none pr-[30px] pl-[20px] placeholder:text-[#828282] placeholder:text-[11px] placeholder:leading-[16px] font-medium"
             @input="validateSearchDebounce"
             placeholder="جستجو در لیست شهر ها"
      >
      <SearchIcon class="absolute top-[14px] right-[10px]"/>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import SearchIcon from "~/components/icons/SearchIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const value = ref<String>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)

const validateSearch = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateSearchDebounce = useDebounce(validateSearch, 500)

</script>

<style scoped>

</style>