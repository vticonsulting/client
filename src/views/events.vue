<template>
  <main class="flex-1">
    <BasePageHeading>{{ $t('events') }}</BasePageHeading>
    <section class="p-8">
      <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event" />

        <div class="pagination">
          <RouterLink
            id="page-prev"
            :to="{ name: 'events', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
          >&#60; {{ $t('previous') }}</RouterLink>

          <RouterLink
            id="page-next"
            :to="{ name: 'events', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
          >{{ $t('next') }} &#62;</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { watchEffect } from '@vue/composition-api'
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'

export default {
  name: 'EventsView',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then(response => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)

      return this.page < totalPages
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
