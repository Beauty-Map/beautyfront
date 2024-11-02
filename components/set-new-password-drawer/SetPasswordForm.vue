<template>
  <div class="w-full overflow-y-auto">
    <PasswordInput title="کلمه عبور" v-model="form.old_password" class="mt-[27px]"/>
    <PasswordInput title="کلمه عبور جدید" v-model="form.password" class="mt-[27px]"/>
    <PasswordInput title="تکرار کلمه عبور جدید" v-model="form.password_confirmation" class="mt-[27px]"/>
    <MainActionButton class="mt-[48px] h-[44px]" @click="doSetPassword">
      <div v-if="!pendingValue" class="text-white text-center text-[14px] leading-[21px]">
        بازنشانی رمز عبور
      </div>
      <div v-else class="text-white text-center text-[14px] leading-[21px]">
        <moon-loader :loading="true" :color="'#fff'" :size="'25px'" margin="10px"></moon-loader>
      </div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import PasswordInput from "~/components/input/PasswordInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useCustomFetch} from "~/composables/useCustomFetch";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import {useAuthStore} from "~/store/Auth";

const store = useDrawerStore()
const auth = useAuthStore()

const form = ref<ISetNewPasswordForm>({
  old_password: '',
  password: '',
  password_confirmation: '',
})

const pendingValue = ref<Boolean>(false)

const doSetPassword = async () => {
  pendingValue.value = true
  const {$putRequest: putRequest}=useNuxtApp()
  putRequest('/own/password', form.value)
      .then(res => {
        setTimeout(() => {
          pendingValue.value = false
          store.closeAllDrawers()
        }, 500)
      })
      .catch(err => {
        setTimeout(() => {
          pendingValue.value = false
        }, 500)
      })
}

</script>

<style scoped>

</style>