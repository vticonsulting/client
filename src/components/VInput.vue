<script>
function getError(value, {min, max}) {
  if (!value) {
    return 'Required'
  }
  if (value.length < min) {
    return `Min is ${min}`
  }
  if (value.length > max) {
    return `Max is ${max}`
  }
}

import {computed} from '@vue/composition-api'

export default {
  props: ['min', 'max', 'value'],
  setup(props, ctx) {
    const error = computed(() =>
      getError(props.value, {min: props.min, max: props.max}),
    )
    return () =>
      ctx.slots.default({
        error: error.value,
      })
  },
}
</script>
