<template>
  <div>
    <div
      class="flex items-center h-10 pl-6 space-x-2 text-2xl text-gray-500 border-b"
    >
      <input
        class="w-5 h-5 text-gray-500 form-checkbox"
        type="checkbox"
        @click="checkAll"
        v-model="isCheckAll"
      />

      <button
        v-if="[checked.length ? 'hidden' : 'flex']"
        type="button"
        title="Refresh"
      >
        <BaseIcon name="refresh" />
      </button>

      <div v-show="checked.length" class="flex items-center space-x-2">
        <button type="button">
          <BaseIcon name="package-down" />
        </button>

        <button type="button">
          <BaseIcon name="alert-octagon" />
        </button>

        <button @click="removeMessages" title="Delete">
          <BaseIcon name="delete" />
        </button>

        <button @click="markAllRead" type="button">
          <BaseIcon name="email-mark-as-unread" />
        </button>

        <button type="button">
          <BaseIcon name="clock" />
        </button>
      </div>

      <button type="button">
        <BaseIcon name="dots-vertical" />
      </button>
    </div>

    <table class="w-full">
      <tbody>
        <tr
          v-for="(message, index) in filteredMessages"
          :key="message.id"
          class="text-gray-500 border-b cursor-pointer group hover:bg-gray-100 hover:shadow"
        >
          <td class="py-2 pl-6 whitespace-no-wrap align-top">
            <input
              class="w-5 h-5 text-gray-500 form-checkbox"
              type="checkbox"
              :value="message"
              v-model="checked"
              @change="updateCheckAll"
            />

            <RouterLink
              class="pl-2"
              :to="{name: 'messages', params: {id: message.id}}"
            >
              {{ message.sender }}
            </RouterLink>
          </td>

          <td class="py-2 pl-6 align-top">
            <span
              class="inline-flex items-center px-2 py-0.5 rounded mr-1 capitalize text-xs font-medium leading-4 bg-gray-100 text-gray-800"
              :key="tag"
              :class="tag"
              v-for="tag in message.tags"
            >
              {{ tag }}
            </span>
            <RouterLink
              class="font-bold"
              :to="{name: 'messages', params: {id: message.id}}"
            >
              {{ message.subject }}
            </RouterLink>
            <RouterLink
              class="hidden md:inline-block"
              :to="{name: 'messages', params: {id: message.id}}"
            >
              {{ truncate(message.body) }}
            </RouterLink>
          </td>

          <td class="py-2 text-sm text-right whitespace-no-wrap align-top">
            <RouterLink :to="{name: 'messages', params: {id: message.id}}">
              {{ formatDate(message.date) }}
            </RouterLink>
          </td>

          <td class="py-2 pl-6 whitespace-no-wrap actions">
            <button
              :aria-label="`Delete message ${index}`"
              type="button"
              @click="removeMessage(index)"
            >
              <BaseIcon name="delete" />
            </button>

            <button
              v-if="false"
              class="relative"
              @click="archive(message.id)"
              type="button"
            >
              <BaseIcon name="dots-vertical" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api'
import useMessages from '@/composables/useMessages'

export default defineComponent({
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
