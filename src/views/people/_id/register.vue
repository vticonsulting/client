<template>
  <main class="flex-1">
    <pre>
  {{ person }}
  </pre
    >
    <button @click="register">
      {{ $t('register') }}
    </button>
  </main>
</template>

<script>
import {defineComponent} from '@vue/composition-api'
export default defineComponent({
  props: {
    person: {
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
