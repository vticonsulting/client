<template>
  <main class="flex-1">
    <p>{{ $t('register_carrier') }}</p>
    <button @click="register">{{ $t('register_carrier') }}</button>
  </main>
</template>

<script>
export default {
  props: ['carrier'],
  methods: {
    register() {
      // Call to API
      // If added then redirect to carrier details

      this.$router.push({
        name: 'carrier',
      })
    },
  },
}
</script>
