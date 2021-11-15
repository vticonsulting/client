<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>{{ $t('announcements') }}</BasePageHeading>

    <section class="p-6 mx-8 mt-8 bg-white rounded-lg shadow">
      <ul class="divide-y divide-gray-200">
        <li
          class="relative px-4 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600"
        >
          <div class="flex justify-between space-x-3">
            <div class="flex-1 min-w-0">
              <a href="#" class="block focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900 truncate">Gloria Roberston</p>
                <p class="text-sm text-gray-500 truncate">Velit placeat sit ducimus non sed</p>
              </a>
            </div>
            <time
              datetime="2021-01-27T16:35"
              class="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
            >1d ago</time>
          </div>
          <div class="mt-1">
            <p class="text-sm text-gray-600 line-clamp-2">
              Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in
              a rerum natus facere. Enim rerum eaque qui facilis. Numquam
              laudantium sed id dolores omnis in. Eos reiciendis deserunt
              maiores et accusamus quod dolor.
            </p>
          </div>
        </li>

        <!-- More items... -->
      </ul>
    </section>

    <section class="p-6 mx-8 mt-8 bg-white rounded-lg shadow">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="px-4 py-5 bg-white sm:px-6">
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline">Chelsea Hagon</a>
            </p>
            <p class="text-sm text-gray-500">
              <a href="#" class="hover:underline">December 9 at 11:43 AM</a>
            </p>
          </div>
          <div class="flex self-center flex-shrink-0">
            <div class="relative z-30 inline-block text-left">
              <div>
                <button
                  type="button"
                  class="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600"
                  id="menu-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open options</span>
                  <!-- Heroicon name: solid/dots-vertical -->
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
              </div>

              <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
              -->
              <div
                v-show="false"
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-1"
              >
                <div class="py-1">
                  <a
                    href="#"
                    class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <!-- Heroicon name: solid/star -->
                    <svg
                      class="w-5 h-5 mr-3 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span>Add to favorites</span>
                  </a>
                  <a
                    href="#"
                    class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <!-- Heroicon name: solid/code -->
                    <svg
                      class="w-5 h-5 mr-3 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Embed</span>
                  </a>
                  <a
                    href="#"
                    class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <!-- Heroicon name: solid/flag -->
                    <svg
                      class="w-5 h-5 mr-3 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Report content</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMouse, usePreferredDark, useLocalStorage } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import Button from '@/assets/sound/button.wav'

