<template>
  <OTabs
    size="small"
    v-model="activeTab"
    :expanded="true"
    :animated="false"
    variant="primary"
    vertical
  >
    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">Churches Added</h2>
      </template>
      <article class="border rounded-lg shadow">
        <section class="h-64 p-8">Churches Added Content</section>
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">Advocates (Completed Training)</h2>
      </template>

      <article class="border rounded-lg shadow">
        <section class="h-64 p-8">Advocates (Completed Training)Content</section>
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">New Volunteers (Completed Orientation)</h2>
      </template>

      <article class="border rounded-lg shadow">
        <section class="h-64 p-8">New Volunteers (Completed Orientation) Content</section>
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">New Families</h2>
      </template>

      <article class="border rounded-lg shadow">
        <section class="h-64 p-8">New Families</section>
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">Upcoming Needs</h2>
      </template>

      <article class="border rounded-lg shadow">
        <section class="h-64 p-8">Upcoming Needs</section>
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">Upcoming Events</h2>
      </template>

      <article class="border rounded-lg shadow">
        <section class="h-64 p-8">Upcoming EventsContent</section>
      </article>
    </OTabItem>
  </OTabs>
</template>

<script>
export default {
  data() {
    return {
      courses: ['Parenting', 'Life Coaching', 'Therapy', 'CARE Teams'],
      activeTab: 1,
      users: null,
      isCardModalActive: false,
      isFullwidth: false,
      isImageModalActive: false,
      modalOpen: false,
      showNotifications: false,
      showOverlay: false,
      showSidebar: false,
    }
  },
  async mounted() {
    try {
      let response = await this.$axios.get('users')
      this.users = response.data
    } catch (err) {
      console.log(err)
    }
  },
}
</script>
