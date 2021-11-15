<template>
  <section>
    <article class="mt-4">
      <!-- Table -->

      <!-- OVERLAYS -->

      <!-- CourseInfoModal -->
      <OModal class="font-proto" :active.sync="showCourseInformation" :width="640" scroll="clip">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales
          leo nec convallis rutrum. Vivamus pharetra molestie arcu at dictum.
          Nulla faucibus leo eget enim egestas, in tempus justo venenatis. Duis
          dictum suscipit erat, a dapibus eros lobortis ac. Praesent tempor
          rhoncus convallis. Nullam in ipsum convallis, rutrum elit eget, dictum
          ipsum. Nunc sagittis aliquet massa. Etiam lacus sapien, eleifend non
          eros quis, finibus ornare nisl. Ut laoreet sit amet lacus non
          dignissim. Sed convallis mattis enim, sed interdum risus molestie ut.
          Praesent vel ex hendrerit, cursus lectus a, blandit felis. Nam luctus
          orci nec varius commodo.
        </p>
        <p>
          Sed vulputate metus purus, ut egestas erat congue et. Donec tellus
          orci, malesuada eget dolor sed, pellentesque bibendum nunc. In eu
          egestas diam. Integer sed congue massa. Sed a urna quam. Morbi
          vulputate dolor eleifend ligula lobortis venenatis. Aenean
          pellentesque risus sit amet faucibus molestie. Aliquam eu lorem
          aliquet, aliquam nulla in, vestibulum lorem. Donec mollis mi at
          sollicitudin tristique. Nullam id nibh pulvinar, dignissim nisl id,
          gravida risus. Nulla arcu elit, scelerisque in sollicitudin et,
          laoreet et metus. Aenean placerat turpis nec tincidunt tempus.
        </p>
      </OModal>

      <!-- ProfileSidebar -->
      <OSidebar fullheight right position="fixed" overlay :open.sync="showProfile">
        <article class="relative flex-1 mt-4">
          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <section
                class="absolute inset-y-0 right-0 flex max-w-full"
                aria-labelledby="slide-over-heading"
              >
                <div class="w-screen max-w-md">
                  <div class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div class="px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <h2
                          id="slide-over-heading"
                          class="text-lg font-medium text-gray-900"
                        >{{ $t('profile') }}</h2>
                        <div class="flex items-center ml-3 h-7">
                          <button
                            @click="showProfile = false"
                            class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:ring-2 focus:ring-primary-500"
                          >
                            <span class="sr-only">{{ $t('close_panel') }}</span>
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
                    <!-- Main -->
                    <div class="font-proto">
                      <div class="pb-1 sm:pb-6">
                        <div>
                          <div class="relative h-40 sm:h-56">
                            <img
                              class="absolute object-cover w-full h-full"
                              src="/assets/img/users/charlee.jpeg"
                              alt
                            />
                          </div>
                          <div class="px-4 mt-6 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <div class="sm:flex-1">
                              <div>
                                <div class="flex items-center">
                                  <h3
                                    class="text-xl font-bold text-gray-900 sm:text-2xl"
                                  >Charlee Tchividjian-Sherry</h3>
                                  <span
                                    class="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"
                                  >
                                    <span class="sr-only">Online</span>
                                  </span>
                                </div>
                                <p class="text-sm text-gray-500">@charlee</p>
                              </div>
                              <div class="flex flex-wrap mt-5 space-y-3 sm:space-y-0 sm:space-x-3">
                                <button
                                  type="button"
                                  class="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:flex-1"
                                >Message</button>
                                <button
                                  type="button"
                                  class="inline-flex items-center justify-center flex-1 w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                >Call</button>
                                <span class="inline-flex ml-3 sm:ml-0">
                                  <div class="relative inline-block text-left">
                                    <button
                                      id="options-menu"
                                      type="button"
                                      class="inline-flex items-center p-2 text-sm font-medium text-gray-400 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    >
                                      <span class="sr-only">{{ $t('open_options_menu') }}</span>
                                      <!-- Heroicon name: dots-vertical -->
                                      <svg
                                        class="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                        />
                                      </svg>
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
                                      class="absolute right-0 hidden w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                                    >
                                      <div
                                        class="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                      >
                                        <a
                                          href="#"
                                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                          role="menuitem"
                                        >{{ $t('view_profile') }}</a>
                                        <a
                                          href="#"
                                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                          role="menuitem"
                                        >{{ $t('copy_profile_link') }}</a>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                        <dl class="px-4 space-y-8 sm:px-6 sm:space-y-6">
                          <div>
                            <dt
                              class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                            >{{ $t('bio') }}</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <p>
                                Enim feugiat ut ipsum, neque ut. Tristique mi id
                                elementum praesent. Gravida in tempus feugiat
                                netus enim aliquet a, quam scelerisque. Dictumst
                                in convallis nec in bibendum aenean arcu.
                              </p>
                            </dd>
                          </div>
                          <div>
                            <dt
                              class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                            >{{ $t('location') }}</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
                          </div>
                          <div>
                            <dt
                              class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                            >{{ $t('website') }}</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
                          </div>
                          <div>
                            <dt
                              class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                            >{{ $t('birthday') }}</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <time datetime="1988-06-23">June 23, 1988</time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </OSidebar>
    </article>
  </section>
</template>

<script lang="ts">
import { projects } from '@/__mocks__'
import { format } from 'date-fns'

export default {
  name: 'BaseTable',
  data() {
    return {
      data: projects,
      showProfile: false,
      showCourseInformation: false,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: false,
      isOpen: 0,
      isImageModalActive: false,
      isCardModalActive: false,
      // selected: data[1],
      checkboxPosition: 'left',
      checkedRows: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'sort-up',
      sortIconSize: 'small',
      currentPage: 1,
      perPage: 10,
      stickyHeaders: false,
      total: 200,
      current: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
    }
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'MM/dd/yyyy')
    },
  },
}
</script>
