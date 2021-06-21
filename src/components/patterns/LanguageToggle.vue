<script>
export default {
  data() {
    return {
      changeTo: 'Español?',
    }
  },
  methods: {
    switchLanguage() {
      if (this.$root.$i18n.locale == 'en') {
        this.$root.$i18n.locale = 'es'
        this.changeTo = 'English?'
      } else {
        this.$root.$i18n.locale = 'en'
        this.changeTo = 'Español?'
      }
    },
  },
}
</script>

<template>
  <button type="button" @click="switchLanguage">
    {{ changeTo }}
  </button>
</template>
