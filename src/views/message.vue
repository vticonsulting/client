<template>
  <article class="container mx-auto max-w-7xl">
    <div class="message-header">
      <span class="eyebrow">
        @{{ message.sender }} on {{ message.date | date }}
      </span>
    </div>

    <div class="prose">
      <h2 class="title">{{ message.subject }}</h2>

      <div v-html="message.body" />
    </div>

    <ul class="list-group">
      <li v-for="(tag, index) in message.tags" :key="index" class="list-item">
        <b>{{ tag }}</b>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
}
</script>
