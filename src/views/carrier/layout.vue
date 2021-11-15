<template>
  <main class="flex-1">
    <div v-if="carrier">
      <BasePageHeading>{{ carrier.carrier_name }}</BasePageHeading>

      <nav class="flex items-center p-8 space-x-4">
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{ name: 'carrier' }"
        >{{ $t('details') }}</RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{ name: 'carrier-register' }"
        >{{ $t('register') }}</RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{ name: 'carrier-edit' }"
        >{{ $t('edit') }}</RouterLink>
      </nav>

      <section class="p-8">
        <RouterView :carrier="carrier" />
      </section>
    </div>
  </main>
</template>

<script>
import CarrierService from '@/services/CarrierService'

export default {
  props: ['id'],
  data() {
    return {
      carrier: null,
    }
  },
  created() {
    CarrierService.getCarrier(this.id)
      .then(response => {
        this.carrier = response.data
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404-resource',
            params: { resource: 'carrier' },
          })
        } else {
          this.$router.push({ name: 'network-error' })
        }
      })
  },
}
</script>
