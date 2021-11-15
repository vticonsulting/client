<template>
  <main class="flex-1">
    <div v-if="user">
      <BasePageHeading>
        {{ user.firstName }} {{ user.lastName }}
        <template #actions>
          <RouterLink
            class="hover:underline text-primary-500"
            :to="{ name: 'user' }"
          >{{ $t('details') }}</RouterLink>

          <RouterLink
            class="hover:underline text-primary-500"
            :to="{ name: 'user-register' }"
          >{{ $t('register') }}</RouterLink>

          <RouterLink
            class="hover:underline text-primary-500"
            :to="{ name: 'user-edit' }"
          >{{ $t('edit') }}</RouterLink>
        </template>
      </BasePageHeading>

      <nav v-if="false" class="flex items-center p-8 space-x-4">
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{ name: 'user' }"
        >{{ $t('details') }}</RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{ name: 'user-register' }"
        >{{ $t('register') }}</RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{ name: 'user-edit' }"
        >{{ $t('edit') }}</RouterLink>
      </nav>

      <section>
        <RouterView :user="user" />
      </section>
    </div>
  </main>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  props: ['id'],
  data() {
    return {
      user: null,
    }
  },
  created() {
    UserService.getUser(this.id)
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404-resource',
            params: { resource: 'user' },
          })
        } else {
          this.$router.push({ name: 'network-error' })
        }
      })
  },
}
</script>
