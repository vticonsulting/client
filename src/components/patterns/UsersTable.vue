<script>
import { defineComponent } from '@vue/composition-api'
import axios from '@/plugins/axios'

export default defineComponent({
  setup() { },
  data() {
    return {
      columns: ['id', 'name', 'age'],
      foo: null,
      data: [
        { id: 1, name: 'John', age: '20' },
        { id: 2, name: 'Jane', age: '24' },
        { id: 3, name: 'Susan', age: '16' },
        { id: 4, name: 'Chris', age: '55' },
        { id: 5, name: 'Dan', age: '40' },
      ],
      options: {
        // see the options API
      },
    }
  },
  async mounted() {
    this.$refs.myTable.setLoadingState(true)
    const { data } = await axios.get('users')
    console.log(data)

    this.foo = data
    this.$refs.myTable.setLoadingState(false)
  },
})
</script>

<template>
  <div id="users">
    <!-- {{ $refs.myTable.filteredData }} -->
    <v-client-table ref="myTable" :data="data" :columns="columns" :options="options" />
  </div>
</template>
