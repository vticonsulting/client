<template>
  <main class="flex-1">
    <section class="p-8">
      <nav class="flex items-center p-8 space-x-4">Sub nav</nav>
      <RouterView :user="user" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import UserService from '@/services/UserService'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    }
  },
  created() {
    UserService.getUser(this.id)
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.$router.push({
            name: '404-resource',
            params: { resource: 'user' },
          })
        } else {
          this.$router.push({ name: 'network-error' })
        }
      })
  },
})
</script>
