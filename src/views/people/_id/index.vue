<template>
  <main class="flex-1">
    <section class="p-8">
      <nav class="flex items-center p-8 space-x-4">Sub nav</nav>
      <RouterView :person="person" />
    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api'
import PersonService from '@/services/PersonService'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      person: {},
    }
  },
  created() {
    PersonService.getPerson(this.id)
      .then(response => {
        this.person = response.data
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.$router.push({
            name: '404-resource',
            params: {resource: 'person'},
          })
        } else {
          this.$router.push({name: 'network-error'})
        }
      })
  },
})
</script>
