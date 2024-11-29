<template>
  <div class="w-full">
    <EmailInput title="ایمیل" v-model="form.email" class="px-2"/>
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <ResetPasswordLink class="mt-[18]"/>
    <MainActionButton :disabled="loading" class="mt-[18px]" @click="doLogin">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">ورود</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openRegisterModal" title="ثبت نام"/>
  </div>
</template>

<script setup lang="ts">

import EmailInput from "~/components/input/EmailInput.vue";
import PasswordInput from "~/components/input/PasswordInput.vue";
import ResetPasswordLink from "~/components/icons/AuthDrawer/ResetPasswordLink.vue";
import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import LoadingComponent from "~/components/global/Loading.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const store = useDrawerStore()
const router = useRouter()
const auth = useAuthStore()
const loading = ref(false)
const form = ref<ILoginForm>({
  email: '',
  password: '',
  accept_policy: false,
})

const validated = () => {
  let validated = true
  if (!form.value.email) {
    app.$toast.error('لطفا ایمیل خود را وارد کنید', {rtl: true})
    validated = false
  }
  if (!form.value.password) {
    app.$toast.error('لطفا پسورد خود را وارد کنید', {rtl: true})
    validated = false
  }
  return validated
}

const doLogin = async () => {
  if (loading.value) return
  if (!validated()) {
    return
  }
  loading.value = true
  const {$postRequest: postRequest}=app
  postRequest('/auth/login', form.value)
      .then((res) => {
        auth.user = res.data
        auth.token = res.data.token
        const token = useCookie("token", {
          maxAge: 60 * 60 * 24 * 31
        })
        token.value = res.data.token
        app.$toast.success('شما با موفقیت وارد شدید', {rtl: true,})
        store.closeAllDrawers()
      })
      .catch(err => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }
      })
      .finally(() => {
        setTimeout(()=>{
          loading.value = false
        }, 500)
      })
}

const openRegisterModal = () => {
  if (isMd) {
    router.push('/register')
  } else {
    store.closeAllDrawers()
    store.openRegisterDrawer()
  }
}

// const isMd = computed(() => window.screen.width >= 768)
const isMd = false

</script>

<style scoped>

</style>