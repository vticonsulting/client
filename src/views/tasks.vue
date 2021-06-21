<template>
  <main class="flex-1">
    <BasePageHeading> {{ $t('upcoming_tasks') }}</BasePageHeading>
    <section class="p-8">
      <h3 class="mt-4 -ml-4 font-medium">Todo</h3>

      <ul class="mt-1 list-disc">
        <li>Add Actions Dropdown to Table row</li>
        <li>Add and customize Blog grid layout to Courses page</li>
        <li>Add breadcrumb</li>
        <li>Build out dashboard views</li>
        <li>Fix broken calendar responsiveness</li>
        <li>Write unit and integration tests</li>
        <li>Fix dropdown click-away behavior</li>
        <li>Fix modals / <b>portal</b> or <b>teleport</b></li>
        <li>Style client table</li>
        <li>Update chart's sample data</li>
        <li>Use real data in table</li>
        <li>Use theme color for image cards</li>
      </ul>

      <h3 class="mt-4 -ml-4 font-medium">Notes</h3>
      <ul class="mt-1 list-disc">
        <li>Éma Executives -- Can view, access, edit all</li>
        <li>
          Éma Regional Directors (future) -- Can view, access, edit in their
          region
        </li>
        <li>
          Éma Staff {Case Manager, Center Director, Lead Advocate} (Advocates,
          Clients, Calendar, All Courses [parenting, life coaching, therapy,
          CARE Teams])
        </li>
        <li>
          Certified Advocate (My Profile [Name, picture, contact, status], My
          Clients, All Courses [parenting, life coaching, therapy, CARE Teams]
          -- Thinkific style, Trainings [Thinkific style], Calendar,
          Announcements, Center Information)
        </li>
        <li>Advocate in Training (My Profile, Trainings)</li>
      </ul>
    </section>
  </main>
</template>
