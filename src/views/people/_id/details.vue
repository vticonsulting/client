<template>
  <main class="flex-1">
    {{ person }}
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
})
</script>
