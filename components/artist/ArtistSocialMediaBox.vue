<template>
  <div class="w-full flex flex-row-reverse items-center justify-start py-[10px]">
    <InstagramIcon v-if="socials['instagram']" class="cursor-pointer" @click="share('instagram', socials['instagram'])"/>
    <TelegramIcon v-if="socials['telegram']" class="cursor-pointer" @click="share('telegram', socials['telegram'])"/>
    <BaleIcon v-if="socials['bale']" class="mx-[5px] cursor-pointer" @click="share('bale', socials['bale'])"/>
    <WhatsappIcon v-if="socials['whatsapp']" class="mx-[5px] cursor-pointer" @click="share('whatsapp', socials['whatsapp'])"/>
    <EitaaIcon v-if="socials['eita']" class="mx-[5px] cursor-pointer" @click="share('eita', socials['eita'])"/>
    <RubikaIcon v-if="socials['rubika']" class="mx-[5px] cursor-pointer" @click="share('rubika', socials['rubika'])"/>
  </div>
</template>

<script setup lang="ts">
import InstagramIcon from "~/components/icons/InstagramIcon.vue";
import TelegramIcon from "~/components/icons/TelegramIcon.vue";
import BaleIcon from "~/components/icons/BaleIcon.vue";
import WhatsappIcon from "~/components/icons/WhatsappIcon.vue";
import EitaaIcon from "~/components/icons/EitaaIcon.vue";
import RubikaIcon from "~/components/icons/RubikaIcon.vue";

const route = useRoute()
const props = defineProps({
  socials: {
    type: Object,
    default: () => {}
  }
})
const share = (type, id) => {
  let link = '';
  switch (type) {
    case 'instagram':
      link = `https://www.instagram.com/${id}`
      break;

    case 'telegram':
      link = `https://t.me/share/url?url=${window.location.href}`
      break;

    case 'bale':
      link = `https://ble.ir/share?text=${id}`
      break;
  }
  window.open(link, '_blank');
}
</script>

<style scoped>

</style>