<template>
  <div class="book">
    <!-- Scoped slots is a technique for allowing a component to expose data to the slot’s template block. -->
    <!-- Step 1. Expose the data as props on the desired slots -->
    <!-- Step 2. Expose slot props on your Library <template> block -->
    <!-- Step 3. Use slotProps to render out the desired data -->
    <slot name="title" :bookTitle="bookTitle"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookTitle: 'Child Providing Data',
    }
  },
}
</script>
