<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
  methods: {
    sendForm() {
      axios
        .post('events', this.event)
        .then(function(response) {
          console.log('Response', response)
        })
        .catch(function(err) {
          console.log('Error', err)
        })
    },
  },
}
</script>

<template>
  <main class="flex-1">
    <BasePageHeading>Create an event</BasePageHeading>

    <SectionWrapper :padded="false" class="px-8">
      <div class="lg:grid-cols-12 lg:gap-8 lg:grid">
        <div class="lg:col-span-6">
          <form @submit.prevent="sendForm">
            <BaseSelect :options="categories" v-model="event.category" label="Select a category" />

            <fieldset class="mt-4">
              <h3 class="font-medium">Name &amp; describe your event</h3>

              <div class="mt-4">
                <BaseInput v-model="event.title" label="Title" type="text" />
              </div>

              <div class="mt-4">
                <BaseInput v-model="event.description" label="Description" type="text" />
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <h3 class="text-lg">Where is your event?</h3>

              <div class="mt-4">
                <BaseInput v-model="event.location" label="Location" type="text" />
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <h3 class="text-lg">Are pets allowed?</h3>

              <div class="mt-4">
                <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <h3 class="text-lg">Extras</h3>

              <div class="mt-4">
                <BaseCheckbox v-model="event.extras.catering" label="Catering" />
              </div>
              <div>
                <BaseCheckbox v-model="event.extras.music" label="Live music" />
              </div>
            </fieldset>

            <div class="flex items-center justify-start mt-8">
              <button
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >Submit</button>
            </div>
          </form>
        </div>

        <div class="lg:col-span-6">
          <pre>{{ event }}</pre>
        </div>
      </div>
    </SectionWrapper>
  </main>
</template>
