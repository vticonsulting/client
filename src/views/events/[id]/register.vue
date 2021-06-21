<template>
  <main class="flex-1">
    <p>{{ t('register_for_the_event') }}</p>
    <button @click="register">
      {{ t('register_me') }}
    </button>
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
    return { t }
  },
  methods: {
    register() {
      // Call to API
      // If registered then redirect to event details

    //   this.$router.push({
    //     name: 'event',
    //   })
    },
  },
})
</script>
