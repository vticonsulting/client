<template>
  <div>
    <button id="increment" @click="increment" />
    <button id="submit" @click="submit" />
  </div>
</template>

<script>
import {submitValidator} from '@/helpers/submit-validator'

export default {
  // emits: {
  //   submit: (count) => {
  //     return typeof count !== 'string' && !isNaN(count)
  //   }
  // },
  emits: {
    submit: submitValidator,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.count)
    },
    increment() {
      this.count += 1
    },
  },
}
</script>
