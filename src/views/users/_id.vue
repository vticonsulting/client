<template>
  <main class="flex-1">
    <BasePageHeading>
      {{ fullname }}
      <img class="w-16 h-16 border-2 rounded-full shadow" :src="user.avatarUrl" />

      <template #actions>
        <nav class="flex items-center space-x-4">
          <OButton
            tag="router-link"
            :to="{ name: 'user-id-register', params: { id: id } }"
          >{{ $t('register') }}</OButton>

          <OButton
            tag="router-link"
            variant="primary"
            :to="{ name: 'user-id-edit', params: { id: id } }"
          >{{ $t('edit') }}</OButton>
        </nav>
      </template>
    </BasePageHeading>

    <section class="p-8 bg-secondary-100">
      <RouterView :user="user" />
    </section>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import UserService from '@/services/UserService'

export default defineComponent({
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  metaInfo() {
    return {
      title: this.user.fullname,
    }
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
  computed: {
    fullname() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
})
</script>
