<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>
      {{ $t('calendar') }}
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Add Appointment</span>
        </button>
      </template>
    </BasePageHeading>

    <section v-if="false" class="m-4 space-x-4">
      <OButton variant="primary">Service Region</OButton>
      <OButton variant="primary">Service Area</OButton>
      <OButton variant="primary">Service Technicians</OButton>
    </section>

    <section class="p-4 m-4 bg-white shadow">
      <BaseCalendar />
    </section>
  </main>
</template>
