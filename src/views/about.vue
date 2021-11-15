<template>
  <main class="flex-1 w-full bg-gray-100">
    <section class="p-8">
      <DropDownList
        :data-items="categories"
        :data-item-key="'CategoryID'"
        :text-field="'CategoryName'"
        :default-item="defaultItems"
        @change="handleDropDownChange"
      />
    </section>

    <section class="m-4">
      <BaseInput placeholder="Search by Project or Claim Number" type="text" />
    </section>

    <section class="p-4 m-4 space-x-4 bg-white rounded shadow">
      <OButton>Default</OButton>
      <OButton variant="primary">Primary</OButton>
      <OButton variant="success">Success</OButton>
      <OButton variant="danger">Danger</OButton>
      <OButton variant="warning">Warning</OButton>
      <OButton variant="info">Info</OButton>
    </section>\
    <!-- <strong>{{ dropdownlistCategory }}</strong> -->

    <section class="px-8">
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
            <input type="checkbox" :checked="props.dataItem.Discontinued" disabled="disabled" />
          </td>
        </template>
      </Grid>
    </section>

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

<script>
import { categories, products } from '@/__mocks__'
import { process } from '@progress/kendo-data-query'
import { Grid } from '@progress/kendo-vue-grid'
import { DropDownList } from '@progress/kendo-vue-dropdowns'
import { Window } from '@progress/kendo-vue-dialogs'
import '@progress/kendo-theme-default/dist/all.css'

export default {
  components: {
    DropDownList,
    Grid,
    Window
  },
  data() {
    return {
      categories,
      products,
      defaultItems: { CategoryID: null, CategoryName: "Product categories" },
      dropdownlistCategory: null,
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
