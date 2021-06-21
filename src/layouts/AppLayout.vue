<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
// https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b
const defaultLayout = 'AppLayoutDefault'
export default {
  name: 'AppLayout',
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}.vue`)
    },
  },
}
</script>
