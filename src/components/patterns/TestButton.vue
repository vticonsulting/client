<template>
  <div class="relative ml-3">
    <Transition name="fade" mode="out-in">
      <button @click="changeDocState" v-bind:key="docState">
        {{ buttonMessage }}
      </button>
    </Transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      docState: 'saved',
      docStates: ['saved', 'edited', 'editing'],
      selectedIndex: 0,
    }
  },
  computed: {
    buttonMessage() {
      let selected = ''
      switch (this.docState) {
        case 'saved':
          selected = 'Edit'
          break
        case 'edited':
          selected = 'Save'
          break
        case 'editing':
          selected = 'Cancel'
          break
      }
      return selected
    },
  },
  methods: {
    changeDocState() {
      this.selectedIndex = (this.selectedIndex + 1) % this.docStates.length
      this.docState = this.docStates[this.selectedIndex]
    },
  },
}
</script>
