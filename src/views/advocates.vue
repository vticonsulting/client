<template>
  <main class="flex-1 w-full bg-gray-100">
    <BasePageHeading>{{ $t('advocates') }}</BasePageHeading>

    <BaseBreadcrumb class="py-2" />

    <section class="max-h-full">
      <header v-if="false" class="mt-8">
        <OField grouped group-multiline>
          <div v-for="(column, index) in columnsVisible" :key="index">
            <OCheckbox v-model="column.display">{{ column.title }}</OCheckbox>
          </div>
        </OField>
      </header>

      <article class="p-8 bg-white">
        <div class="flex flex-col mt-3 sm:flex-row">
          <div class="flex">
            <div class="relative">
              <select
                v-model="perPage"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="10">10</option>
                <option :value="25">25</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>
            <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              >
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>
            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <OTable
          :data="data || []"
          ref="table"
          detailed
          icon-pack="fas"
          detail-key="id"
          :show-detail-icon="showDetailIcon"
          paginated
          :per-page="perPage"
          pagination-simple
          :current-page.sync="currentPage"
        >
          <OTableColumn
            field="firstName"
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
            field="lastName"
            :visible="columnsVisible['lastName'].display"
            :label="columnsVisible['lastName'].title"
            width="300"
            sortable
            v-slot="props"
          >
            <template v-if="showDetailIcon">{{ props.row.lastName }}</template>
            <template v-else>
              <a @click="toggle(props.row)">{{ props.row.lastName }}</a>
            </template>
          </OTableColumn>

          <OTableColumn
            v-if="false"
            field="sold"
            :visible="columnsVisible['sold'].display"
            :label="columnsVisible['sold'].title"
            sortable
            position="right"
            v-slot="props"
          >{{ props.row.sold }}</OTableColumn>

          <OTableColumn
            v-if="false"
            field="available"
            :visible="columnsVisible['available'].display"
            :label="columnsVisible['available'].title"
            sortable
            position="right"
            v-slot="props"
          >{{ props.row.available }}</OTableColumn>

          <OTableColumn
            v-if="false"
            :visible="columnsVisible['cleared'].display"
            :label="columnsVisible['cleared'].title"
            position="right"
            v-slot="props"
          >
            <span>{{ Math.round((props.row.sold / props.row.available) * 100) }}%</span>
          </OTableColumn>

          <template slot="detail" slot-scope="props">
            <pre>{{ props.row.items }}</pre>
          </template>

          <template v-slot:empty>
            <BaseBlankState>{{ $t('no_matching_results') }}</BaseBlankState>
          </template>
        </OTable>
      </article>
    </section>
  </main>
</template>

<script>
import { watchEffect } from '@vue/composition-api'
import UserService from '@/services/UserService'

export default {
  data() {
    return {
      data: null,
      currentPage: 1,
      perPage: 10,
      products: [
        {
          name: 'Board Games',
          sold: 131,
          available: 301,
          items: [
            {
              name: 'Monopoly',
              sold: 57,
              available: 100,
            },
            {
              name: 'Scrabble',
              sold: 23,
              available: 84,
            },
            {
              name: 'Chess',
              sold: 37,
              available: 61,
            },
            {
              name: 'Battleships',
              sold: 14,
              available: 56,
            },
          ],
        },
        {
          name: 'Jigsaws & Puzzles',
          sold: 88,
          available: 167,
          items: [
            {
              name: 'World Map',
              sold: 31,
              available: 38,
            },
            {
              name: 'London',
              sold: 23,
              available: 29,
            },
            {
              name: 'Sharks',
              sold: 20,
              available: 44,
            },
            {
              name: 'Disney',
              sold: 14,
              available: 56,
            },
          ],
        },
        {
          name: 'Books',
          sold: 434,
          available: 721,
          items: [
            {
              name: 'Hamlet',
              sold: 101,
              available: 187,
            },
            {
              name: 'The Lord Of The Rings',
              sold: 85,
              available: 156,
            },
            {
              name: 'To Kill a Mockingbird',
              sold: 78,
              available: 131,
            },
            {
              name: 'Catch-22',
              sold: 73,
              available: 98,
            },
            {
              name: 'Frankenstein',
              sold: 51,
              available: 81,
            },
            {
              name: "Alice's Adventures In Wonderland",
              sold: 46,
              available: 68,
            },
          ],
        },
      ],
      columnsVisible: {
        firstName: { title: 'First Name', display: true },
        lastName: { title: 'Last Name', display: true },
        sold: { title: 'Stock Sold', display: true },
        available: { title: 'Stock Available', display: true },
        cleared: { title: 'Stock Cleared', display: true },
      },
      showDetailIcon: true,
    }
  },
  created() {
    watchEffect(() => {
      this.data = null
      UserService.getUsers(this.perPage, this.page)
        .then(response => {
          this.data = response.data
          this.totalUsers = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'network-error' })
        })
    })
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
  },
}
</script>
