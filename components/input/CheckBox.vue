<template>
  <div class="" @click="toggleCheckBox">
    <input type="checkbox" hidden v-model="value">
    <CheckBoxCheckedIcon v-if="modelValue"/>
    <CheckBoxIcon v-else/>
  </div>
</template>

<script setup lang="ts">

import CheckBoxCheckedIcon from "~/components/icons/CheckBoxCheckedIcon.vue";
import CheckBoxIcon from "~/components/icons/CheckBoxIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const value = ref<Boolean>(props.modelValue)
const toggleCheckBox = () => {
  value.value = !value.value
  emits('update:modelValue', value.value)
}
</script>

<style scoped>

</style>