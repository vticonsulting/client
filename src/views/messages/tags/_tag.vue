<template>
  <MessageTable :data="taggedMessages" />
</template>

<script>
import {defineComponent, watch, computed} from '@vue/composition-api'
import useMessages from '@/composables/useMessages'
import {useRoute} from 'vue-router'

export default defineComponent({
  name: 'TagPage',
  setup(props, context) {
    const {messages} = useMessages()
    const route = useRoute()

    console.log(props)
    console.log(context)

    console.debug(`current route name on component setup init: ${route.name}`)

    const taggedMessages = computed(() => {
      return messages.value.filter(message =>
        message.tags.includes(route.params.tag),
      )
    })

    // function dataGet() {
    //   alert("dataGet");
    // }

    // reactive!
    // watch(() => context.root.$route, () => dataGet())

    // You could use computed property which re-evaluates on route name updates
    // const routeName = computed(() => route.name);

    // You can watch the property for triggering some other action on change
    watch(
      () => route.name,
      () => {
        console.debug(
          `MyCoolComponent - watch route.name changed to ${route.name}`,
        )
        // Do something here...

        // Optionally you can set immediate: true config for the watcher to run on init
        //}, { immediate: true });
      },
    )

    return {
      messages,
      route,
      taggedMessages,
    }
  },
  computed: {
    taggedMessages() {
      return this.messages.filter(message =>
        message.tags.includes(this.$route.params.tag),
      )
    },
  },
})
</script>
