<script>
export default {
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined, // Browser locale
    }
  },
}
</script>
<template>
  <form>
    <OField label="Select a date">
      <ODatepicker
        v-model="selected"
        :show-week-number="showWeekNumber"
        :locale="locale"
        placeholder="Click to select..."
        icon-pack="fal"
        icon-left="calendar"
        input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        trap-focus
        expanded
      />
    </OField>

    <OField label="Name">
      <OInput
        input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        value=""
      />
    </OField>

    <OField label="Email">
      <OInput
        input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        type="email"
        value=""
        maxlength="30"
      />
    </OField>

    <OField label="Username">
      <OInput
        input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        value=""
        maxlength="30"
      />
    </OField>

    <OField label="Password">
      <OInput
        input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        value=""
        type="password"
        maxlength="30"
      />
    </OField>

    <OField label="Subject">
      <OSelect expanded placeholder="Select a subject">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </OSelect>
    </OField>
  </form>
</template>
