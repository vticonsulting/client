<template>
  <RouterLink :to="{ name: 'person', params: { id: person.id } }">
    <div class="person-card">
      <span>{{ person.firstName }}</span>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
}
</script>
