<template>
  <mapbox
    access-token="pk.eyJ1IjoidnRvbGJlcnQiLCJhIjoiY2trZHBvdHZwMDF0MjJwcG90OHZ4ZHJ1dSJ9.zD5THnNnuvrJY-EnbU43mw"
    :map-options="{
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-84.32861, 33.69974],
      zoom: 11,
    }"
  />
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  name: 'BaseMap',
  components: {
    Mapbox,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
