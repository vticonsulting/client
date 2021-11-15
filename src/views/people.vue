<template>
  <main class="flex-1">
    <BasePageHeading>{{ $t('users') }}</BasePageHeading>
    <section class="p-8">
      <div class="users">
        <UserCard v-for="person in users" :key="person.id" :person="person" />

        <div class="flex items-center justify-center">
          <RouterLink
            id="page-prev"
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
            :to="{ name: 'users', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
          >&#60; {{ $t('previous') }}</RouterLink>

          <RouterLink
            id="page-next"
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
            :to="{ name: 'users', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
          >{{ $t('next') }} &#62;</RouterLink>
        </div>
      </div>
    </section>
    <section v-if="false" class="p-8">
      <v-client-table :data="users || []" :columns="columns" :options="options" />
    </section>

    <section class="p-8">
      <OTable
        :data="users || []"
        ref="table"
        detailed
        hoverable
        icon-pack="fas"
        :default-sort="['firstName', 'asc']"
        detail-key="firstName"
        :show-detail-icon="showDetailIcon"
      >
        <OTableColumn
          field="name"
          :visible="columnsVisible['firstName'].display"
          :label="columnsVisible['firstName'].title"
          width="300"
          sortable
          v-slot="props"
        >
          <template v-if="showDetailIcon">{{ props.row.firstName }}</template>
          <template v-else>
            <a @click="toggle(props.row)">{{ props.row.firstName }}</a>
          </template>
        </OTableColumn>

        <OTableColumn
          field="sold"
          :visible="columnsVisible['lastName'].display"
          :label="columnsVisible['lastName'].title"
          sortable
          v-slot="props"
        >{{ props.row.lastName }}</OTableColumn>

        <OTableColumn
          field="available"
          :visible="columnsVisible['email'].display"
          :label="columnsVisible['email'].title"
          sortable
          v-slot="props"
        >{{ props.row.email }}</OTableColumn>

        <template slot="detail" slot-scope="props">
          <div class="p-8">{{ props.row.bio }}</div>
        </template>
      </OTable>
    </section>
  </main>
</template>

<script>
import { watchEffect } from '@vue/composition-api'
import UserService from '@/services/UserService'
import UserCard from '@/components/UserCard'

export default {
  name: 'UsersView',
  props: ['page'],
  components: { UserCard },
  data() {
    return {
      users: null,
      totalUsers: 0,
      perPage: 10,
      columnsVisible: {
        firstName: { title: 'First Name', display: true },
        lastName: { title: 'Last Name', display: true },
        title: { title: 'Title', display: true },
        email: { title: 'Email Address', display: true },
      },
      showDetailIcon: true,
      columns: ['id', 'firstName', 'lastName', 'email'],
      options: {
        // see the options API
      },
    }
  },
  created() {
    watchEffect(() => {
      this.users = null
      UserService.getUsers(this.perPage, this.page)
        .then(response => {
          this.users = response.data
          this.totalUsers = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'network-error' })
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalUsers / this.perPage)

      return this.page < totalPages
    },
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
  },
}
</script>
