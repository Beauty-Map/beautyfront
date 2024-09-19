<template>
  <div class="w-full overflow-y-auto">
    <EmailInput @input="onInput" title="ایمیل" v-model="form.email"/>
    <PasswordInput title="یک کلمه عبور برای خود انتخاب کنید" v-model="form.password" class="mt-[27px]"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton :disabled="loading" class="mt-[24px]" @click="doRegister">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openLoginModal" title="ورود"/>
  </div>
</template>

<script setup lang="ts">

import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import {useDrawerStore} from "~/store/Drawer";
import EmailInput from "~/components/input/EmailInput.vue";
import PasswordInput from "~/components/input/PasswordInput.vue";
import LoadingComponent from "~/components/global/Loading.vue";

const emits = defineEmits(['sent', 'update:modelValue'])
const app = useNuxtApp()
const router = useRouter()
const store = useDrawerStore()

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const loading = ref(false)

const form = ref<IRegisterForm>({
  email: '',
  password: '',
  accept_policy: false
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
  if (!form.value.accept_policy) {
    app.$toast.error('لطفا تیک گزینه تایید قوانین را بزنید', {rtl: true})
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
  const ref = useCookie('referralId', {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
    sameSite: 'lax',
  });
  const data = {
    email: form.value.email,
    password: form.value.password,
    referrer_code: ref.value?.toString(),
  }
  const {$postRequest: postRequest}=app
  postRequest('/auth/register', data)
      .then(async res => {
        app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
        const email = useCookie('email')
        email.value = form.value.email
        app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
        emits('sent')
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
        setTimeout(() =>loading.value = false, 500)
      })
}

const openLoginModal = () => {
  if (isMd) {
    router.push('/login')
  } else {
    store.closeAllDrawers()
    store.openLoginDrawer()
  }
}

const onInput = (e: Event) => {
  emits('update:modelValue', e.target?.value)
}
// const isMd = computed(() => window.screen.width >= 768)
const isMd = false

onMounted(() => nextTick(() => {
  form.value.email = props.modelValue
}))
</script>

<style scoped>

</style>