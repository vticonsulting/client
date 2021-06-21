<template>
  <section class="gap-4 lg:grid lg:grid-cols-4">
    <div class="col-span-3" id="calendar">
      <div class="calendar">
        <FullCalendar class="full-calendar" :options="config">
          <template #eventContent="{timeText, event}">
            <span class="flex text-xs">
              <b class="">{{ timeText }}</b>
              <span class="ml-2 whitespace-normal break-word">
                {{ event.title }}
              </span>
            </span>
          </template>
        </FullCalendar>
      </div>
    </div>

    <div class="rounded shadow text-secondary-900 bg-secondary-100">
      <CalendarSidebar
        :events="events"
        :weekends-visible="weekendsVisible"
        @set-weekends-visible="setweekendsVisible"
      />
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import CalendarSidebar from '@/components/CalendarSidebar'

export default {
  components: {
    CalendarSidebar,
    FullCalendar,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('event', ['events', 'weekendsVisible']),

    config() {
      return {
        ...this.configOptions,
        ...this.eventHandlers,
      }
    },

    configOptions() {
      return {
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: this.events,
        weekends: this.weekendsVisible,
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        initialView: 'dayGridWeek',
        locale: 'en-us',
      }
    },

    eventHandlers() {
      return {
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventDrop,
        select: this.onDateSelect,
      }
    },
  },
  methods: {
    ...mapActions('event', [
      'createEvent',
      'updateEvent',
      'deleteEvent',
      'setweekendsVisible',
    ]),

    onDateClick(payload) {
      const title = prompt('Please enter a new title for your event')

      if (!title) {
        return
      }

      const id = (this.events.length + 1) * 10
      const {start, end, date, allDay} = payload

      return this.createEvent({
        id,
        title,
        date,
        start,
        end,
        allDay,
      })
    },

    onDateSelect(payload) {
      return this.onDateClick(payload)
    },

    onEventClick({event}) {
      const confirmed = confirm(
        `Are you sure you want to delete the event '${event.title}'?`,
      )

      if (!confirmed) {
        return
      }

      return this.deleteEvent(event.id)
    },

    onEventDrop({event}) {
      return this.updateEvent(event)
    },
  },
}
</script>
