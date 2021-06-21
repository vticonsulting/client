<template>
  <div>
    <input
      type="file"
      class="filepond"
      name="filepond"
      multiple
      data-allow-reorder="true"
      data-max-file-size="3MB"
      data-max-files="3"
    />

    <file-pond
      max-files="3"
      name="test"
      ref="pond"
      label-idle="Drop files here..."
      v-bind:allow-multiple="true"
      accepted-file-types="image/jpeg, image/png"
      server="/api"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
    />
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'

const FilePond = vueFilePond(
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageEdit,
)

export default {
  name: 'app',
  data() {
    return {myFiles: ['cat.jpeg']}
  },
  methods: {
    handleFilePondInit() {
      // console.log('FilePond has initialized')
      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
  components: {
    FilePond,
  },
}
</script>
