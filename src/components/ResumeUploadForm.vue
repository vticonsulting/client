<template>
  <div class="text-center row">
    <div class="mb-3 col-md-12">
      <label>Upload your resume</label>
      <small>(.pdf or .docx file please)</small>
    </div>
    <div class="mb-3 text-center col-4 offset-4">
      <!-- Upload resume button. Trigger function on browser file upload -->
      <input
        type="file"
        name="resume"
        @change="uploadResume"
        class="form-control-file"
      />
    </div>
    <!-- Render resume to screen if there is one -->
    <div class="col-12">
      <iframe
        v-if="resume"
        :src="
          'https://s3-us-west-1.amazonaws.com/employbl-production/' + resume
        "
        width="800px"
        height="600px"
      />
      <p v-if="!resume" class="text-danger">
        You have not uploaded a resume yet
      </p>
      <p v-if="resume" class="text-success">Resume uploaded successfully</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  props: {
    candidate: {
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    const candidate = JSON.parse(this.candidate)
    return {
      resume: _.get(candidate, 'resume_file_path') || null,
      candidateInfo: {
        id: _.get(candidate, 'id'),
      },
    }
  },
  methods: {
    uploadResume(e) {
      let reader = new FileReader()
      let formData = new FormData()
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      // Read contents of file that's stored on user's computers
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
      reader.onload = e => {
        this.resume = e.target.result
        // Prepare form data to be sent via AJAX
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData
        formData.append('resume', files[0])
        // Async request to upload resume from Laravel backend
        axios
          .post(`/candidates/${this.candidateInfo.id}/resume`, formData)
          .then(response => {
            this.resume = response.data
          })
      }
      // Read contents of the file
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
      reader.readAsDataURL(files[0])
    },
  },
}
</script>
