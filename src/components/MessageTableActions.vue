<template>
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

      <button title="Delete">
        <BaseIcon name="delete" />
      </button>

      <button type="button">
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
</template>

<script>
import {defineComponent} from '@vue/composition-api'
import useMessages from '@/composables/useMessages'

export default defineComponent({
  setup() {
    const {
      messages,
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
    } = useMessages()

    return {
      messages,
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
    }
  },
})
</script>
