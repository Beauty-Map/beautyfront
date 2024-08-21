<template>
  <div class="w-full flex flex-row-reverse items-center justify-start py-[10px]">
    <InstagramIcon class="cursor-pointer"/>
    <TelegramIcon class="cursor-pointer"/>
    <BaleIcon class="mx-[5px] cursor-pointer"/>
    <WhatsappIcon class="mx-[5px] cursor-pointer"/>
    <EitaaIcon class="mx-[5px] cursor-pointer"/>
    <RubikaIcon class="mx-[5px] cursor-pointer"/>
  </div>
</template>

<script setup lang="ts">
import InstagramIcon from "~/components/icons/InstagramIcon.vue";
import TelegramIcon from "~/components/icons/TelegramIcon.vue";
import BaleIcon from "~/components/icons/BaleIcon.vue";
import WhatsappIcon from "~/components/icons/WhatsappIcon.vue";
import EitaaIcon from "~/components/icons/EitaaIcon.vue";
import RubikaIcon from "~/components/icons/RubikaIcon.vue";

const props = defineProps({
  socials: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>

</style>