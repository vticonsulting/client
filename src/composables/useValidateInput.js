import {computed} from 'vue'

const useValidateInput = (value, min, max) => {
  const error = computed(() => {
    if (!value) {
      return 'Required'
    }
    if (value.length < min) {
      return `Min is ${min}`
    }
    if (value.length > max) {
      return `Max is ${max}`
    }
    return {error}
  })
}

export default useValidateInput
