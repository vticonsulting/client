<template>
  <div id="component">
    <file-pond
      name="test"
      ref="pond"
      label-idle="Drop files here..."
      allow-multiple="true"
      v-bind:server="myServer"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
    />
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
const FilePond = vueFilePond()

export default {
  data() {
    return {
      // fake server to simulate loading a 'local' server file and processing a file
      myServer: {
        process: (fieldName, file, metadata, load) => {
          // simulates uploading a file
          setTimeout(() => {
            load(Date.now())
          }, 1500)
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source)
            .then(res => res.blob())
            .then(load)
        },
      },
      myFiles: [
        {
          source: 'photo.jpeg',
          options: {
            type: 'local',
          },
        },
      ],
    }
  },
  methods: {
    handleFilePondInit: function() {
      // FilePond instance methods are available on `this.$refs.pond`
      /* eslint-disable */
      console.log('FilePond has initialized')
    },
  },
  components: {
    FilePond,
  },
}
</script>
