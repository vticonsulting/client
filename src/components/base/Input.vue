<script>
import UniqueID from '@/composables/useUniqueID.js'

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup() {
    const uuid = UniqueID().getID()
    return {
      uuid
    }
  }
}
</script>

<template>
  <div>
    <label
      :for="uuid"
      v-if="label"
      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="block w-full max-w-lg bg-white border-gray-300 rounded-md shadow-sm dark:bg-black focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm"
      :id="uuid"
      :aria-describedby="error ? `-error` : null"
      :aria-invalid="error ? true : null"
    />
    <p
      v-if="error"
      class="mt-2 text-sm text-red-600"
      :id="`-error`"
      aria-live="assertive"
    >{{ error }}</p>
  </div>
</template>
