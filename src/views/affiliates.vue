y<template>
  <main class="flex-1">
    <BasePageHeading> {{ $t('affiliates') }}</BasePageHeading>
    <section class="p-8">
      <!-- <AffiliatesTable class="w-full" :affiliates="affiliates" /> -->
      <article>
        <div v-if="false" class="flex justify-between w-full text-right border">
          <RouterLink
            id="page-prev"
            :to="{name: 'affiliates', query: {page: page - 1}}"
            rel="prev"
            v-if="page != 1"
          >
            &#60; {{ $t('previous') }}
          </RouterLink>

          <RouterLink
            class="inline-block"
            id="page-next"
            :to="{name: 'affiliates', query: {page: page + 1}}"
            rel="next"
            v-if="hasNextPage"
          >
            {{ $t('next') }} &#62;
          </RouterLink>
        </div>

        <div class="overflow-hidden border-b border-gray-200">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3">
            <RouterLink
              v-for="affiliate in affiliates"
              :key="affiliate.id"
              class="flex justify-center col-span-1 px-8 py-8 shadow bg-gray-50"
              :to="{name: 'affiliate', params: {id: affiliate.id}}"
            >
              <img
                class="max-h-12"
                :src="`/assets/img/affiliates/${affiliate.id}/logo_large.png`"
                :alt="affiliate.name"
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
                >
                  {{ $t('affiliates') }}
                </th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap"
                >
                  {{ $t('contact_name') }}
                </th>
                <th scope="col" class="relative px-3 py-3">
                  <span class="sr-only">{{ $t('edit') }}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <AffiliateItem
                :affiliate="affiliate"
                v-for="affiliate in affiliates"
                :key="affiliate.id"
              />
            </tbody>
          </table>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import {watchEffect} from '@vue/composition-api'
import AffiliateService from '@/services/AffiliateService'

export default {
  name: 'AffiliatesView',
  props: ['page'],
  metaInfo() {
    return {
      title: 'Affiliates',
    }
  },
  data() {
    return {
      affiliates: null,
      totalAffiliates: 0,
      perPage: 60,
    }
  },
  created() {
    watchEffect(() => {
      this.affiliates = null
      AffiliateService.getAffiliates(this.perPage, this.page)
        .then(response => {
          this.affiliates = response.data
          this.totalAffiliates = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({name: 'network-error'})
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalAffiliates / this.perPage)

      return this.page < totalPages
    },
  },
}
</script>
