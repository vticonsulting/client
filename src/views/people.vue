<template>
  <main class="flex-1">
    <BasePageHeading>
      {{ $t('people') }}
    </BasePageHeading>
    <section class="p-8">
      <div class="people">
        <PersonCard
          v-for="person in people"
          :key="person.id"
          :person="person"
        />

        <div class="flex items-center justify-center">
          <RouterLink
            id="page-prev"
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
            :to="{name: 'people', query: {page: page - 1}}"
            rel="prev"
            v-if="page != 1"
          >
            &#60; {{ $t('previous') }}
          </RouterLink>

          <RouterLink
            id="page-next"
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
            :to="{name: 'people', query: {page: page + 1}}"
            rel="next"
            v-if="hasNextPage"
          >
            {{ $t('next') }} &#62;
          </RouterLink>
        </div>
      </div>
    </section>
    <section v-if="false" class="p-8">
      <v-client-table
        :data="people || []"
        :columns="columns"
        :options="options"
      />
    </section>

    <section class="p-8">
      <OTable
        :data="people || []"
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
          <template v-if="showDetailIcon">
            {{ props.row.firstName }}
          </template>
          <template v-else>
            <a @click="toggle(props.row)">
              {{ props.row.firstName }}
            </a>
          </template>
        </OTableColumn>

        <OTableColumn
          field="sold"
          :visible="columnsVisible['lastName'].display"
          :label="columnsVisible['lastName'].title"
          sortable
          v-slot="props"
        >
          {{ props.row.lastName }}
        </OTableColumn>

        <OTableColumn
          field="available"
          :visible="columnsVisible['email'].display"
          :label="columnsVisible['email'].title"
          sortable
          v-slot="props"
        >
          {{ props.row.email }}
        </OTableColumn>

        <template slot="detail" slot-scope="props">
          <div class="p-8">
            {{ props.row.bio }}
          </div>
        </template>
      </OTable>
    </section>
  </main>
</template>

<script>
import {watchEffect} from '@vue/composition-api'
import PersonService from '@/services/PersonService'
import PersonCard from '@/components/PersonCard'

export default {
  name: 'PeopleView',
  props: ['page'],
  components: {PersonCard},
  data() {
    return {
      people: null,
      totalPeople: 0,
      perPage: 10,
      columnsVisible: {
        firstName: {title: 'First Name', display: true},
        lastName: {title: 'Last Name', display: true},
        title: {title: 'Title', display: true},
        email: {title: 'Email Address', display: true},
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
      this.people = null
      PersonService.getPeople(this.perPage, this.page)
        .then(response => {
          this.people = response.data
          this.totalPeople = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({name: 'network-error'})
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalPeople / this.perPage)

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
