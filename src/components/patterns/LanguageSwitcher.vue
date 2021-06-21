<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
}
</script>
<template>
  <div>
    <RouterLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </RouterLink>
  </div>
</template>
