<script>
import serviceTypes from '@/__mocks__/service_types.json'
import regions from '@/__mocks__/ServiceRegion.json'
import managers from '@/__mocks__/ServiceRegionManager.json'
import areas from '@/__mocks__/ServiceArea.json'

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

export default {
  data() {
    return {
      regionName: '',
      areas,
      managers,
      serviceTypes,
      name: '',
      selectedServiceType: null,
      regions,
      selectedTerritories: [],
    }
  },
  computed: {
    filteredServiceTypes() {
      return this.serviceTypes.filter(serviceType => {
        return (
          serviceType.Name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        )
      })
    },
    sortedAreas() {
      return [...this.areas].sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(area => area.Name).filter(onlyUnique)
    },
    sortedRegions() {
      return [...this.regions].sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(area => area.Name).filter(onlyUnique)
    }
  }
}
</script>
<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>Services Territories and Areas</BasePageHeading>

    <section class="p-4 m-4 bg-white rounded shadow dark:bg-black">
      <div class="flex space-x-4">
        <OButton variant="primary">
          <span class="whitespace-nowrap">Add Service Area</span>
        </OButton>
        <OButton variant="primary">
          <span class="whitespace-nowrap">Edit Territory</span>
        </OButton>
        <OButton variant="primary">
          <span class="whitespace-nowrap">Edit Service Area</span>
        </OButton>
      </div>

      <div class="mt-8" v-if="false">
        <OField label="Select Service Type">
          <OAutocomplete
            :data="filteredServiceTypes"
            v-model="name"
            @select="option => selectedServiceType = option"
            keep-first
            open-on-focus
            placeholder="e.g. Ladder Assist"
            field="Name"
          />
        </OField>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-8">
        <div class="col-span-full sm:col-span-6">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            for="region"
          >Service Territories</label>
          <select
            class="w-full border-gray-400 rounded dark:bg-black"
            name="region"
            id="region"
            size="10"
            multiple
          >
            <option v-for="region in sortedRegions" :key="region.Id">{{ region }}</option>
          </select>
        </div>
        <div class="col-span-full sm:col-span-6">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            for="area"
          >Service Areas in that Territory</label>
          <select
            class="w-full border-gray-400 dark:bg-black"
            name="area"
            id="area"
            size="10"
            multiple
          >
            <option v-for="area in sortedAreas" :key="area.Id">{{ area.Name }}</option>
          </select>
        </div>
      </div>

      <!-- <select name="selectedTerritories" size="10" multiple>
        <option value v-for="option in selectedTerritories">{{ option }}</option>
      </select>-->
      <!-- <pre>
        {{ selected }}
      Service Types
      Service Territories
      Service Areas in that Territory
      Service Directors
      Territory Managers
      Territory Managers Assigned to this Territory
      Service Lead
      </pre>
      <button>Edit Territory</button>
      <button>Add Service Area</button>
      <button>Edit Service Area</button>
      <h2>Add Service Area</h2>
      <pre>
      Select Region
      Service Area Name
      Time Zone
      Street
      City
      State
      Zip
      Logitude
      Longitude
      Radius in miles
      Service Technicians
      Service Technicians Assigned to the Area
      Map
      This is a catastrophe area
      This service area is active
      This service area is deleted
      <button>Save</button>
      <button>Cancel</button>
      </pre>-->
    </section>

    <section class="p-8 m-4 bg-white rounded shadow dark:bg-black">
      <h2 class="text-lg font-medium">New Service Territory</h2>

      <form class="mt-8" action>
        <div>
          <OField label="Name">
            <OInput v-model="regionName" expanded />
          </OField>
        </div>
        <div class="mt-8">
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            for="area"
          >Service Director(s)</label>
        </div>
        <div class="grid grid-cols-12 gap-8 mt-8">
          <div class="col-span-full sm:col-span-6">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              for="region"
            >Territory Managers</label>
            <select class="w-full dark:bg-black" name="region" id="region" size="10" multiple>
              <option v-for="region in sortedRegions" :key="region.Id">{{ region.Name }}</option>
            </select>
          </div>
          <div class="col-span-full sm:col-span-6">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              for="area"
            >Territory Manager(s) Assigned to this Territory</label>
            <select class="w-full dark:bg-black" name="area" id="area" size="10" multiple>
              <option v-for="area in sortedAreas" :key="area.Id">{{ area.Name }}</option>
            </select>
          </div>
        </div>
        <div class="mt-8">
          <o-field label="Service Lead" message="Field message text">
            <o-select expanded placeholder="Select a subject">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </o-select>
          </o-field>
        </div>
        <div class="mt-8">
          <OButton variant="primary">Save</OButton>
        </div>
      </form>
    </section>
  </main>
</template>
