<template>
  <header class="header">
    <h2>{{ titleText }}</h2>
  </header>
</template>

<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
  props: ['title'],
  setup({title}) {
    return {titleText: title}
  },
})
</script>
