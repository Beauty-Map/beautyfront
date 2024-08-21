<template>
  <div class="w-full overflow-y-auto">
    <TextInput title="نام و نام خانوادگی" v-model="form.full_name" class="mt-[27px]"/>
    <ChooseCityInput title="استان و شهر" v-model="form.city_id" class="mt-[27px]"/>
    <BirthDateInput title="تاریخ تولد" v-model="form.birth_date" class="mt-[27px]"/>
    <MainActionButton class="mt-[80px]" @click="doSaveProfile">
      <div class="text-white text-center text-[20px] leading-[30px]">تکمیل ثبت نام</div>
    </MainActionButton>
  </div>
</template>

<script setup lang="ts">

import TextInput from "~/components/input/TextInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";

const store = useDrawerStore()

const form = ref<ICompleteProfileForm>({
  full_name: '',
  birth_date: '',
  city_id: 0,
})

const doSaveProfile = () => {
  store.closeAllDrawers()
}

</script>

<style scoped>

</style>