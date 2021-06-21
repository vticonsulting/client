<template>
  <form @submit.prevent="handleSubmit">
    <p v-for="(error, i) of v$.$errors" :key="i">
      <strong>{{ error.$validator }}</strong>
      <small> on property</small>
      <strong>{{ error.$property }}</strong>
      <small> says:</small>
      <strong>{{ error.$message }}</strong>
    </p>

    <p v-for="(error, j) of v$.email.$errors" :key="j">
      <strong>{{ error.$validator }}</strong>
      <small> on property</small>
      <strong>{{ error.$property }}</strong>
      <small> says:</small>
      <strong>{{ error.$message }}</strong>
    </p>

    <div class="field">
      <label for="email" class="block text-sm font-medium text-gray-700">
        {{ $t('email') }}
      </label>
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          id="email"
          :class="[
            'block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm',
            v$.email.$error
              ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
              : 'focus:ring-indigo-500 focus:border-indigo-500 ',
          ]"
          placeholder="you@example.com"
          type="text"
          v-model="email"
          @blur="v$.email.$touch"
        />
        <div
          v-if="v$.email.$error"
          class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
        >
          <BaseIconSolid name="exclamation-circle" class="text-danger" />
        </div>
      </div>
      <p class="mt-2 text-sm text-danger" v-if="v$.email.$error">
        Email field has an error.
      </p>
    </div>

    <button
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      type="submit"
    >
      <BaseIconSolid class="mr-2 -ml-1" name="mail" />
      Submit
    </button>
  </form>
</template>

<script>
// "$dirty": false, You can programmatically update the $dirty state by calling the $touch method. v$.$touch() for more than one property,
// "$invalid": false,
// "$error": false, $error will stay false until both the $dirty and $invalid states are true.
// "$errors": [],
// "$silentErrors": [],
//

import useVuelidate from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      email: '',
    }
  },
  validations() {
    return {
      email: {email, required},
    }
  },
  methods: {
    handleSubmit() {
      this.v$.$touch()
      if (this.v$.$error) return
      // actually submit form
    },
    // async submitForm() {
    //   const isFormCorrect = await this.v$.$validate()
    //   if (!isFormCorrect) return
    //   // actually submit form
    // }
  },
}
</script>

<style scoped>
.error {
  color: red;
  font-size: smaller;
  font-style: italic;
  font-weight: 500;
  margin-top: 4px;
}

ion-item {
  --padding-start: 0px;
}
</style>
