<template>
  <div
      class="fixed inset-0 bg-white z-[999999999] overflow-y-auto px-6 pb-12 duration-300"
  >
    <div class="flex justify-between items-center pt-6">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">انتخاب امکانات</div>
      <button @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="grid grid-cols-1 gap-3 mt-6">
      <label
          v-for="feature in features"
          :key="feature.id"
          class="flex items-center gap-2 text-[16px] text-[#333]"
      >
        <input
            type="checkbox"
            :value="feature.id"
            v-model="localSelected"
            class="accent-primary h-4"
        />
        {{ feature.title }}
      </label>
    </div>
    <MainActionButton class="mt-[48px] h-[44px] text-white" @click="confirmSelection">
      تایید انتخاب
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import MainActionButton from "~/components/button/form/MainActionButton.vue";

interface Feature {
  id: number
  title: string
}

const props = defineProps<{
  features: Feature[]
  modelValue: number[]
}>()

const emit = defineEmits(['update:modelValue', 'close'])

const localSelected = ref<number[]>([...props.modelValue])

watch(() => props.modelValue, (val) => {
  localSelected.value = [...val]
})

const confirmSelection = () => {
  emit('update:modelValue', localSelected.value)
  emit('close')
}
</script>
