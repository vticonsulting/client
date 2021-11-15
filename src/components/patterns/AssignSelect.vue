<template>
  <div class="w-full max-w-xs">Listbox</div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const users = [
      'Wade Cooper',
      'Arlene Mccoy',
      'Devon Webb',
      'Tom Cook',
      'Tanya Fox',
      'Hellen Schmidt',
      'Caroline Schultz',
      'Mason Heaney',
      'Claudie Smitham',
      'Emil Schaefer',
    ]

    const selectedPerson = ref(users[0])

    return {
      selectedPerson,
      users,
    }
  },
}
</script>
