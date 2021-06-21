<template>
  <img
    :src="src"
    :alt="alt"
    class="flex-none object-cover w-20 h-20 rounded-lg"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'RecipeImage',
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
})
</script>
