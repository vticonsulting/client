<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div>
    <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      :class="{
        'horizontal': !vertical
      }"
    >
      <BaseRadio
        :label="option.label"
        :value="option.value"
        v-bind="$attrs"
        @change="$emit('input', $event.target.value)"
      />
    </component>
  </div>
</template>
