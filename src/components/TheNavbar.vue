<script>
import {defineComponent, ref, reactive} from '@vue/composition-api'
// import snakeCase from 'lodash/snakeCase'
import kebabCase from 'lodash/kebabCase'
import ModalForm from '@/components/templates/ModalForm.vue'

export default defineComponent({
  props: {
    user: {
      type: Object,
      default: () => ({
        name: 'Tatyana McNish',
        email: 'tatyana@ema.promiseserves.org',
        avatarUrl: '/assets/img/people/tatyana.jpeg',
      }),
    },
  },
  setup() {
    const langs = ref(['en', 'es'])

    const affiliate = reactive({
      id: 1,
      name: 'Ema',
      theme: {
        nav: {
          class: 'bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-50',
        },
        logo_path: '',
        colors: {
          primary: '',
          secondary: '',
          danger: '',
          warning: '',
          success: '',
          info: '',
        },
      },
    })

    const showAnnouncements = ref(false)
    const showMenu = ref(false)
    const showNewProjectView = ref(false)
    const showVolunteerView = ref(false)
    const showProfile = ref(false)
    const fullwidth = ref(false)
    const people = ref([
      {
        id: 1,
        name: 'Jeremy Doublestein',
        username: 'jdoublestein',
        isOnline: true,
      },
      {
        id: 2,
        name: 'Victor Tolbert',
        username: 'username',
        isOnline: false,
      },
    ])

    const slug = kebabCase(affiliate.name)

    return {
      showAnnouncements,
      showNewProjectView,
      showVolunteerView,
      fullwidth,
      affiliate,
      slug,
      showMenu,
      showProfile,
      people,
      langs,
    }
  },
  mounted() {
    console.log(this.$i18n.locale)
    // this.$api.{resource}.{method}
    // this.$api.users.fetch({})
    // this.$api.users.get(1)
    // this.$api.posts.post(post)
    // this.$api.posts.put(post)
    // this.$api.posts.delete(1)
    // this.$api.albums.uploadImage()
    // this.$api.albums.triggerError()
  },
  computed: {
    authUser() {
      return this.$store.state.user
    },
    routes() {
      return [
        {
          name: 'dashboard',
          label: this.$t('dashboard'),
        },

        {
          name: 'affiliates',
          label: this.$t('affiliates'),
        },
        {
          name: 'people',
          label: this.$t('people'),
        },
        {
          name: 'resources',
          label: this.$t('resources'),
        },
        {
          name: 'directory',
          label: this.$t('directory'),
        },
        {
          name: 'advocates',
          label: this.$t('advocates'),
        },
        {
          name: 'announcements',
          label: this.$t('announcements'),
        },
        {
          name: 'training',
          label: this.$t('training'),
        },
        {
          name: 'events',
          label: this.$t('events'),
        },
        {
          name: 'calendar',
          label: this.$t('calendar'),
        },
        {
          name: 'todos',
          label: this.$t('todos'),
        },
        {
          name: 'resume',
          label: this.$t('resume'),
        },
        // {
        //   name: 'about',
        //   label: this.$t('about'),
        // },

        // {
        //   name: 'courses',
        //   label: this.$t('courses'),
        // },
        // {
        //   name: 'example',
        //   label: this.$t('example'),
        // },
        // {
        //   name: 'list',
        //   label: this.$t('list'),
        // },
        // {
        //   name: 'charts',
        //   label: this.$t('charts'),
        // },
        // {
        //   name: 'clients',
        //   label: this.$t('clients'),
        // },
        // {
        //   name: 'media',
        //   label: this.$t('media'),
        // },
        // {
        //   name: 'inbox',
        //   label: this.$t('inbox'),
        // },

        // {
        //   name: 'overview',
        //   label: this.$t('overview'),
        // },

        // {
        //   name: 'map',
        //   label: this.$t('map'),
        // },
        // {
        //   name: 'profile',
        //   label: this.$t('profile'),
        // },

        // {
        //   name: 'person',
        //   label: this.$t('person'),
        // },
        // {
        //   name: 'tasks',
        //   label: this.$t('tasks'),
        // },

        // {
        //   name: 'about',
        //   label: this.$t('about'),
        // },
      ]
    },
  },
  methods: {
    handleRightClick(e) {
      e.preventDefault()
      this.$oruga.modal.open({
        parent: this,
        component: ModalForm,
        custom: true,
        trapFocus: true,
      })

      // this.$oruga.modal.open('testing')
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
})
</script>

<template>
  <nav :class="[affiliate.theme.nav.class, 'fixed top-0 z-10 w-full shadow']">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center mr-2 -ml-2 md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="showMenu = !showMenu"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span class="sr-only">{{ $t('open_main_menu') }}</span>
              <BaseIconOutlined :name="showMenu ? 'x' : 'menu'" class="block" />
            </button>
          </div>

          <div class="flex items-center flex-shrink-0">
            <RouterLink
              @contextmenu.native="handleRightClick"
              class="flex items-center justify-center"
              :to="{name: 'dashboard'}"
            >
              <BaseLogo class="text-primary-500" :name="slug" />
            </RouterLink>
          </div>

          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <RouterLink
              v-for="(route, index) in routes"
              :key="index"
              :to="{name: route.name}"
              v-slot="{isActive, navigate, href}"
              exact
              custom
            >
              <a
                :href="href"
                @click="navigate"
                :class="[
                  {
                    'border-transparent  hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-300 dark:hover:text-gray-300': !isActive,
                    'border-primary-500': isActive,
                  },
                  'inline-flex capitalize whitespace-nowrap items-center px-1 pt-1 text-sm font-medium border-b-2',
                ]"
              >
                {{ route.label }}
              </a>
            </RouterLink>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <!-- <div class="flex-shrink-0">
            <OButton
              size="small"
              variant="primary"
              icon-pack="fas"
              icon-left="plus"
              @click="showNewProjectView = !showNewProjectView"
              :rounded="true"
            >
              {{ $t('new_project') }}
            </OButton>
          </div> -->

          <template v-if="user">
            <router-link to="dashboard"> Dashboard </router-link>
            <span class="nav-welcome">Hello, {{ user.name }}.</span>
            <button type="button" class="logoutButton" @click="logout">
              Log out
            </button>
          </template>

          <template v-else>
            <router-link to="authenticate" class="button"> Login </router-link>
          </template>

          <DarkModeSwitch v-if="false" />
          <LanguageToggle v-if="false" />

          <div class="md:ml-4 md:flex-shrink-0 md:flex md:items-center">
            <!-- <NotificationsButton /> -->
            <button
              @click="showAnnouncements = !showAnnouncements"
              class="hidden p-1 text-gray-400 bg-white rounded-full md:block hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span class="sr-only">{{ $t('view_notifications') }}</span>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  v-if="showAnnouncements"
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
                <path
                  v-if="!showAnnouncements"
                  fill="currentColor"
                  d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  @click="showProfile = !showProfile"
                  class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">{{ $t('open_user_menu') }}</span>
                  <img
                    style="filter: grayscale(1)"
                    class="w-8 h-8 rounded-full"
                    :src="user.avatarUrl"
                    :alt="user.name"
                  />
                </button>
              </div>
              <Transition
                enter-active-class="transition duration-200 ease-out transform scale-95 opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-class="scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in transform scale-95 opacity-0"
              >
                <div
                  v-show="showProfile == true"
                  class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <RouterLink
                    :to="{name: 'profile'}"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {{ $t('my_profile') }}
                  </RouterLink>
                  <RouterLink
                    :to="{name: 'team'}"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {{ $t('team') }}
                  </RouterLink>
                  <button
                    @click.prevent="showVolunteerView = true"
                    class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {{ $t('volunteers') }}
                  </button>
                  <RouterLink
                    :to="{name: 'settings'}"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {{ $t('settings') }}
                  </RouterLink>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {{ $t('sign_out') }}
                  </a>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showMenu" class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <RouterLink
          :to="{name: 'dashboard'}"
          class="block py-2 pl-3 pr-4 text-base font-medium border-l-4 text-primary-700 border-primary-500 bg-primary-50 sm:pl-5 sm:pr-6"
        >
          {{ $t('dashboard') }}
        </RouterLink>

        <RouterLink
          :to="{name: 'team'}"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
        >
          {{ $t('team') }}
        </RouterLink>

        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
        >
          {{ $t('projects') }}
        </a>

        <RouterLink
          :to="{name: 'calendar'}"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
        >
          {{ $t('calendar') }}
        </RouterLink>
      </div>

      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4 sm:px-6">
          <div class="flex-shrink-0">
            <img
              style="filter: grayscale(1)"
              class="w-10 h-10 rounded-full"
              :src="user.avatarUrl"
              :alt="user.name"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">
              {{ user.name }}
            </div>
            <div class="text-sm font-medium text-gray-500">
              {{ user.email }}
            </div>
          </div>

          <button
            class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span class="sr-only">{{ $t('view_notifications') }}</span>
            <!-- Heroicon name: bell -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>

        <div class="mt-3 space-y-1">
          <RouterLink
            :to="{name: '`ile'}"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
          >
            {{ $t('my_profile') }}
          </RouterLink>

          <RouterLink
            :to="{name: 'setttings'}"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
          >
            {{ $t('settings') }}
          </RouterLink>

          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
          >
            {{ $t('sign_out') }}
          </a>
        </div>
      </div>
    </div>

    <OSidebar
      :fullwidth="fullwidth"
      fullheight
      right
      position="fixed"
      :overlay="true"
      background-class=""
      content-class=""
      mobile="fullwidth"
      :open.sync="showAnnouncements"
    >
      <section
        class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
      >
        <div class="flex flex-col flex-1 min-h-0 overflow-y-scroll">
          <header class="px-4 mt-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2
                id="slide-over-heading"
                class="text-lg font-medium text-gray-900"
              >
                {{ $t('announcements') }}
              </h2>
              <div class="flex items-center ml-3 h-7">
                <button
                  @click="showAnnouncements = false"
                  class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <span class="sr-only">{{ $t('close_panel') }}</span>
                  <BaseIconOutlined name="x" />
                </button>
              </div>
            </div>
          </header>

          <article class="relative flex-1 px-4 mt-4 sm:px-6">
            <div>
              <div class="flow-root mt-6">
                <ul class="-my-5 divide-y divide-gray-200">
                  <li class="py-5">
                    <div
                      class="relative focus-within:ring-2 focus-within:ring-primary-500"
                    >
                      <h3 class="text-sm font-semibold text-gray-800">
                        <a href="#" class="hover:underline focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          Office closed on July 2nd
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                        Cum qui rem deleniti. Suscipit in dolor veritatis sequi
                        aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut
                        repudiandae possimus. Nihil ex tempora neque cum
                        consectetur dolores.
                      </p>
                    </div>
                  </li>

                  <li class="py-5">
                    <div
                      class="relative focus-within:ring-2 focus-within:ring-primary-500"
                    >
                      <h3 class="text-sm font-semibold text-gray-800">
                        <a href="#" class="hover:underline focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          New password policy
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                        Alias inventore ut autem optio voluptas et repellendus.
                        Facere totam quaerat quam quo laudantium cumque eaque
                        excepturi vel. Accusamus maxime ipsam reprehenderit
                        rerum id repellendus rerum. Culpa cum vel natus. Est sit
                        autem mollitia.
                      </p>
                    </div>
                  </li>

                  <li class="py-5">
                    <div
                      class="relative focus-within:ring-2 focus-within:ring-primary-500"
                    >
                      <h3 class="text-sm font-semibold text-gray-800">
                        <a href="#" class="hover:underline focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          Office closed on July 2nd
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                        Tenetur libero voluptatem rerum occaecati qui est
                        molestiae exercitationem. Voluptate quisquam iure
                        assumenda consequatur ex et recusandae. Alias
                        consectetur voluptatibus. Accusamus a ab dicta et.
                        Consequatur quis dignissimos voluptatem nisi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <RouterLink
                  :to="{name: 'announcements'}"
                  class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  {{ $t('view_all') }}
                </RouterLink>
              </div>
            </div>
          </article>
        </div>

        <footer v-if="false" class="flex justify-end flex-shrink-0 px-4 py-4">
          <button
            @click="showAnnouncements = false"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {{ $t('cancel') }}
          </button>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {{ $t('save') }}
          </button>
        </footer>
      </section>
    </OSidebar>

    <OSidebar
      :fullwidth="fullwidth"
      fullheight
      right
      position="fixed"
      :overlay="false"
      mobile="fullwidth"
      :open.sync="showVolunteerView"
    >
      <section
        class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
      >
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <section
              class="absolute inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
              aria-labelledby="slide-over-heading"
            >
              <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
              <div class="w-screen max-w-md">
                <div
                  class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl"
                >
                  <!-- Header -->
                  <div class="p-6">
                    <div class="flex items-start justify-between">
                      <h2
                        id="slide-over-heading"
                        class="text-lg font-medium text-gray-900"
                      >
                        {{ $t('volunteers') }}
                      </h2>
                      <div class="flex items-center ml-3 h-7">
                        <button @click="showVolunteerView = false">
                          <BaseIconSolid name="x" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Tabs -->
                  <div class="border-b border-gray-200">
                    <div class="px-6">
                      <nav class="flex -mb-px space-x-6">
                        <!-- Current: "border-primary-500 text-primary-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                        <a
                          href="#"
                          class="px-1 pb-4 text-sm font-medium border-b-2 text-primary-600 border-primary-500 whitespace-nowrap"
                          aria-current="page"
                        >
                          {{ $t('all') }}
                        </a>

                        <a
                          href="#"
                          class="px-1 pb-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
                        >
                          {{ $t('certified') }}
                        </a>

                        <a
                          href="#"
                          class="px-1 pb-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
                        >
                          {{ $t('in_training') }}
                        </a>
                      </nav>
                    </div>
                  </div>

                  <!-- List -->
                  <ul class="overflow-y-auto divide-y divide-gray-200">
                    <li
                      v-for="person in people"
                      :key="person.id"
                      class="relative px-6 py-5"
                    >
                      <div class="flex items-center justify-between group">
                        <a href="#" class="block p-1 -m-1">
                          <div
                            class="absolute inset-0 group-hover:bg-gray-50"
                            aria-hidden="true"
                          />
                          <div
                            class="relative flex items-center flex-1 min-w-0"
                          >
                            <span class="relative flex-shrink-0 inline-block">
                              <img
                                style="filter: grayscale(1)"
                                class="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                              <span
                                :class="[
                                  person.isOnline
                                    ? 'bg-gray-300'
                                    : 'bg-green-400',
                                  'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white',
                                ]"
                                aria-hidden="true"
                              />
                            </span>
                            <div class="ml-4 truncate">
                              <p
                                class="text-sm font-medium text-gray-900 truncate"
                              >
                                {{ person.name }}
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                @{{ person.username }}
                              </p>
                            </div>
                          </div>
                        </a>
                        <div class="relative inline-block ml-2 text-left">
                          <button
                            class="relative inline-flex items-center justify-center w-8 h-8 bg-white rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            id="options-menu-0"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span class="sr-only">
                              {{ $t('open_options_menu') }}
                            </span>
                            <span
                              class="flex items-center justify-center w-full h-full rounded-full"
                            >
                              <!-- Heroicon name: dots-vertical -->
                              <svg
                                class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                />
                              </svg>
                            </span>
                          </button>

                          <!--
                    Dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                          <div
                            v-if="false"
                            class="absolute top-0 z-10 w-48 origin-top-right bg-white rounded-md shadow-lg right-9 ring-1 ring-black ring-opacity-5"
                            aria-label="options-menu"
                          >
                            <div
                              class="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu-0"
                            >
                              <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                {{ $t('view_profile') }}
                              </a>
                              <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                {{ $t('send_message') }}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </OSidebar>

    <div v-if="showNewProjectView" class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <Transition
          enter-class="opacity-0"
          enter-active-class="duration-500 ease-in-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="duration-500 ease-in-out transition-medium"
          leave-to-class="opacity-0"
          appear
        >
          <div
            v-show="showNewProjectView"
            class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          />
        </Transition>

        <section
          class="absolute inset-y-0 right-0 flex max-w-full pl-10"
          aria-labelledby="slide-over-heading"
        >
          <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->

          <Transition
            enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
            appear
            mode="in-out"
          >
            <div v-show="showNewProjectView" class="w-screen max-w-md">
              <div
                class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl"
              >
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2
                      id="slide-over-heading"
                      class="text-lg font-medium text-gray-900"
                    >
                      Panel title
                    </h2>
                    <div class="flex items-center ml-3 h-7">
                      <button
                        @click.stop="showNewProjectView = false"
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: x -->
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex-1 px-4 mt-6 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div
                      class="h-full border-2 border-gray-200 border-dashed"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    </div>
  </nav>
</template>
