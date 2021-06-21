<template>
  <section>
    <vue-frappe
      id="test"
      :labels="[
        '12am-3am',
        '3am-6am',
        '6am-9am',
        '9am-12pm',
        '12pm-3pm',
        '3pm-6pm',
        '6pm-9pm',
        '9pm-12am',
      ]"
      title="My Awesome Chart"
      type="axis-mixed"
      :height="300"
      :colors="['purple', '#ffa3ef', 'light-blue']"
      :data-sets="axisMixed"
    ></vue-frappe>
    <vue-frappe
      id="test"
      title="Monthly Distribution"
      type="heatmap"
      :colors="['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']"
      :discreteDomains="false"
      :height="300"
      :dataPoints="data"
      :startDate="start"
      :endDate="end"
    ></vue-frappe>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bar: [{values: [18, 40, 30, 35, 8, 52, 17, -4]}],
      doughnut: [
        {
          values: [18, 40, 30, 35, 8, 52, 17, -4],
        },
      ],
      axisMixed: [
        {
          name: 'Some Data',
          chartType: 'bar',
          values: [25, 40, 30, 35, 8, 52, 17, -4],
        },
        {
          name: 'Another Set',
          chartType: 'bar',
          values: [25, 50, -10, 15, 18, 32, 27, 14],
        },
        {
          name: 'Yet Another',
          chartType: 'line',
          values: [15, 20, -3, -15, 58, 12, -17, 37],
        },
      ],
    }
  },
  computed: {
    start() {
      let date = new Date()
      date.setMonth(2)
      return date
    },
    end() {
      let date = new Date()
      date.setMonth(6)
      return date
    },
    data() {
      let date1 = new Date()
      let date2 = new Date()
      let date3 = new Date()
      date1.setMonth(2).toTimeString
      date2.setMonth(3).toTimeString
      date3.setMonth(4).toTimeString
      return {
        date1: 30,
        date2: 50,
        date3: 150,
      }
    },
  },
}
</script>
