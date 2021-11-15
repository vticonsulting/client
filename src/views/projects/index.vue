<script>
import { categories, products } from '@/__mocks__'
import { process } from '@progress/kendo-data-query'
import { Grid } from '@progress/kendo-vue-grid'
import { DropDownList } from '@progress/kendo-vue-dropdowns'
import { Window } from '@progress/kendo-vue-dialogs'
import '@progress/kendo-theme-default/dist/all.css'

const tabs = [
  { name: 'Active', href: '#', current: true, state: 'success' },
  { name: 'Call Queue', href: '#', current: false, state: 'warning' },
  { name: 'Schedule', href: '#', current: false, state: 'success' },
  { name: 'Complete', href: '#', current: false, state: 'success' },
  { name: 'Pending', href: '#', current: false, state: 'success' },
  { name: 'Billed', href: '#', current: false, state: 'neutral' },
]

export default {
  components: {
    DropDownList,
    Grid,
    Window
  },
  metaInfo() {
    return {
      title: this.$t('billing'),
    }
  },
  data() {
    return {
      activeTab: 1,
      categories,
      defaultItems: { CategoryID: null, CategoryName: "Product categories" },
      dropdownlistCategory: null,
      products,
      tabs,
      users: null,
      value: 5,
      isFullwidth: false,
      isImageModalActive: false,
      modalOpen: false,
      showNotifications: false,
      showOverlay: false,
      showSidebar: false,
      events: [
        {
          title: 'event1',
          start: '2010-01-01',
        },
        {
          title: 'event2',
          start: '2010-01-05',
          end: '2010-01-07',
        },
        {
          title: 'event3',
          start: '2010-01-09T12:30:00',
          allDay: false,
        },
      ],
      isOpen: 0,
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined, // Browser locale

      pageable: true,
      sortable: true,
      skip: 0,
      take: 10,
      sort: [
        { field: "ProductName", dir: "asc" }
      ],
      filter: null,
      columns: [
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' },
        { field: 'Discontinued', cell: 'discontinuedTemplate' }
      ],
      dataResult: [],
      gridClickedRow: {},
      windowVisible: false
    }
  },
  created() {
    const dataState = {
      skip: this.skip,
      take: this.take,
      sort: this.sort,
    }
    this.dataResult = process(products, dataState)
  },
  async mounted() {
    // try {
    //   let response = await this.$axios.get('users')
    //   this.users = response.data
    // } catch (err) {
    //   console.log(err)
    // }
  },
  computed: {
    participantsTitle() {
      return this.$t('participants')
    },
    coursesTitle() {
      return this.$t('courses')
    },
    collapses() {
      return [
        {
          title: `${this.$t('question')} 1`,
          text: `${this.$t('answer')} 1`,
        },
        {
          title: `${this.$t('question')} 2`,
          text: `${this.$t('answer')} 2`,
        },
        {
          title: `${this.$t('question')} 3`,
          text: `${this.$t('answer')} 3`,
        },
      ]
    },
  },
  methods: {
    handleDropDownChange(e) {
      this.dropdownlistCategory = e.target.value.CategoryID
      if (e.target.value.CategoryID !== null) {
        this.filter = {
          logic: 'and',
          filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
        }
        this.skip = 0
      } else {
        this.filter = []
        this.skip = 0
      }
      let event = {
        data: {
          skip: this.skip,
          take: this.take,
          sort: this.sort,
          filter: this.filter
        }
      }
      this.dataStateChange(event)
    },
    createAppState: function(dataState) {
      this.take = dataState.take
      this.skip = dataState.skip
      this.sort = dataState.sort
    },
    dataStateChange(event) {
      this.createAppState(event.data)
      this.dataResult = process(products, {
        skip: this.skip,
        take: this.take,
        sort: this.sort,
        filter: this.filter
      })
    },
    rowClick(event) {
      this.windowVisible = true
      this.gridClickedRow = event.dataItem
    },
    closeWindow() {
      this.windowVisible = false
    }
  }
}
</script>

<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>
      {{ $t('projects') }}
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Add Project</span>
        </button>
      </template>
    </BasePageHeading>

    <!--

    <OButton>Assign Project</OButton>Add Project
    Upload
    Filters
    - Archived
    - Closed
    - EagleView
    - Geomni
    Claims
    - Pending
    - External
Add Project
Export to CSV
Bulk Assign
Accept
Date Range
Start Date
Finish Date
Search

Reset List
Escalations
Reschedules
    -->

    <section class="p-4 m-4 bg-white rounded dark:bg-black">
      <OTabs expanded>
        <OTabItem v-for="tab in tabs" :key="tab.name">
          <template slot="header">
            <div class="flex items-center space-x-4">
              <div class="absolute flex items-center justify-center flex-shrink-0">
                <span :class="`h-1.5 w-1.5 rounded-full bg-${tab.state}-500`" aria-hidden="true"></span>
              </div>
              <span>{{ tab.name }}</span>
            </div>
          </template>

          <article class="mt-4">
            <div class="mt-4">
              <DropDownList
                :data-items="categories"
                :data-item-key="'CategoryID'"
                :text-field="'CategoryName'"
                :default-item="defaultItems"
                @change="handleDropDownChange"
              />
            </div>
            <div class="mt-4">
              <Grid
                :data-items="dataResult"
                :pageable="pageable"
                :sortable="sortable"
                :sort="sort"
                :take="take"
                :skip="skip"
                :columns="columns"
                @datastatechange="dataStateChange"
                @rowclick="rowClick"
                :style="{ height: '400px' }"
              >
                <template v-slot:discontinuedTemplate="{ props }">
                  <td colspan="1">
                    <input
                      type="checkbox"
                      :checked="props.dataItem.Discontinued"
                      disabled="disabled"
                    />
                  </td>
                </template>
              </Grid>
            </div>
          </article>
        </OTabItem>
      </OTabs>
    </section>

    <div
      class="grid-cols-1 gap-4 mt-1 space-y-1 lg:mt-4 lg:space-y-0 lg:mx-4 lg:grid lg:grid-cols-12"
    ></div>

    <Window v-if="windowVisible" :title="'Product Details'" @close="closeWindow" :height="250">
      <dl style="{textAlign:left}">
        <dt>Product Name</dt>
        <dd>{{ gridClickedRow.ProductName }}</dd>
        <dt>Product ID</dt>
        <dd>{{ gridClickedRow.ProductID }}</dd>
        <dt>Quantity per Unit</dt>
        <dd>{{ gridClickedRow.QuantityPerUnit }}</dd>
      </dl>
    </Window>
  </main>
</template>
