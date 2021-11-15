<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>{{ $t('users') }}</BasePageHeading>

    <section class="p-8">
      <div v-if="false">
        <OSelect v-model="perPage">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
          <option value="250">250 per page</option>
          <option value="500">500 per page</option>
        </OSelect>
      </div>

      <div>
        <BaseInput type="text" label="Filter by Name" v-model="filters.name.value" />
      </div>
    </section>

    <section class="grid grid-cols-12 gap-4 p-4 mx-4 bg-white">
      <article class="col-span-6">
        <v-table
          class="table-hover"
          :filters="filters"
          :data="users"
          selectionMode="multiple"
          selectedClass="bg-primary-100"
          @selectionChanged="selectedRows = $event"
        >
          <thead slot="head">
            <tr class="border-t border-gray-200">
              <v-th
                sortKey="name"
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >Name</v-th>
            </tr>
          </thead>
          <tbody slot="body" slot-scope="{displayData}" class="bg-white divide-y divide-gray-100">
            <v-tr v-for="row in displayData" :key="row.guid" :row="row" class="hover:bg-gray-100">
              <td class="px-6 py-1">{{ row.name }}</td>
            </v-tr>
          </tbody>
        </v-table>
      </article>

      <article class="col-span-6">
        <strong>Selected:</strong>
        <div v-if="selectedRows.length === 0" class="text-muted">No Rows Selected</div>
        <ul>
          <li v-for="selected in selectedRows" :key="selected">{{ selected.name }}</li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script>
import { defineComponent, watchEffect } from '@vue/composition-api'
import UserCard from '@/components/UserCard.vue'
import UserService from '@/services/UserService'

export default defineComponent({
  name: 'UserList',
  metaInfo() {
    return {
      title: this.$t('users'),
    }
  },
  components: {
    UserCard,
  },
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      users: [],
      filters: {
        name: { value: '', keys: ['name'] }
      },
      selectedRows: [],
      totalUsers: 0,
      perPage: 250,
      currentPage: 1,
      checkedRows: [],
      selected: null,
    }
  },
  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.totalUsers / 2)

      return this.page < totalPages
    },
  },
  created() {
    watchEffect(() => {
      this.users = []
      UserService.getUsers()
        .then(response => {
          this.users = response.data
          this.totalUsers = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'network-error' })
        })
    })
  },
})
</script>
