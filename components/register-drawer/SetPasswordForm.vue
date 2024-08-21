<template>
  <div class="w-full overflow-y-auto">
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <PasswordInput title="تکرار کلمه عبور" v-model="form.password_confirmation" class="mt-[27px]"/>
    <MainActionButton class="mt-[48px]" @click="doSetPassword">
      <div class="text-white text-center text-[20px] leading-[30px]">ثبت</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import PasswordInput from "~/components/input/PasswordInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";

const props = defineProps({
  email: {
    type: String,
    default: ''
  },
  rememberToken: {
    type: String,
    default: ''
  }
})

const app = useNuxtApp()
const router = useRouter()
const store = useDrawerStore()

const form = ref<ISetPasswordRegisterForm>({
  password: '',
  password_confirmation: '',
})

const doSetPassword = async () => {
  const data = {
    email: props.email,
    remember_token: props.rememberToken,
    password: form.value.password,
    password_confirmation: form.value.password_confirmation,
  }
  const res = await useCustomFetch('/auth/password', {
    method: "POST",
    body: data
  })
  if (res.error.value != null) {
    app.$toast.error('خطا رخ داده است', {rtl: true})
  }
  if (res.data.value != null) {
    app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
    if (isMd) {
      await router.replace('/login')
    } else {
      store.closeAllDrawers()
      store.openCompleteProfileDrawer()
    }
  }

}

// const isMd = computed(() => window.screen.width >= 768)
const isMd = false
</script>

<style scoped>

</style>