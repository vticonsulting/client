<template>
  <div class="task-view">
    <div class="flex flex-col items-start justify-between flex-grow px-4">
      <input
        type="text"
        class="block w-full p-2 mr-2 text-xl font-bold"
        :value="task.name"
        @change="updateTaskProperty($event, 'name')"
        @keyup.enter="updateTaskProperty($event, 'name')"
      />

      <textarea
        class="relative w-full h-64 px-2 mt-2 leading-normal bg-transparent border border-none"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id)
    },
  },
  methods: {
    updateTaskProperty(e, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value,
      })
    },
  },
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white inset-0 mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
