<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>
      {{ $t('reports') }}
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="play" />
          <span>Watch Video Tutorial</span>
        </button>
      </template>
    </BasePageHeading>

    <section class="p-4">
      <BaseDatepicker v-model="date" format="D MMM YYYY" :options="{ firstDay: 1 }" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      date: "2018-04-12"
    }
  }
}
</script>
