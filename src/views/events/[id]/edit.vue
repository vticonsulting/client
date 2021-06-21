<template>
  <main class="flex-1">
    <p>{{ t('edit_the_event_here') }}</p>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { EventItem } from '@/types'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
})
</script>
