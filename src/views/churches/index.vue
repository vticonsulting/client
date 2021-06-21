<template>
  <main class="flex-1">
    <BasePageHeading>{{ t('churches') }}</BasePageHeading>
  </main>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useI18n} from 'vue-i18n'

export default {
  setup() {
    const {t, locale} = useI18n()
    const store = useStore()

    return {
      t,
      locale,
      // access a state in computed function
      count: computed(() => store.state.count),

      // access a getter in computed function
      double: computed(() => store.getters.double),

      // access a mutation
      increment: () => store.commit('increment'),

      // access an action
      asyncIncrement: () => store.dispatch('asyncIncrement'),
    }
  },
}
</script>
