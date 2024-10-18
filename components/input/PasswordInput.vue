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
      <input name="password" :type="showPassword ? 'text' : 'password'" class="text-left ltr-dir h-[38px] w-full rounded-[8px] outline-none focus:outline-none pl-[40px] pr-[20px] placeholder:text-[#A9A7A7]"
             @input="validatePasswordNumberDebounce"
             v-model="value"
             pattern= "[0-9]"
      >
      <HidePasswordIcon @click="toggleShowPassword" v-if="showPassword" class="absolute right-[10px] top-[10px]"/>
      <ShowPasswordIcon @click="toggleShowPassword" v-else class="absolute right-[10px] top-[10px]"/>
      <PasswordRedIcon v-if="hasError" class="absolute left-[10px] top-[10px]"/>
      <PasswordIcon v-else class="absolute left-[10px] top-[10px]"/>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactIcon from "~/components/icons/ContactIcon.vue";
import ContactRedIcon from "~/components/icons/ContactRedIcon.vue";
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import PasswordIcon from "~/components/icons/PasswordIcon.vue";
import PasswordRedIcon from "~/components/icons/PasswordRedIcon.vue";
import HidePasswordIcon from "~/components/icons/HidePasswordIcon.vue";
import ShowPasswordIcon from "~/components/icons/ShowPasswordIcon.vue";

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
const showPassword = ref<Boolean>(false)

const validatePasswordNumber = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validatePasswordNumberDebounce = useDebounce(validatePasswordNumber, 500)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

</script>

<style scoped>

</style>