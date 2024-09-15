<template>
  <div class="mb-[30px] border border-[#A9A7A7] rounded-[20px] bg-[#FDF4FF] flex flex-col justify-start items-start w-full">
    <TicketItemHeader
        :id="ticket.id"
        :created-at="ticket.created_at"
    />
    <TicketItemContent
        :status="ticket.status"
        :subject="ticket.subject"
    />
    <TicketItemFooter
        :status="ticket.status"
        :subject="ticket.subject"
    />
  </div>
</template>

<script setup lang="ts">
import TicketItemHeader from "~/components/support/TicketItemHeader.vue";
import TicketItemContent from "~/components/support/TicketItemContent.vue";
import TicketItemFooter from "~/components/support/TicketItemFooter.vue";
const props = defineProps({
  ticket: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>