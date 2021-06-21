<template>
  <div>
    <ul>
      <li v-for="dashboard in dashboards" :key="dashboard">
        <RouterLink :to="{name: dashboard}">
          {{ formatTitle(dashboard.replace(/-/gi, ' ')) }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
import {ref, defineComponent} from '@vue/composition-api'
import {toTitleCase} from '@/helpers'

export default defineComponent({
  name: 'DashboardsView',
  setup() {
    const dashboards = ref([
      'executive',
      'staff',
      'certified-advocate',
      'advocate-in-training',
    ])

    const formatTitle = toTitleCase

    return {
      dashboards,
      formatTitle,
    }
  },
})
</script>
