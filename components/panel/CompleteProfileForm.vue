<template>
  <div class="w-full overflow-y-scroll">
    <TextInput title="نام و نام خانوادگی" v-model="form.full_name" class="mt-[27px]"/>
    <ChooseCityInput title="استان و شهر" v-model="form.city_id" class="mt-[27px]"/>
    <BirthDateInput title="تاریخ تولد" v-model="form.birth_date" class="mt-[27px]"/>
    <MainActionButton class="mt-[27px]" @click="doSaveProfile">
      <div class="text-white text-center text-[20px] leading-[30px]">ذخیره تغییرات</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import TextInput from "~/components/input/TextInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";

const app = useNuxtApp()
const store = useDrawerStore()
const user = useSanctumUser()

const form = ref<ICompleteProfileForm>({
  full_name: user.value?.full_name,
  birth_date: user.value?.birth_date,
  city_id: user.value?.city_id,
})

const doSaveProfile = async () => {
  useCustomFetch('/own', {
    method: "PUT",
    body: form.value,
  })
      .then(res => {
        app.$toast.success('تغییرات با موفقیت ثبت شد!', {rtl: true})
      })
      .catch(err => {
      })
}

</script>

<style scoped>

</style>