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
import { defineComponent } from '@vue/composition-api'
import DefaultLayout from '@/layouts/DefaultLayout'
import TheFooter from '@/components/TheFooter'
import TheNavbar from '@/components/TheNavbar'
import NotificationContainer from '@/components/NotificationContainer.vue'
import '@progress/kendo-theme-default/dist/all.css'


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
      titleTemplate: chunk => (chunk ? `${chunk} - Hancock UI` : 'Hancock UI'),

      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'og:title', content: 'store.state.pageTitle' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: window.location.href },
        { name: 'og:image', content: 'store.state.pageImage' },
        { name: 'og:description', content: 'store.state.pageDescription' },
        { name: 'og:locale', content: 'store.state.locale' },
        { name: 'author', content: window.location.href },
        { name: 'publisher', content: window.location.href },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'store.state.twitter' },
        { name: 'twitter:creator', content: 'store.state.twitter' },
        { name: 'twitter:title', content: 'store.state.pageTitle' },
        { name: 'twitter:description', content: 'store.state.pageDescription' },
        { name: 'twitter:image', content: 'store.state.pageImage' },
      ],
    }
  },
  components: {
    DefaultLayout,
    TheFooter,
    TheNavbar,
    NotificationContainer,
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

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
.theme-light,
:root {
  --theme-text: #171717;
  --theme-text-subtle: #505050;
  --theme-text-invert: #fff;
  --theme-text-glow-high-contrast: #171717;
  --theme-box-shadow-light: rgba(0, 0, 0, 0.11);
  --theme-box-shadow-medium: rgba(0, 0, 0, 0.13);
  --theme-box-shadow-heavy: rgba(0, 0, 0, 0.18);
  --theme-box-shadow-extra-heavy: rgba(0, 0, 0, 0.22);
  --theme-overlay: rgba(0, 0, 0, 0.7);
  --theme-overlay-invert: #fff;
  --theme-body-background: #fff;
  --theme-body-background-medium: #f2f2f2;
  --theme-alternate-background: #171717;
  --theme-alternate-background-medium: #2f2f2f;
  --theme-border: #e6e6e6;
  --theme-table-header: #e6e6e6;
  --theme-table-row-header: #fafafa;
  --theme-table-border-dark: #d2d2d2;
  --theme-hover-base: #2f2f2f;
  --theme-hover-invert: #fafafa;
  --theme-border-white-high-contrast: rgba(255, 255, 255, 0);
  --theme-border-yellow-high-contrast: rgba(0, 0, 0, 0);
  --theme-code-header: #e6e6e6;
  --theme-code-block: #f2f2f2;
  --theme-inline-code: #e6e6e6;
  --theme-code-highlight-background: #fff4ce;
  --theme-visited: #624991;
  --theme-score-low-off: rgba(168, 0, 0, 0.3);
  --theme-score-low: #b62626;
  --theme-score-medium-off: rgba(255, 187, 0, 0.3);
  --theme-score-medium: #ffb900;
  --theme-score-high-off: rgba(72, 157, 72, 0.3);
  --theme-score-high: #2a8b2a;
  --theme-hyperlink: #0065b3;
  --theme-primary-base: #0078d4;
  --theme-primary-background: #d7eaf8;
  --theme-primary-background-glow-high-contrast: #d7eaf8;
  --theme-primary-dark: #004173;
  --theme-primary-hover: #0065b3;
  --theme-primary-active: #00579a;
  --theme-primary-box-shadow: rgba(0, 101, 179, 0.3);
  --theme-primary-invert: #fff;
  --theme-secondary-base: #a2a2a2;
  --theme-secondary-background: #e6e6e6;
  --theme-secondary-background-glow-high-contrast: #e6e6e6;
  --theme-secondary-dark: #2f2f2f;
  --theme-secondary-hover: #d2d2d2;
  --theme-secondary-active: #d2d2d2;
  --theme-secondary-box-shadow: rgba(0, 0, 0, 0.3);
  --theme-secondary-invert: #000;
  --theme-tertiary-base: #243a5e;
  --theme-tertiary-background: #061329;
  --theme-tertiary-background-glow-high-contrast: #061329;
  --theme-tertiary-dark: #a4b2c9;
  --theme-tertiary-hover: #14294c;
  --theme-tertiary-active: #70819f;
  --theme-tertiary-box-shadow: rgba(38, 23, 63, 0.3);
  --theme-tertiary-invert: #fff;
  --theme-success-base: #107c10;
  --theme-success-background: #dff6dd;
  --theme-success-background-glow-high-contrast: #dff6dd;
  --theme-success-dark: #054b16;
  --theme-success-hover: #0b6413;
  --theme-success-active: #054b16;
  --theme-success-box-shadow: rgba(72, 157, 72, 0.3);
  --theme-success-invert: #fff;
  --theme-info-base: #8661c5;
  --theme-info-background: #efd9fd;
  --theme-info-background-glow-high-contrast: #efd9fd;
  --theme-info-dark: #3b2e58;
  --theme-info-hover: #8661c5;
  --theme-info-active: #624991;
  --theme-info-box-shadow: rgba(32, 24, 67, 0.3);
  --theme-info-invert: #fff;
  --theme-warning-base: #ffb900;
  --theme-warning-background: #fff4ce;
  --theme-warning-background-glow-high-contrast: #fff4ce;
  --theme-warning-dark: #6a4b16;
  --theme-warning-hover: #d19501;
  --theme-warning-active: #966802;
  --theme-warning-box-shadow: rgba(255, 187, 0, 0.3);
  --theme-warning-invert: #000;
  --theme-danger-base: #a80000;
  --theme-danger-background: #fde7e9;
  --theme-danger-background-glow-high-contrast: #fde7e9;
  --theme-danger-dark: #470001;
  --theme-danger-hover: #870000;
  --theme-danger-active: #630001;
  --theme-danger-box-shadow: rgba(168, 0, 0, 0.3);
  --theme-danger-invert: #fff;
  --theme-facepile-red: #a80000;
  --theme-facepile-teal: #328e9f;
  --theme-facepile-blue: #0078d4;
}

kbd,
pre,
samp {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace !important;
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
}

kbd,
pre > code mark {
  display: inline-block;
  color: #171717;
  color: var(--theme-text);
}
kbd {
  padding: 0.25rem;
  font-size: 0.75rem;
  line-height: 10px;
  vertical-align: middle;
  background-color: #ffffff;
  background-color: var(--theme-body-background);
  border: 1px solid #a2a2a2;
  border: solid 1px var(--theme-secondary-base);
  border-bottom-color: #a2a2a2;
  border-bottom-color: var(--theme-secondary-base);
  border-radius: 4px;
  box-shadow: inset 0 -1px 0 #000000;
  box-shadow: inset 0 -1px 0 var(--theme-secondary-box-shadow);
}
</style>
