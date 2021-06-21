<template>
  <main class="flex-1">
    <p>{{ $t('register_for_the_affiliate') }}</p>
    <button @click="register">{{ $t('register_me') }}</button>
  </main>
</template>

<script>
export default {
  props: ['affiliate'],
  methods: {
    register() {
      // Call to API
      // If registered then redirect to affiliate details

      this.$router.push({
        name: 'affiliate',
      })
    },
  },
}
</script>
