y<template>
  <main class="flex-1">
    <BasePageHeading>{{ $t('carriers') }}</BasePageHeading>
    <section class="p-8">
      <!-- <CarriersTable class="w-full" :carriers="carriers" /> -->
      <article>
        <div v-if="false" class="flex justify-between w-full text-right border">
          <RouterLink
            id="page-prev"
            :to="{ name: 'carriers', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
          >&#60; {{ $t('previous') }}</RouterLink>

          <RouterLink
            class="inline-block"
            id="page-next"
            :to="{ name: 'carriers', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
          >{{ $t('next') }} &#62;</RouterLink>
        </div>

        <div class="overflow-hidden border-b border-gray-200">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3">
            <RouterLink
              v-for="carrier in carriers"
              :key="carrier.id"
              class="flex justify-center col-span-1 px-8 py-8 shadow bg-gray-50"
              :to="{ name: 'carrier', params: { id: carrier.id } }"
            >
              <img
                class="max-h-12"
                :src="`/assets/img/carriers/${carrier.id}/logo_large.png`"
                :alt="carrier.name"
              />
            </RouterLink>
          </div>

          <table v-if="false" class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 dark:bg-black">
              <tr>
                <th class="px-3 text-sm font-medium text-center">
                  <input type="checkbox" value="checked" class="border" />
                </th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"
                >{{ $t('carriers') }}</th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap"
                >{{ $t('contact_name') }}</th>
                <th scope="col" class="relative px-3 py-3">
                  <span class="sr-only">{{ $t('edit') }}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <CarrierItem :carrier="carrier" v-for="carrier in carriers" :key="carrier.id" />
            </tbody>
          </table>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import { watchEffect } from '@vue/composition-api'
import CarrierService from '@/services/CarrierService'

export default {
  name: 'CarriersView',
  props: ['page'],
  metaInfo() {
    return {
      title: 'Carriers',
    }
  },
  data() {
    return {
      carriers: null,
      totalCarriers: 0,
      perPage: 60,
    }
  },
  created() {
    watchEffect(() => {
      this.carriers = null
      CarrierService.getCarriers(this.perPage, this.page)
        .then(response => {
          this.carriers = response.data
          this.totalCarriers = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'network-error' })
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalCarriers / this.perPage)

      return this.page < totalPages
    },
  },
}
</script>
