<template>
  <main class="flex-1">
    <BasePageHeading> Calendar</BasePageHeading>

    <div class="demo-app">
      <vue-cal style="height: 250px" />
      <div class="demo-app-main">
        <vue-cal hide-view-selector :time="false" active-view="month" xsmall>
          <template
            v-slot:arrow-prev
            aria-hidden="true"
            class="v-icon material-icons"
          >
            arrow_back
          </template>
          <template
            v-slot:arrow-next
            aria-hidden="true"
            class="v-icon material-icons"
          >
            arrow_forward
          </template>
        </vue-cal>

        <!-- <FullCalendar class="demo-app-calendar" :options="calendarOptions">
          <template #eventContent="arg">
            <b>{{ arg.timeText }}</b>
            <i>{{ arg.event.title }}</i>
          </template>
        </FullCalendar> -->
      </div>
    </div>
  </main>
</template>

<script>
import {defineComponent} from '@vue/composition-api'
import PageHeading from '@/components/patterns/PageHeading.vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default defineComponent({
  setup() {},

  components: {
    VueCal,
    PageHeading,
  },
  data() {
    return {}
  },
  methods: {},
})
</script>
