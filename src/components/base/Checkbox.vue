<script>
import UniqueID from '@/composables/useUniqueID.js'

export default {
  props: {
    label: {
      type: String,
      default: 'Comments',
    },
    help: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const uuid = UniqueID().getID()
    return { uuid }
  }
}
</script>

<template>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input
        :id="`checkbox-${uuid}`"
        @change="$emit('input', $event.target.checked)"
        :checked="value"
        type="checkbox"
        class="w-4 h-4 border-gray-300 rounded focus:ring-primary-500 text-primary-600"
      />
    </div>
    <div v-if="label" class="ml-3 text-sm">
      <label :for="`checkbox-${uuid}`" class="font-medium text-gray-700">{{ label }}</label>
      <p v-if="help" class="text-gray-500">{{ help }}</p>
    </div>
  </div>
</template>
