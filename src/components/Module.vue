<template>
  <v-switch :case="number">
    <template v-for="num in numbers" v-slot:[num]> Number: {{ num }} </template>

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
    const number = ref(1)
    const numbers = [1, 2, 3, 4, 5]

    return {
      number,
      numbers,
    }
  },
})
</script>
