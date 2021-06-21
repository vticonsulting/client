<template>
  <main class="flex-1">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { EventItem } from '@/types'

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
})
</script>
