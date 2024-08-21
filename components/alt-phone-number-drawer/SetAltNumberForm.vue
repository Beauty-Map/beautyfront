<template>
  <div class="w-full overflow-y-auto">
    <TelInput :error="errors.alt_number" title="شماره موبایل" v-model="form.alt_number"/>
    <MainActionButton class="mt-[48px] h-[44px]" @click="doSendCode">
      <div class="text-white text-center text-[14px] leading-[21px]">
        ارسال کد
      </div>
    </MainActionButton>
    <OtpDrawer :is-open="openDrawer"
               @close="closeDrawerClicked"
               @change-email="changePhoneNumber"
               @validate="validate"
    />
  </div>
</template>

<script setup lang="ts">

import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import TelInput from "~/components/input/TelInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import OtpDrawer from "~/components/drawer/OtpDrawer.vue";

const store = useDrawerStore()

const form = ref<ISetAltNumberForm>({
  alt_number: '',
})
const errors = ref({
  alt_number: ''
})
const openDrawer = ref(false)

const doSendCode = async () => {
  if (!form.value.alt_number) {
    errors.value.alt_number = 'ایمیل را وارد کنید'
    return
  }
  `const res = await useCustomFetch('/own/alt-number', {
    method: "POST",
    body: form.value,
  })
  if (res.error.value) {

  }
  if (res.data.value) {
    openDrawerClicked()
  }`
}

const validate = async (code: string) => {
  const res = await useCustomFetch('/own/alt-number', {
    method: "PUT",
    body: {code: code, alt_number: form.value.alt_number},
  })
  if (res.error.value) {
  }
  if (res.data.value) {
    closeDrawerClicked()
    store.closeAllDrawers()
    //TODO: Alert
  }
}

const openDrawerClicked = () => {
  openDrawer.value = true
}

const closeDrawerClicked = () => {
  openDrawer.value = false
}

const changePhoneNumber = () => {
  openDrawerClicked()
}
</script>

<style scoped>

</style>