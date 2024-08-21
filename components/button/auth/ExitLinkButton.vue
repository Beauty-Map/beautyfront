<template>
  <button @click="doExit" class="border border-red-400 text-center text-red-500 rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    خروج
  </button>
</template>

<script setup lang="ts">

const auth = useSanctumAuth()
const router = useRouter()
const doExit = () => {
  auth.logout()
      .then(res => {
        router.replace('/')
      })
      .catch(err => {
        console.log(err, "err")
      })
}
</script>

<style scoped>

</style>