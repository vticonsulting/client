<template>
  <main class="flex-1">
    <div v-if="affiliate">
      <BasePageHeading>{{ affiliate.affiliate_name }}</BasePageHeading>

      <nav class="flex items-center p-8 space-x-4">
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'affiliate'}"
        >
          {{ $t('details') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'affiliate-register'}"
        >
          {{ $t('register') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'affiliate-edit'}"
        >
          {{ $t('edit') }}
        </RouterLink>
      </nav>

      <section class="p-8">
        <RouterView :affiliate="affiliate" />
      </section>
    </div>
  </main>
</template>

<script>
import AffiliateService from '@/services/AffiliateService'

export default {
  props: ['id'],
  data() {
    return {
      affiliate: null,
    }
  },
  created() {
    AffiliateService.getAffiliate(this.id)
      .then(response => {
        this.affiliate = response.data
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404-resource',
            params: {resource: 'affiliate'},
          })
        } else {
          this.$router.push({name: 'network-error'})
        }
      })
  },
}
</script>
