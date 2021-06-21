<template>
  <Component :is="layout">
    <template #header>
      <TheNavbar />
    </template>

    <NotificationContainer />

    <RouterView :key="$route.fullPath" />

    <template #footer>
      <TheFooter />
    </template>

    <PortalTarget class="z-10" name="overlays" />
  </Component>
</template>

<script>
import {provide, defineComponent} from '@vue/composition-api'
import DefaultLayout from '@/layouts/DefaultLayout'
import TheFooter from '@/components/TheFooter'
import TheNavbar from '@/components/TheNavbar'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default defineComponent({
  name: 'App',
  metaInfo() {
    // const locale = this.locale
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '',
      // all titles will be injected into this template
      //   titleTemplate: chunk =>
      //     locale === 'nl-NL' ? `${chunk} - Welkom` : `${chunk} - Welcome`,
      titleTemplate: chunk => (chunk ? `${chunk} - CLI` : 'CLI'),

      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {name: 'og:title', content: 'store.state.pageTitle'},
        {name: 'og:type', content: 'website'},
        {name: 'og:url', content: window.location.href},
        {name: 'og:image', content: 'store.state.pageImage'},
        {name: 'og:description', content: 'store.state.pageDescription'},
        {name: 'og:locale', content: 'store.state.locale'},
        {name: 'author', content: window.location.href},
        {name: 'publisher', content: window.location.href},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: 'store.state.twitter'},
        {name: 'twitter:creator', content: 'store.state.twitter'},
        {name: 'twitter:title', content: 'store.state.pageTitle'},
        {name: 'twitter:description', content: 'store.state.pageDescription'},
        {name: 'twitter:image', content: 'store.state.pageImage'},
      ],
    }
  },
  components: {
    DefaultLayout,
    TheFooter,
    TheNavbar,
    NotificationContainer,
  },
  setup() {
    provide('globals', {
      maintainence: false,
    })
  },
  data() {
    return {
      locale: 'nl-NL',
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
    },
  },
})
</script>
