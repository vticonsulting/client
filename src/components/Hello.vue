<template>
  <div>Hello world <OButton @click="greet">Greet</OButton></div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
  name: 'Hello',

  methods: {
    greet() {
      this.$emit('greet')
    },
  },
})
</script>
