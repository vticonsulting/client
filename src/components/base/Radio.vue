<script>
import UniqueID from '@/composables/useUniqueID.js'

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  setup() {
    const uuid = UniqueID().getID()
    return { uuid }
  }
}
</script>

<template>
  <div class="flex items-center">
    <input
      :checked="value"
      v-bind="$attrs"
      :id="`radio-${uuid}`"
      @change="$emit('input', $event.target.value)"
      type="radio"
      class="w-4 h-4 border-gray-300 focus:ring-primary-500 text-primary-600"
    />
    <label
      v-if="label"
      :for="`radio-${uuid}`"
      class="block ml-3 font-medium text-gray-700"
    >{{ label }}</label>
  </div>
</template>
