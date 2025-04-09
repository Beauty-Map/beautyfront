<template>
  <div class="w-full overflow-y-auto">
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <PasswordInput title="تکرار کلمه عبور" v-model="form.password_confirmation" class="mt-[27px]"/>
    <MainActionButton :disabled="loading" class="mt-[48px]" @click="doSetPassword">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">ثبت</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import PasswordInput from "~/components/input/PasswordInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import LoadingComponent from "~/components/global/Loading.vue";

const app = useNuxtApp()
const store = useDrawerStore()
const loading = ref(false)

const form = ref<ISetPasswordRegisterForm>({
  password: '',
  password_confirmation: '',
})

const validated = () => {
  let valid = true
  if (!form.value.password) {
    valid = false
    app.$toast.error('کلمه عبور را وارد کنید', {rtl: true})
  }
  if (!form.value.password_confirmation) {
    valid = false
    app.$toast.error('تکرار کلمه عبور را وارد کنید', {rtl: true})
  }
  return valid
}

const doSetPassword = () => {
  if (loading.value)
    return
  loading.value = true
  if (!validated()) {
    setTimeout(()=>loading.value = false, 300)
    return;
  }
  const reset = useCookie('rpt')
  const email = useCookie('email')
  const data = {
    'email': email.value,
    'remember_token': reset.value,
    'password': form.value.password,
    'password_confirmation': form.value.password_confirmation,
  }
  const {$postRequest: postRequest} = app
  postRequest('/auth/password', data)
      .then(res => {
        app.$toast.success('کلمه عبور با موفقیت بازیابی شد. برای ادامه لطفا وارد شوید.', {rtl: true})
        store.closeAllDrawers()
        store.openLoginDrawer()
      })
      .catch(err => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }
      })
      .finally(()=>{
        setTimeout(()=>loading.value = false, 300)
      })
}

</script>

<style scoped>

</style>