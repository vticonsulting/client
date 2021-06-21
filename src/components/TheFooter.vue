<template>
  <footer
    class="w-full h-20 bg-white border-t dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="flex items-center justify-between w-full h-full px-8 mx-auto">
      <div class="flex items-center">
        <span class="mr-2 text-sm leading-none whitespace-nowrap">
          © {{ new Date().getFullYear() }}
        </span>
        <a
          v-if="false"
          href="https://vticonsulting.com"
          target="_blank"
          rel="noopener"
          class="flex items-center space-x-1 whitespace-nowrap"
        >
          <BaseIcon is-medium name="vti" />
          <span class="text-sm">VTi Consulting (Victor Tolbert)</span>
          <!-- <IconPromiseServes class="h-4" /> -->
        </a>

        <KeyboardShortcut />

        <button type="button" @click="toggleDark">
          <BaseIconOutlined name="moon" v-if="isDark" />
          <BaseIconOutlined name="sun" v-else />
        </button>
        <DarkModeSwitch v-if="false" />
        <LanguageToggle v-if="true" />
      </div>

      <div class="flex">
        <!-- <LangSwitcher class="p-2" /> -->
        <!-- <ColorSwitcher class="p-2 pr-0" /> -->
        <pre class="text-xs font-bold tracking-widest uppercase">
              {{ location.host }}
        </pre>
      </div>
    </div>
  </footer>
</template>

<script>
import {defineComponent, watch, computed} from '@vue/composition-api'

import {
  useStorage,
  useBrowserLocation,
  usePreferredDark,
  useToggle,
} from '@vueuse/core'

export default defineComponent({
  setup() {
    const colorSchema = useStorage('color-schema', 'auto')
    const location = useBrowserLocation()
    const preferredDark = usePreferredDark()
    const isDark = computed({
      get() {
        return colorSchema.value === 'auto'
          ? preferredDark.value
          : colorSchema.value === 'dark'
      },
      set(v) {
        if (v === preferredDark.value) colorSchema.value = 'auto'
        else colorSchema.value = v ? 'dark' : 'light'
      },
    })
    const toggleDark = useToggle(isDark)

    watch(
      isDark,
      v =>
        typeof document !== 'undefined' &&
        document.documentElement.classList.toggle('dark', v),
      {immediate: true},
    )

    return {
      location,
      toggleDark,
      isDark,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
})
</script>
