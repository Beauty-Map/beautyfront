<template>
  <div class="w-full overflow-y-auto">
    <EmailInput @input="onInput" title="ایمیل" v-model="form.email"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[24px]" @click="doRegister">
      <div class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openLoginModal" title="ورود"/>
  </div>
</template>

<script setup lang="ts">

import TelInput from "~/components/input/TelInput.vue";
import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import {useDrawerStore} from "~/store/Drawer";
import EmailInput from "~/components/input/EmailInput.vue";

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

const form = ref<IRegisterForm>({
  email: '',
  accept_policy: false
})

const doRegister = async () => {
  const data = {
    email: form.value.email,
  }
  const res = await useCustomFetch('/auth/register', {
    method: "POST",
    body: data
  })
  if (res.error.value != null) {
    app.$toast.error('این ایمیل پیشتر ثبت نام کرده است', {rtl: true})
  }
  if (res.data.value != null) {
    app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
    emits('sent')
  }
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