<template>
  <main class="flex-1">
    <div>
      <BasePageHeading>{{ event.title }}</BasePageHeading>

      <nav class="flex items-center p-8 space-x-4">
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'events-id-details'}"
        >
          {{ t('details') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'events-id-register'}"
        >
          {{ t('register') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'events-id-edit'}"
        >
          {{ t('edit') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'events-id-create'}"
        >
          {{ t('create') }}
        </RouterLink>
      </nav>

      <section class="p-8">
        <RouterView :event="event" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import EventService from '@/services/EventService'
import { EventItem } from '@/types'

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
  data() {
    return {
      event: {} as EventItem,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          this.$router.push({
            name: '404-resource',
            params: { resource: 'event' },
          })
        }
        else {
          this.$router.push({ name: 'network-error' })
        }
      })
  },
})

// import { mapState } from 'vuex'
// import { useI18n } from 'vue-i18n'

// export default {
//   setup() {
//     const { t } = useI18n()
//     return {
//       t,
//     }
//   },
//   async fetch({ store, error, params }) {
//     try {
//       await store.dispatch('event/fetchEvent', params.id)
//     }
//     catch (e) {
//       error({
//         statusCode: 503,
//         message: `Unable to fetch event #${params.id}`,
//       })
//     }
//   },
//   computed: mapState({
//     event: state => state.event.event,
//   }),
// }
</script>
