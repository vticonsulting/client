<template>
  <div>
    <img
      v-bind:src="imageAttrs.src"
      v-bind:alt="imageAttrs.alt"
      v-on:click="openGallery"
      v-on:mouseover="showTooltip"
    />
    <img
      v-bind="{src: imageAttrs.src, alt: imageAttrs.alt}"
      v-on="{click: openGallery, mouseover: showTooltip}"
    />
    <img v-bind="imageAttrs" v-on="imageEvents" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageAttrs: {
        src: '/booster-logo.png',
        alt: 'Booster Logo',
      },
    }
  },
  computed: {
    imageEvents() {
      return {
        click: this.openGallery,
        mouseover: this.showTooltip,
      }
    },
  },
  methods: {
    openGallery() {},
    showTooltip() {},
  },
}
</script>
