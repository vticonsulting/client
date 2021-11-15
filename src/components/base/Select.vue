<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Make a selection'
    }
  },
}
</script>

<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <select
      class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      :value="modelValue"
      @change="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
      <option :value="undefined">
        <slot>{{ placeholder }}</slot>
      </option>
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >{{ option }}</option>
    </select>
  </div>
</template>
