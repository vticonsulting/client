<template>
  <div id="image-upload">
    <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else>
      <img :src="image" />
      <button @click="removeImage">Remove image</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: '',
  }),
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this
      this.image = image
      reader.onload = e => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function () {
      this.image = ''
    },
  },
}
</script>
