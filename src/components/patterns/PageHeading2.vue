<template>
  <header
    class="p-8 bg-fixed border-b border-red-700 bg-secondary-500"
    style="background-image: url('/assets/img/backgrounds/grid_dot_16.svg')"
  >
    <div class="">
      <!-- page title and page actions container -->
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <!-- page title container -->
        <div class="flex-1 min-w-0">
          <!-- Page Title -->
          <h2
            class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"
          >
            <!-- Gradient Text Effect -->
            <!--
                <span
                  class="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-primary-500"
                >
            -->
            <span class="text-white bg-opacity-50 bg-clip-text">
              <slot />
            </span>
          </h2>
        </div>

        <!-- page actions container-->
        <div class="flex mt-4 md:mt-0 md:ml-4">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {{ $t('quick_links') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api'

import {
  useMouse,
  usePreferredDark,
  useLocalStorage,
  throttleFilter,
  debounceFilter,
  useBrowserLocation,
} from '@vueuse/core'

import {useSound} from '@vueuse/sound'
import Button from '@/assets/sound/button.wav'

export default defineComponent({
  setup() {
    const location = useBrowserLocation()
    // tracks mouse position
    const {x, y} = useMouse({eventFilter: debounceFilter(100)})
    const {play} = useSound(Button)
    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    // changes will write to localStorage with a throttled 1s
    const storage = useLocalStorage(
      'my-key',
      {foo: 'bar'},
      {eventFilter: throttleFilter(1000)},
    )

    return {
      x,
      y,
      isDark,
      store,
      storage,
      play,
      location,
    }
  },
})
</script>
