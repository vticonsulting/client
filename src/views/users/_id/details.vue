<template>
  <main class="flex-1">{{ user }}</main>
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
})
</script>
