<template>
  <div class="p-0 bg-gray-100">
    <div class="min-h-screen p-6 bg-white shadow">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoHeaderLayout',
}
</script>
