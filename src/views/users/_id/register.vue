<template>
  <main class="flex-1">
    <pre>
  {{ user }}
  </pre>
    <button @click="register">{{ $t('register') }}</button>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    register() {
      // Call to API
      // If registered then redirect to event details
    },
  },
})
</script>
