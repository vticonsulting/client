<template>
  <div>
    <table class="w-full">
      <tbody>
        <MessageItem
          v-for="message in filteredMessages"
          :key="message.id"
          :message="message"
        />
      </tbody>
    </table>

    <pre>{{ checked }}</pre>
  </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api'
import useMessages from '@/composables/useMessages'

export default defineComponent({
  name: 'MessageList',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const {
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      removeMessage,
      filteredMessages,
      removeMessages,
      markAllRead,
    } = useMessages()

    return {
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      removeMessage,
      filteredMessages,
      removeMessages,
      markAllRead,
    }
  },
})
</script>
