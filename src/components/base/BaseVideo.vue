<template>
  <figure class="aspect-w-16 aspect-h-9">
    <iframe
      :src="src"
      title="Featured Video"
      width="560"
      height="315"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      allowtransparency="true"
    />
    <figcaption
      x-text="image.caption"
      class="text-xs pointer-events-none text-primary-50"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'dFoLwGNWl98',
    },
    caption: {
      type: String,
      default: 'Ryan Singer - Design: Case Study From Laracon US 2017',
    },
  },
  data() {
    return {
      video_ids: [
        'dFoLwGNWl98',
        // 'crSUWtRYw-M'
        // MF0jFKvS4SI
        // 3u_vIdnJYLc
      ],
    }
  },
  computed: {
    src() {
      return `https://www.youtube.com/embed/${this.id}`
      // return 'https://fast.wistia.net/embed/iframe/g630i8kd4b'
    },
  },
}
</script>
