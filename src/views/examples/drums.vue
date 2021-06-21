<template>
  <main class="flex-1 w-full bg-gray-100">
    <section class="flex items-center justify-center gap-4 p-8">
      <OButton @click="play({id: 'kick'})" label="Kick">🥁</OButton>

      <OButton @click="play({id: 'hihat'})" label="Hi-hat">🎩</OButton>

      <OButton @click="play({id: 'snare'})" label="Snare">🍗</OButton>

      <OButton @click="play({id: 'cowbell'})" label="Cowbell">🔔</OButton>
    </section>
  </main>
</template>

<script>
import {onMounted, onUnmounted} from '@vue/composition-api'
import {useSound} from '@vueuse/sound'
import drumSfx from '@/assets/sound/909_drums.mp3'

const useKeyboardBindings = map => {
  const handlePress = ev => {
    const handler = map[ev.key]

    if (typeof handler === 'function') {
      handler()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handlePress)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handlePress)
  })
}

export default {
  setup() {
    const {play} = useSound(drumSfx, {
      sprite: {
        kick: [0, 350],
        hihat: [374, 160],
        snare: [666, 290],
        cowbell: [968, 200],
      },
    })

    useKeyboardBindings({
      1: () => play({id: 'kick'}),
      2: () => play({id: 'hihat'}),
      3: () => play({id: 'snare'}),
      4: () => play({id: 'cowbell'}),
    })

    return {
      play,
    }
  },
}
</script>
