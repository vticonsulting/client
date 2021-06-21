<template>
  <main class="flex-1">
    <div v-if="person">
      <BasePageHeading>
        {{ person.firstName }} {{ person.lastName }}

        <template #actions>
          <RouterLink
            class="hover:underline text-primary-500"
            :to="{name: 'person'}"
          >
            {{ $t('details') }}
          </RouterLink>

          <RouterLink
            class="hover:underline text-primary-500"
            :to="{name: 'person-register'}"
          >
            {{ $t('register') }}
          </RouterLink>

          <RouterLink
            class="hover:underline text-primary-500"
            :to="{name: 'person-edit'}"
          >
            {{ $t('edit') }}
          </RouterLink>
        </template>
      </BasePageHeading>

      <nav v-if="false" class="flex items-center p-8 space-x-4">
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'person'}"
        >
          {{ $t('details') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'person-register'}"
        >
          {{ $t('register') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'person-edit'}"
        >
          {{ $t('edit') }}
        </RouterLink>
      </nav>

      <section>
        <RouterView :person="person" />
      </section>
    </div>
  </main>
</template>

<script>
import PersonService from '@/services/PersonService'

export default {
  props: ['id'],
  data() {
    return {
      person: null,
    }
  },
  created() {
    PersonService.getPerson(this.id)
      .then(response => {
        this.person = response.data
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404-resource',
            params: {resource: 'person'},
          })
        } else {
          this.$router.push({name: 'network-error'})
        }
      })
  },
}
</script>
