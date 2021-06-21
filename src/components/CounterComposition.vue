<template>
  <div>
    <button id="increment" @click="increment" />
    <button id="submit" @click="submit" />
  </div>
</template>

<script>
import {submitValidator} from '@/helpers/submit-validator'
import {ref} from '@vue/composition-api'

export default {
  emits: {
    submit: submitValidator,
  },
  setup(props, {emit}) {
    const count = ref(0)

    const increment = () => {
      count.value += 1
    }
    const submit = () => {
      emit('submit', count.value)
    }

    return {
      count,
      increment,
      submit,
    }
  },
}
</script>
