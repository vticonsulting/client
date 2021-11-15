<script>
export default {
  props: {
    carrier: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showMenu: true,
    }
  },
}
</script>

<template>
  <tr class="bg-white dark:bg-black dark:text-white">
    <td class="px-3 text-sm font-medium text-center whitespace-nowrap">
      <input type="checkbox" value="checked" class="border" />
    </td>
    <td class="px-3 py-4 text-sm font-medium text-center whitespace-nowrap">
      <img class="w-auto h-11" :src="`/assets/img/carriers/${carrier.id}/logo_large.png`" />
    </td>
    <td class="px-3 text-sm font-medium whitespace-nowrap">
      <RouterLink
        class="text-blue-500"
        :to="{ name: 'carrier', params: { id: carrier.id } }"
      >{{ carrier.carrier_name }}</RouterLink>
      <br />
      <small class="font-light tracking-widest uppercase text-2xs">
        {{ carrier.carrier_address_city }},
        {{ carrier.carrier_address_state }}
      </small>
    </td>
    <td class="px-3 text-sm whitespace-nowrap">{{ carrier.carrier_contact_name }}</td>
    <td class="px-3 text-sm font-medium text-right whitespace-nowrap">
      <!-- DropdownRowActions -->
      <div>
        <button
          @click="showMenu = !showMenu"
          type="button"
          class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <svg
            :class="{ 'transform rotate-90': showMenu }"
            class="w-6 h-6 mr-1 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </td>
  </tr>
</template>
