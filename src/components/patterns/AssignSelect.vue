<template>
  <div class="w-full max-w-xs">
    Listbox
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'

export default {
  setup() {
    const people = [
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

    const selectedPerson = ref(people[0])

    return {
      selectedPerson,
      people,
    }
  },
}
</script>
