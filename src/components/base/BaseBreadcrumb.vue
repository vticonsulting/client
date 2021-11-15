<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open() {
      this.isOpen = true
      // this.$nextTick(() => {
      //   this.$refs.search.focus()
      // })
    },
    close() {
      this.isOpen = false
      // this.$nextTick(() => {
      //   this.$refs.input.focus()
      // })
    },
    cancel() {
      this.close()
    },
  },
}
</script>

<template>
  <header class="flex items-center justify-between px-4 mx-auto lg:px-8">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-4">
        <li>
          <div>
            <RouterLink :to="{ name: 'home' }">
              <BaseIconOutlined name="home" />
              <span class="sr-only">{{ $t('home') }}</span>
            </RouterLink>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="flex-shrink-0 w-5 h-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="ml-4 text-sm font-medium"
            >{{ $t('dashboard') }}</RouterLink>
          </div>
        </li>
      </ol>
    </nav>

    <QuickLinksButton v-if="false" />
  </header>
</template>
