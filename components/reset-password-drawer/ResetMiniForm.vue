<template>
  <div class="w-full overflow-y-auto">
    <EmailInput @input="onInput" title="ایمیل" v-model="form.email"/>
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
import LoadingComponent from "~/components/global/Loading.vue";

const emits = defineEmits(['sent', 'update:modelValue'])
const app = useNuxtApp()
const router = useRouter()
const store = useDrawerStore()
const loading = ref(false)

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

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
  const {$postRequest: postRequest}=app
  postRequest('/auth/password/forgot', data)
      .then(res => {
        const email = useCookie('email')
        email.value = form.value.email
        app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
        emits('sent')
      })
      .catch(err => {
        app.$toast.error('ایمیل صحیح نیست!', {rtl: true})
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
  form.value.phone_number = props.modelValue
}))
</script>

<style scoped>

</style>