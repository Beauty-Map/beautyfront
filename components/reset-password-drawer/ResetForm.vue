<template>
  <div class="w-full overflow-y-auto">
    <EmailInput title="ایمیل" v-model="form.email" class="px-2"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton :disabled="loading" class="mt-[24px]" @click="doRegister">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
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
import LoadingComponent from "~/components/global/Loading.vue";
import {useOtpResetSignal} from "~/composables/useOtpResetSignal";
const app = useNuxtApp()
const router = useRouter()
const { emitOtpResetSignal } = useOtpResetSignal();
const {$postRequest: postRequest}=app

const store = useDrawerStore()
const openDrawer = ref(false)
const loading = ref(false)

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

const validated = () => {
  let validated = true
  if (!form.value.email) {
    app.$toast.error('لطفا ایمیل خود را وارد کنید', {rtl: true})
    validated = false
  }

  return validated
}
const doRegister = async () => {
  if (loading.value) return
  if (!validated()) {
    return
  }
  loading.value = true
  const data = {
    email: form.value.email,
  }
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
      .finally(() => loading.value = false)
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
  postRequest('/auth/password/otp', data)
      .then(async (res) => {
        const reset = useCookie('rpt', {
          maxAge: 60*5
        })
        reset.value = res.token
        app.$toast.success('کد تایید شد. لطفا پسورد جدید را وارد کنید', {rtl: true})
        store.closeAllDrawers()
        openDrawer.value = false
        store.openSetPasswordDrawer()
      })
      .catch(err => {
        emitOtpResetSignal();
        app.$toast.error('کد تایید صحیح نیست', {rtl: true})
      })
}

const resend = async (code: string) => {
  const data = {
    email: form.value.email,
  }
  postRequest('/auth/password/forgot',data)
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

// const isMd = computed(() => window.screen.width >= 768)
const isMd = false

</script>

<style scoped>

</style>