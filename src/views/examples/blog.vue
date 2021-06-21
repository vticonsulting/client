<template>
  <BlogLayout>
    <template v-for="section in layout" v-slot:[section.name]>
      <span :key="`blog-section-${section.name}`">{{ section.content }}</span>
    </template>
  </BlogLayout>
</template>

<script>
export default {
  data() {
    return {
      layout: [
        {name: 'header', content: 'My Blog Title'},
        {name: 'body', content: 'Main body content'},
        {name: 'footer', content: 'Footer contet'},
      ],
    }
  },
}
</script>