export default defineComponent({
  name: 'AnnouncementsView',
  components: {},
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()
    const { play } = useSound(Button)
    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    return {
      x,
      y,
      isDark,
      store,
      play,
    }
  },
  data() {
    const data = [
      {
        id: 1,
        first_name: 'Jesse',
        last_name: 'Simmons',
        date: '2016/10/15 13:43:27',
        gender: 'Male',
      },
      {
        id: 2,
        first_name: 'John',
        last_name: 'Jacobs',
        date: '2016/12/15 06:00:53',
        gender: 'Male',
      },
      {
        id: 3,
        first_name: 'Tina',
        last_name: 'Gilbert',
        date: '2016/04/26 06:26:28',
        gender: 'Female',
      },
      {
        id: 4,
        first_name: 'Clarence',
        last_name: 'Flores',
        date: '2016/04/10 10:28:46',
        gender: 'Male',
      },
      {
        id: 5,
        first_name: 'Anne',
        last_name: 'Lee',
        date: '2016/12/06 14:38:38',
        gender: 'Female',
      },
    ]

    const data2 = [
      {
        id: 1,
        user: { first_name: 'Jesse', last_name: 'Simmons' },
        date: '2016/10/15 13:43:27',
        gender: 'Male',
      },
      {
        id: 2,
        user: { first_name: 'John', last_name: 'Jacobs' },
        date: '2016/12/15 06:00:53',
        gender: 'Male',
      },
      {
        id: 3,
        user: { first_name: 'Tina', last_name: 'Gilbert' },
        date: '2016/04/26 06:26:28',
        gender: 'Female',
      },
      {
        id: 4,
        user: { first_name: 'Clarence', last_name: 'Flores' },
        date: '2016/04/10 10:28:46',
        gender: 'Male',
      },
      {
        id: 5,
        user: { first_name: 'Anne', last_name: 'Lee' },
        date: '2016/12/06 14:38:38',
        gender: 'Female',
      },
      {
        id: 6,
        user: { first_name: 'Sara', last_name: 'Armstrong' },
        date: '2016/09/23 18:50:04',
        gender: 'Female',
      },
      {
        id: 7,
        user: { first_name: 'Anthony', last_name: 'Webb' },
        date: '2016/08/30 23:49:38',
        gender: 'Male',
      },
      {
        id: 8,
        user: { first_name: 'Andrew', last_name: 'Greene' },
        date: '2016/11/20 14:57:47',
        gender: 'Male',
      },
      {
        id: 9,
        user: { first_name: 'Russell', last_name: 'White' },
        date: '2016/07/13 09:29:49',
        gender: 'Male',
      },
      {
        id: 10,
        user: { first_name: 'Lori', last_name: 'Hunter' },
        date: '2016/12/09 01:44:05',
        gender: 'Female',
      },
      {
        id: 11,
        user: { first_name: 'Ronald', last_name: 'Wood' },
        date: '2016/12/04 02:23:48',
        gender: 'Male',
      },
      {
        id: 12,
        user: { first_name: 'Michael', last_name: 'Harper' },
        date: '2016/07/27 13:28:15',
        gender: 'Male',
      },
      {
        id: 13,
        user: { first_name: 'George', last_name: 'Dunn' },
        date: '2017/03/07 12:26:52',
        gender: 'Male',
      },
      {
        id: 14,
        user: { first_name: 'Eric', last_name: 'Rogers' },
        date: '2016/06/07 05:41:52',
        gender: 'Male',
      },
      {
        id: 15,
        user: { first_name: 'Juan', last_name: 'Meyer' },
        date: '2017/02/01 04:56:34',
        gender: 'Male',
      },
      {
        id: 16,
        user: { first_name: 'Silvia', last_name: 'Rosa' },
        date: '2017/01/26 11:50:04',
        gender: 'Female',
      },
      {
        id: 17,
        user: { first_name: 'Lori', last_name: 'Cunningham' },
        date: '2016/05/01 10:00:56',
        gender: 'Female',
      },
      {
        id: 18,
        user: { first_name: 'Charles', last_name: 'Graham' },
        date: '2016/05/31 06:43:30',
        gender: 'Male',
      },
      {
        id: 19,
        user: { first_name: 'Henry', last_name: 'Morrison' },
        date: '2016/09/27 16:15:44',
        gender: 'Male',
      },
      {
        id: 20,
        user: { first_name: 'Albert', last_name: 'Mendoza' },
        date: '2016/08/08 05:29:24',
        gender: 'Male',
      },
      {
        id: 21,
        user: { first_name: 'Ruby', last_name: 'Snyder' },
        date: '2017/04/01 12:04:39',
        gender: 'Female',
      },
      {
        id: 22,
        user: { first_name: 'Jesse', last_name: 'Warren' },
        date: '2016/08/20 01:36:38',
        gender: 'Male',
      },
      {
        id: 23,
        user: { first_name: 'Carlos', last_name: 'Ferguson' },
        date: '2016/05/31 10:40:29',
        gender: 'Male',
      },
      {
        id: 24,
        user: { first_name: 'Melissa', last_name: 'Peters' },
        date: '2016/07/23 00:41:54',
        gender: 'Female',
      },
      {
        id: 25,
        user: { first_name: 'Arthur', last_name: 'Garza' },
        date: '2017/03/11 14:11:37',
        gender: 'Male',
      },
      {
        id: 26,
        user: { first_name: 'Joe', last_name: 'Berry' },
        date: '2016/07/09 15:16:56',
        gender: 'Male',
      },
      {
        id: 27,
        user: { first_name: 'Joseph', last_name: 'Bishop' },
        date: '2016/10/04 19:44:54',
        gender: 'Male',
      },
      {
        id: 28,
        user: { first_name: 'Sarah', last_name: 'Harper' },
        date: '2016/09/23 05:09:11',
        gender: 'Female',
      },
      {
        id: 29,
        user: { first_name: 'Christopher', last_name: 'Fuller' },
        date: '2016/04/12 00:05:35',
        gender: 'Male',
      },
      {
        id: 30,
        user: { first_name: 'Alan', last_name: 'Mendoza' },
        date: '2016/04/22 10:48:02',
        gender: 'Male',
      },
      {
        id: 31,
        user: { first_name: 'James', last_name: 'Davis' },
        date: '2017/01/16 15:17:03',
        gender: 'Male',
      },
      {
        id: 32,
        user: { first_name: 'Scott', last_name: 'Welch' },
        date: '2016/10/04 23:31:51',
        gender: 'Male',
      },
      {
        id: 33,
        user: { first_name: 'Mildred', last_name: 'Myers' },
        date: '2016/11/23 13:46:18',
        gender: 'Female',
      },
      {
        id: 34,
        user: { first_name: 'Victor', last_name: 'Martinez' },
        date: '2016/04/06 17:05:07',
        gender: 'Male',
      },
      {
        id: 35,
        user: { first_name: 'Susan', last_name: 'Medina' },
        date: '2016/12/09 10:33:37',
        gender: 'Female',
      },
      {
        id: 36,
        user: { first_name: 'Judy', last_name: 'Long' },
        date: '2016/07/26 16:19:04',
        gender: 'Female',
      },
      {
        id: 37,
        user: { first_name: 'Joan', last_name: 'Myers' },
        date: '2016/09/22 04:55:54',
        gender: 'Female',
      },
      {
        id: 38,
        user: { first_name: 'Rachel', last_name: 'Gonzales' },
        date: '2016/07/15 13:56:38',
        gender: 'Female',
      },
      {
        id: 39,
        user: { first_name: 'Roger', last_name: 'Hunt' },
        date: '2016/08/14 10:43:11',
        gender: 'Male',
      },
      {
        id: 40,
        user: { first_name: 'Dorothy', last_name: 'Howard' },
        date: '2016/06/19 05:34:49',
        gender: 'Female',
      },
      {
        id: 41,
        user: { first_name: 'Eugene', last_name: 'Lynch' },
        date: '2016/12/24 08:19:24',
        gender: 'Male',
      },
      {
        id: 42,
        user: { first_name: 'Kathy', last_name: 'Webb' },
        date: '2017/04/01 21:09:05',
        gender: 'Female',
      },
      {
        id: 43,
        user: { first_name: 'Antonio', last_name: 'White' },
        date: '2017/02/10 06:51:20',
        gender: 'Male',
      },
      {
        id: 44,
        user: { first_name: 'Louis', last_name: 'Spencer' },
        date: '2016/10/08 02:20:22',
        gender: 'Male',
      },
      {
        id: 45,
        user: { first_name: 'Andrea', last_name: 'Marshall' },
        date: '2016/09/04 10:59:57',
        gender: 'Female',
      },
      {
        id: 46,
        user: { first_name: 'Eugene', last_name: 'Sims' },
        date: '2017/03/15 06:39:48',
        gender: 'Male',
      },
      {
        id: 47,
        user: { first_name: 'Mildred', last_name: 'Gibson' },
        date: '2016/04/18 06:43:54',
        gender: 'Female',
      },
      {
        id: 48,
        user: { first_name: 'Joan', last_name: 'Arnold' },
        date: '2016/12/16 04:52:23',
        gender: 'Female',
      },
      {
        id: 49,
        user: { first_name: 'Jesse', last_name: 'Schmidt' },
        date: '2016/06/11 02:44:33',
        gender: 'Male',
      },
      {
        id: 50,
        user: { first_name: 'David', last_name: 'Frazier' },
        date: '2017/02/15 21:46:30',
        gender: 'Male',
      },
      {
        id: 51,
        user: { first_name: 'Nicholas', last_name: 'Howell' },
        date: '2016/11/01 15:08:31',
        gender: 'Male',
      },
      {
        id: 52,
        user: { first_name: 'Douglas', last_name: 'Chapman' },
        date: '2017/02/08 03:33:24',
        gender: 'Male',
      },
      {
        id: 53,
        user: { first_name: 'Bruce', last_name: 'Simmons' },
        date: '2016/07/14 12:11:17',
        gender: 'Male',
      },
      {
        id: 54,
        user: { first_name: 'Antonio', last_name: 'George' },
        date: '2016/11/07 19:12:55',
        gender: 'Male',
      },
      {
        id: 55,
        user: { first_name: 'Chris', last_name: 'Marshall' },
        date: '2016/07/03 12:11:45',
        gender: 'Male',
      },
      {
        id: 56,
        user: { first_name: 'Ashley', last_name: 'Hudson' },
        date: '2016/10/14 21:08:05',
        gender: 'Female',
      },
      {
        id: 57,
        user: { first_name: 'Alan', last_name: 'Edwards' },
        date: '2017/03/22 21:10:25',
        gender: 'Male',
      },
      {
        id: 58,
        user: { first_name: 'George', last_name: 'Clark' },
        date: '2016/04/28 03:15:05',
        gender: 'Male',
      },
      {
        id: 59,
        user: { first_name: 'Frank', last_name: 'Porter' },
        date: '2016/09/08 00:48:14',
        gender: 'Male',
      },
      {
        id: 60,
        user: { first_name: 'Christopher', last_name: 'Palmer' },
        date: '2016/05/24 08:58:12',
        gender: 'Male',
      },
    ]

    return {
      data,
      data2,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '100',
          numeric: true,
          searchable: true,
        },
        {
          field: 'first_name',
          label: 'First Name',
          searchable: true,
        },
        {
          field: 'last_name',
          label: 'Last Name',
          searchable: true,
        },
        {
          field: 'date',
          label: 'Date',
          centered: true,
        },
        {
          field: 'gender',
          label: 'Gender',
        },
      ],
      activeTab: 2,
      dropFiles: [],
      count: 1,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      isOpen: 0,
      collapses: [
        {
          title: 'Title 1',
          text: 'Text 1',
        },
        {
          title: 'Title 2',
          text: 'Text 2',
        },
        {
          title: 'Title 3',
          text: 'Text 3',
        },
      ],
      detailData: [
        {
          name: 'Board Games',
          sold: 131,
          available: 301,
          items: [
            {
              name: 'Monopoly',
              sold: 57,
              available: 100,
            },
            {
              name: 'Scrabble',
              sold: 23,
              available: 84,
            },
            {
              name: 'Chess',
              sold: 37,
              available: 61,
            },
            {
              name: 'Battleships',
              sold: 14,
              available: 56,
            },
          ],
        },
        {
          name: 'Jigsaws & Puzzles',
          sold: 88,
          available: 167,
          items: [
            {
              name: 'World Map',
              sold: 31,
              available: 38,
            },
            {
              name: 'London',
              sold: 23,
              available: 29,
            },
            {
              name: 'Sharks',
              sold: 20,
              available: 44,
            },
            {
              name: 'Disney',
              sold: 14,
              available: 56,
            },
          ],
        },
        {
          name: 'Books',
          sold: 434,
          available: 721,
          items: [
            {
              name: 'Hamlet',
              sold: 101,
              available: 187,
            },
            {
              name: 'The Lord Of The Rings',
              sold: 85,
              available: 156,
            },
            {
              name: 'To Kill a Mockingbird',
              sold: 78,
              available: 131,
            },
            {
              name: 'Catch-22',
              sold: 73,
              available: 98,
            },
            {
              name: 'Frankenstein',
              sold: 51,
              available: 81,
            },
            {
              name: "Alice's Adventures In Wonderland",
              sold: 46,
              available: 68,
            },
          ],
        },
      ],
      dataDetails: [
        {
          name: 'Board Games',
          sold: 131,
          available: 301,
          items: [
            {
              name: 'Monopoly',
              sold: 57,
              available: 100,
            },
            {
              name: 'Scrabble',
              sold: 23,
              available: 84,
            },
            {
              name: 'Chess',
              sold: 37,
              available: 61,
            },
            {
              name: 'Battleships',
              sold: 14,
              available: 56,
            },
          ],
        },
        {
          name: 'Jigsaws & Puzzles',
          sold: 88,
          available: 167,
          items: [
            {
              name: 'World Map',
              sold: 31,
              available: 38,
            },
            {
              name: 'London',
              sold: 23,
              available: 29,
            },
            {
              name: 'Sharks',
              sold: 20,
              available: 44,
            },
            {
              name: 'Disney',
              sold: 14,
              available: 56,
            },
          ],
        },
        {
          name: 'Books',
          sold: 434,
          available: 721,
          items: [
            {
              name: 'Hamlet',
              sold: 101,
              available: 187,
            },
            {
              name: 'The Lord Of The Rings',
              sold: 85,
              available: 156,
            },
            {
              name: 'To Kill a Mockingbird',
              sold: 78,
              available: 131,
            },
            {
              name: 'Catch-22',
              sold: 73,
              available: 98,
            },
            {
              name: 'Frankenstein',
              sold: 51,
              available: 81,
            },
            {
              name: "Alice's Adventures In Wonderland",
              sold: 46,
              available: 68,
            },
          ],
        },
      ],
      columnsVisible: {
        name: { title: 'Name', display: true },
        sold: { title: 'Stock Sold', display: true },
        available: { title: 'Stock Available', display: true },
        cleared: { title: 'Stock Cleared', display: true },
      },
      showDetailIcon: true,
      showDefaultDetail: true,
      isImageModalActive: false,
      isCardModalActive: false,
      // selected: data[1],
      checkboxPosition: 'left',
      // checkedRows: [data[1], data[3]],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'small',
      currentPage: 1,
      perPage: 5,
      stickyHeaders: true,
      name: '',
      messages: {},
      currentMenu: { value: 'mr', text: 'Mr.' },
      menus: [
        { value: 'mr', text: 'Mr.' },
        { value: 'mrs', text: 'Mrs.' },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.count++
    }, 3 * 1000)
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    clickMe() {
      alert('Clicked!')
    },
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
  },
  page() {
    return {
      title: 'Welcome',
    }
  },
})
</script>
