<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>
      {{ $t('customers') }}
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Add Customer</span>
        </button>
      </template>
    </BasePageHeading>

    <section class="p-4 m-4 bg-white shadow">
      <div class="flex items-center space-x-4">
        <OField label="Filter by Name">
          <OInput type="text" v-model="filters.name.value" />
        </OField>
        <OField label="Filter by City">
          <OInput type="text" v-model="filters.city.value" />
        </OField>
        <OField label="Filter by State">
          <OInput type="text" v-model="filters.city.value" />
        </OField>
        <OField label="Filter by Zip Code">
          <OInput type="text" v-model="filters.zip.value" />
        </OField>
      </div>

      <div class="flex flex-col mt-4">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <v-table
                class="min-w-full divide-y divide-gray-200"
                :data="customers"
                :filters="filters"
              >
                <thead class="bg-gray-50" slot="head">
                  <v-th
                    scope="col"
                    class="flex px-6 py-3 space-x-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    sortKey="Name"
                  >
                    <span>Name</span>
                  </v-th>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200"
                  slot="body"
                  slot-scope="{displayData}"
                >
                  <tr v-for="row in displayData" :key="row.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">{{ row.Name }}</div>
                          <div class="text-sm text-gray-500">{{ row.StreetAddress1 }}</div>
                          <div
                            class="text-sm text-gray-500"
                          >{{ row.City }}, {{ row.State }} {{ row.PostalCode }}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import customers from '@/__mocks__/vwCustomerList.json'

export default {
  data() {
    return {
      customers,
      filters: {
        name: { value: '', keys: ['Name'] },
        city: { value: '', keys: ['City'] },
        state: { value: '', keys: ['State'] },
        zip: { value: '', keys: ['PostalCode'] },
      },
      columns: [
        // {
        //   field: 'Id',
        //   label: 'ID',
        //   width: '40',
        //   numeric: true
        // },
        {
          field: 'Name',
          label: 'Customer',
          sortable: true,
          searchable: true,
        },
        {
          field: 'ShortName',
          label: 'Short Name',
          sortable: true,
          searchable: true,
        },
        {
          field: 'StreetAddress1',
          label: 'Street Address',
          sortable: true,
          searchable: true,
        },
        {
          field: 'City',
          label: 'City',
          sortable: true,
          searchable: true
        },
        {
          field: 'State',
          label: 'State',
          sortable: true,
          searchable: true,
        },
        {
          field: 'PostalCode',
          label: 'Zip',
          sortable: true,
          searchable: true,
        },
        {
          field: 'BillingContactName',
          label: 'Contact',
          sortable: true,
          searchable: true,
        },
      ]
    }
  }
}
</script>
