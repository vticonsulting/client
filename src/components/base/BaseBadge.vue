<template>
  <span
    :class="[
      colorClasses,
      'inline-flex sm:w-32 lg:w-full max-w-32 justify-center items-center px-2.5 py-0.5 rounded-md font-medium leading-5',
    ]"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Label',
  props: {
    color: {
      type: String,
      default: 'gray',
    },
  },
  computed: {
    colorClasses() {
      return `bg-${this.color}-100 text-${this.color}-800`
    },
  },
}
</script>
