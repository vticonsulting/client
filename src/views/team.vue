<script>
import team from '@/__mocks__/team.json'

export default {
  data() {
    return {
      team,
      columns: [
        {
          field: 'name',
          label: 'Name',
          sortable: true
        },
      ]
    }
  }
}
</script>


<template>
  <main class="flex-1">
    <section class="m-4">
      <div
        class="block w-full h-12 text-gray-200 bg-white border-2 border-gray-300 border-dashed rounded"
      />
    </section>
    <div class="p-8">
      <OTable striped :data="team" :columns="columns" />

      <FileUploadForm />
    </div>
  </main>
</template>
