<template>
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      v-if="name == 'menu'"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
    <path
      v-if="name == 'x'"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'x',
    },
  },
}
</script>
