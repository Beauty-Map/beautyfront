<template>
  <div class="w-full">
    <EmailInput title="ایمیل" v-model="form.email"/>
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <ResetPasswordLink class="mt-[18]"/>
    <PolicyAndRulesButton class="mt-[18px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[18px]" @click="doLogin">
      <div class="text-white text-center text-[20px] leading-[30px]">ورود</div>
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
import {useDrawerStore} from "~/store/Drawer";

const app = useNuxtApp()
const store = useDrawerStore()
const auth = useSanctumAuth()
const router = useRouter()

const form = ref<ILoginForm>({
  email: '',
  password: '',
  accept_policy: false,
})

const doLogin = async () => {
  auth.login(form.value)
      .then(() => {
        app.$toast.success('شما با موفقیت وارد شدید', {rtl: true,})
        if (isMd) {
          router.push('/panel')
        } else {
          store.closeAllDrawers()
        }

      })
      .catch(err => {
        app.$toast.error('متاسفانه خطایی رخ داده است. دوباره امتحان کنید', {rtl: true,})
        console.log(err, "err")
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