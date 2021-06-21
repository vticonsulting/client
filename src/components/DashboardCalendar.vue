<template>
  <full-calendar class="full-calendar" :options="config">
    <template #eventContent="{timeText, event}">
      <span class="flex text-xs">
        <b class="">{{ timeText }}</b>
        <i class="ml-1 break-words whitespace-normal">{{ event.title }}</i>
      </span>
    </template>
  </full-calendar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['events', 'weekendsVisible']),

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
        initialView: 'dayGridMonth',
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
    ...mapActions([
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
