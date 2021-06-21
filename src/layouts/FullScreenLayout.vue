<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FullScreenLayout',
  mounted() {
    this.$store.dispatch('sendWindowHeight')
  },
}
</script>
