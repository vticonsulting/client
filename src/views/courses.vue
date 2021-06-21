<template>
  <main class="flex-1">
    <BasePageHeading> Courses </BasePageHeading>
    <BaseImage />
    <section class="p-8 space-x-4">
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
      >
        {{ $t('notice') }}
      </span>
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-success-100 text-success-800"
      >
        {{ $t('success') }}
      </span>
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-danger-100 text-danger-800"
      >
        {{ $t('danger') }}
      </span>
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-warning-100 text-warning-800"
      >
        {{ $t('warning') }}
      </span>
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-info-100 text-info-800"
      >
        {{ $t('info') }}
      </span>
    </section>
    <section class="p-8 prose">
      <ul>
        <li>Parenting</li>
        <li>Life-coaching</li>
        <li>Therapy</li>
        <li>CARE Teams</li>
      </ul>
    </section>
  </main>
</template>
