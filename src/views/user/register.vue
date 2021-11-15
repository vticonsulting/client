<template>
  <main class="flex-1">
    <p>{{ $t('register_for_the_person') }}</p>
    <button @click="register">{{ $t('register_me') }}</button>
  </main>
</template>

<script>
export default {
  props: ['person'],
  methods: {
    register() {
      // Call to API
      // If registered then redirect to person details

      this.$router.push({
        name: 'person',
      })
    },
  },
}
</script>
