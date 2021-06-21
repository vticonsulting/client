<script>
export default {
  data() {
    return {
      langs: ['en', 'es'],
    }
  },
}
</script>

<template>
  <OSelect
    v-model="$root.$i18n.locale"
    size="small"
    placeholder="Select a name"
  >
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
      {{ lang.toUpperCase() }}
    </option>
  </OSelect>
</template>
