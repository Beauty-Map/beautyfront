<template>
  <div class="px-[14px] py-[14px] rounded-b-[20px] bg-[#F7F5C4] flex flex-row justify-between items-start w-full">
    <div class="flex flex-row justify-start items-center text-[15px] leading-[24px]">
      <TicketOpenGreenIcon v-if="getStatusIsOpen()" />
      <TicketCloseRedIcon v-else />
      <span :class="[getStatusIsOpen ? 'text-[#157F3D]' : 'text-[#F44336]']">{{ getStatusFa() }}</span>
    </div>
    <div class="flex flex-row justify-start items-center text-[12px] leading-[18px]">
      <span>{{ subject.title }}</span>
      <TicketReportIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import TicketReportIcon from "~/components/icons/TicketReportIcon.vue";
import TicketOpenGreenIcon from "~/components/icons/TicketOpenGreenIcon.vue";
import TicketCloseRedIcon from "~/components/icons/TicketCloseRedIcon.vue";

const props = defineProps({
  status: {
    type: String,
    required: true
  },
  subject: {
    type: Object,
    required: true
  },
})

const getStatusFa = () => {
  switch (props.status) {
    case 'created':
    case 'open':
    case 'answered':
      return 'باز است';
    default:
      return 'بسته شده'
  }
}

const getStatusIsOpen = () => {
  switch (props.status) {
    case 'created':
    case 'open':
    case 'answered':
      return true;
    default:
      return false
  }
}
</script>

<style scoped>

</style>