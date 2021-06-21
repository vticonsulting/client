<template>
  <div class="mx-16 my-8 prose">
    <template v-if="$fetchState.pending">
      <ContentPlaceholders>
        <ContentPlaceholdersHeading />
        <ContentPlaceholdersText :lines="10" />
      </ContentPlaceholders>
    </template>

    <template v-else-if="$fetchState.error">
      <h1>Message #{{ $route.params.id }} not found</h1>
    </template>

    <template v-else>
      <h2>
        <RouterLink :to="{name: 'messages'}"> &larr; Inbox </RouterLink>
      </h2>

      <h1>{{ message.subject }}</h1>

      <span class="text-gray-700">
        <span class="block text-xs tracking-wider uppercase">From</span>
        <b>{{ message.sender }}</b>
      </span>

      <div v-html="message.body" />
    </template>
  </div>
</template>

<script>
import {defineComponent, ref} from '@vue/composition-api'
import {strip} from '@/helpers'

export default defineComponent({
  name: 'MessagePage',

  setup() {
    const message = ref()

    const truncate = html => {
      return `${strip(html).substr(0, 50)}...`
    }

    return {message, truncate}
  },

  data() {
    return {
      message: null,
    }
  },

  async mounted() {
    this.message = await this.$axios.$get(`messages/${params.value.id}`)
  },
})
</script>
