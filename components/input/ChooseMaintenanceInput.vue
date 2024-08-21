<template>
  <div class="cursor-pointer w-full px-[14px] py-[20px] border-b border-b-[#A9A7A7] flex flex-row justify-between items-center">
    <div class="w-full h-full flex flex-row justify-between items-center" @click="openModal">
      <span class="text-black text-right font-medium text-[16px] leading-[21px]">
        روش نگهداری
      </span>
      <span class="w-[80px] text-ellipsis text-left overflow-hidden text-[#828282] font-light text-[10px] leading-[15px]">
        {{ modelValue }}
      </span>
    </div>
    <Modal :show-close="false" :open="showModal">
      <div class=" flex flex-col justify-start items-start max-w-[340px] min-w-[250px]">
        <div class="text-right  text-black text-[15px] leading-[18px] font-normal ">روش نگهداری</div>
        <textarea
          class="w-full border border-[#A9A7A7] text-[12px] leading-[14px] rounded-[20px] px-[10px] py-[10px] focus:border-[#A9A7A7] mt-[20px] focus:outline-[#A9A7A7]"
          placeholder="روش نگهداری..."
          rows="8"
          v-model="maintenance"
        >

        </textarea>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#133C3E]">
          <span @click="saveModal">ذخیره</span>
          <span @click="closeModal">بستن</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  }
})

const showModal = ref(false)

const maintenance = ref<string>(props.modelValue)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const saveModal = () => {
  emits('update:modelValue', maintenance)
  setTimeout(() => {
    closeModal()
  }, 300)
}

watch(() => props.modelValue, () => {
  maintenance.value = props.modelValue
})
</script>

<style scoped>

</style>