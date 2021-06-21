<template>
  <v-switch :case="size">
    <template #big> Big </template>

    <template #small> Small </template>

    <template #default> Default </template>
  </v-switch>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import VSwitch from '@lmiller1990/v-switch'

export default defineComponent({
  components: {
    VSwitch,
  },
  setup() {
    return {
      size: ref('big'),
    }
  },
})
</script>
