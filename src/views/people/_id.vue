<template>
  <main class="flex-1">
    <BasePageHeading>
      {{ fullname }}
      <img
        class="w-16 h-16 border-2 rounded-full shadow"
        :src="person.avatarUrl"
      />

      <template #actions>
        <nav class="flex items-center space-x-4">
          <OButton
            tag="router-link"
            :to="{name: 'person-id-register', params: {id: id}}"
          >
            {{ $t('register') }}
          </OButton>

          <OButton
            tag="router-link"
            variant="primary"
            :to="{name: 'person-id-edit', params: {id: id}}"
          >
            {{ $t('edit') }}
          </OButton>
        </nav>
      </template>
    </BasePageHeading>

    <section class="p-8 bg-secondary-100">
      <RouterView :person="person" />
    </section>
  </main>
</template>

<script>
import {defineComponent} from '@vue/composition-api'
import PersonService from '@/services/PersonService'

export default defineComponent({
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  metaInfo() {
    return {
      title: this.person.fullname,
    }
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
  computed: {
    fullname() {
      return `${this.person.firstName} ${this.person.lastName}`
    },
  },
})
</script>
