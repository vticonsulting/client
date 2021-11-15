<template>
  <OTabs type="boxed" v-model="activeTab" expanded :animated="false">
    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">{{ title }}</h2>
      </template>

      <article>
        <CourseParticipantsList class="mt-4 lg:hidden" />
        <CourseParticipantsTable class="hidden mt-4 lg:block" />
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">{{ coursesTitle }}</h2>
      </template>

      <BaseVideo id="dFoLwGNWl98" />REWRITE: Why Basecamp 3 is a brand new code base, the evolution of code,
      transcendent software, and executing your very best ideas. About David
      Creator of Ruby on Rails, partner at 37signals, best-selling author,
      https://signalvnoise.com/posts/3959-rewrite-why-basecamp-3-is-a-brand-new-code
      October 12 2015
      <iframe
        allowtransparency="true"
        title="Wistia video player"
        allowfullscreen
        frameborder="0"
        scrolling="no"
        class="wistia_embed"
        name="wistia_embed"
        src="https://fast.wistia.net/embed/iframe/g630i8kd4b"
        width="400"
        height="225"
      ></iframe>
      <article class="prose">
        <ul>
          <li v-for="course in courses" :key="course">{{ course }}</li>
        </ul>

        <div class="flex items-center space-x-8 buttons">
          <button
            type="button"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span>{{ $t('training_provider') }}</span>
            <BaseIcon name="external-link" class="ml-2" />
          </button>
        </div>
      </article>
    </OTabItem>

    <OTabItem>
      <template slot="header">
        <h2 class="text-lg">{{ $t('executives') }}</h2>
      </template>

      <article>
        <BaseChart type="column" />
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
  computed: {
    title() {
      return this.$t('projects')
    },
    coursesTitle() {
      return this.$t('courses')
    },
  },
}
</script>
