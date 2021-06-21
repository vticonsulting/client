<template>
  <div>
    <slot name="header" :logo="logoImage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImage: '/images/logo.png',
    }
  },
}
</script>
