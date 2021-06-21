import {reactive, computed} from '@vue/composition-api'

// renderless component
export default function useToggle(value = false) {
  const toggle = reactive({
    value,
    button: computed(() => (
      // Use createElement as h from @vue/composition-api
      <button onClick={() => (toggle.value = !toggle.value)}>
        {toggle.btnText}
      </button>
    )),
    text: computed(() => (toggle.value ? 'ON' : 'OFF')),
    btnText: computed(() => (toggle.value ? 'OFF' : 'ON')),
  })
  return toggle
}
