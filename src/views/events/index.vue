<template>
  <h1>{{ t('events') }}</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { EventItem } from '@/types'

import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard,
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      events: [] as EventItem[],
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
</script>
