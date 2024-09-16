<template>
  <div class="w-full overflow-y-auto">
    <EmailInput title="ایمیل" v-model="form.email"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[24px]" @click="doRegister">
      <div class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openLoginModal" title="ورود"/>
    <OtpDrawer :is-open="openDrawer"
               @close="closeDrawerClicked"
               @change-email="changeEmail"
               @validate="validate"
               @resend="resend"
    />
  </div>
</template>

<script setup lang="ts">

import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import {useDrawerStore} from "~/store/Drawer";
import EmailInput from "~/components/input/EmailInput.vue";
import OtpDrawer from "~/components/drawer/OtpDrawer.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import PasswordInput from "~/components/input/PasswordInput.vue";
const app = useNuxtApp()
const router = useRouter()

const store = useDrawerStore()
const openDrawer = ref(false)

const form = ref<IRegisterForm>({
  email: '',
  password: '',
  accept_policy: false
})

const openDrawerClicked = () => {
  openDrawer.value = true
}

const closeDrawerClicked = () => {
  openDrawer.value = false
}

const changeEmail = () => {
  openDrawerClicked()
}

const doRegister = async () => {
  const data = {
    email: form.value.email,
  }
  const {$postRequest: postRequest}=app
  postRequest('/auth/password/forgot', data)
      .then(res => {
        const email = useCookie('email')
        email.value = form.value.email
        app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
        openDrawerClicked()
      })
      .catch(err => {
        app.$toast.error('ایمیل صحیح نیست!', {rtl: true})
      })
}

const openLoginModal = () => {
  store.closeAllDrawers()
  store.openLoginDrawer()
}

const validate = async (code: string) => {
  const data = {
    email: form.value.email,
    code: code,
  }
  const res = await useCustomFetch('/auth/password/otp', {
    method: "POST",
    body: data
  })
  if (res.error.value != null) {
    app.$toast.error('کد تایید صحیح نیست', {rtl: true})
  }
  if (res.data.value != null) {
    app.$toast.success('ایمیل شما تایید شد', {rtl: true})
    if (isMd) {
      await router.push('/')
    } else {
      closeDrawerClicked()
      store.closeAllDrawers()

    }
  }
}

const resend = async (code: string) => {
  const data = {
    email: form.value.email,
  }
  const res = await useCustomFetch('/auth/password/forgot', {
    method: "POST",
    body: data
  })
  if (res.error.value != null) {
    app.$toast.error('ایمیل صحیح نیست!', {rtl: true})
  }
  if (res.data.value != null) {
    const email = useCookie('email')
    email.value = form.value.email
    app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
    openDrawerClicked()
  }
}

// const isMd = computed(() => window.screen.width >= 768)
const isMd = false

</script>

<style scoped>

</style>