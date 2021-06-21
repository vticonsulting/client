<template>
  <section class="p-8">
    <div>
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Personal Information
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        Use a permanent address where you can receive mail.
      </p>
    </div>
    <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="first_name" class="block text-sm font-medium text-gray-700">
          First name
        </label>
        <div class="mt-1">
          <input
            id="first_name"
            type="text"
            name="first_name"
            autocomplete="given-name"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="last_name" class="block text-sm font-medium text-gray-700">
          Last name
        </label>
        <div class="mt-1">
          <input
            id="last_name"
            type="text"
            name="last_name"
            autocomplete="family-name"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-4">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div class="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="country" class="block text-sm font-medium text-gray-700">
          Country / Region
        </label>
        <div class="mt-1">
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div class="sm:col-span-6">
        <label
          for="street_address"
          class="block text-sm font-medium text-gray-700"
        >
          Street address
        </label>
        <div class="mt-1">
          <input
            id="street_address"
            type="text"
            name="street_address"
            autocomplete="street-address"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="city" class="block text-sm font-medium text-gray-700">
          City
        </label>
        <div class="mt-1">
          <input
            id="city"
            type="text"
            name="city"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="state" class="block text-sm font-medium text-gray-700">
          State / Province
        </label>
        <div class="mt-1">
          <input
            id="state"
            type="text"
            name="state"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="zip" class="block text-sm font-medium text-gray-700">
          ZIP / Postal
        </label>
        <div class="mt-1">
          <input
            id="zip"
            type="text"
            name="zip"
            autocomplete="postal-code"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>

    <form class="mt-8" novalidate @submit.prevent="onSubmit">
      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
      >
        <OInput
          type="search"
          icon="search"
          icon-pack="fad"
          placeholder="Search..."
          icon-left-class="text-gray-400"
          icon-left-space-class="pl-8"
          input-class="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
          rounded-class="rounded-full"
          class="max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          rounded
          expanded
        />
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
        :label="t('first_name')"
        :variant="vv?.firstName?.$errors[0]?.$message ? 'danger' : ''"
        :message="vv?.firstName?.$errors[0]?.$message"
      >
        <OInput
          v-model="vv.firstName.$model"
          class="max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          input-class="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
          :override="false"
          name="first_name"
          expanded
        />
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
        :label="t('last_name')"
        :variant="vv?.lastName?.$errors[0]?.$message ? 'danger' : ''"
        :message="vv?.lastName?.$errors[0]?.$message"
      >
        <OInput
          v-model="vv.lastName.$model"
          class="max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          input-class="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
          :override="false"
          name="lastName"
          expanded
        />
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
        :label="t('email')"
        :message="vv?.email?.$errors[0]?.$message"
      >
        <OInput
          v-model="vv.email.$model"
          type="email"
          name="email"
          class="max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          input-class="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
          :override="false"
          expanded
        />
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
        :label="t('password')"
      >
        <OInput
          type="password"
          name="password"
          input-class="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
          :override="false"
          class="max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          expanded
        />
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
        :label="t('bio')"
      >
        <OInput
          v-model="formData.bio"
          maxlength="200"
          type="textarea"
          :has-counter="false"
          rows="5"
          name="bio"
          input-class="text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
          class="w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          :override="true"
          expanded
        />
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
        :label="t('gender')"
      >
        <select
          v-model="vv.gender.$model"
          override
          class="block w-full max-w-lg text-gray-900 bg-white border-gray-300 rounded-md dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          expanded
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </OField>

      <OField
        label-size="small"
        label-class="block text-sm font-medium text-gray-700 dark:text-gray-100"
      >
        <OSwitch v-model="vv.save.$model" name="save"> Save it </OSwitch>
      </OField>

      <OButton v-if="!vv.$invalid" variant="primary" native-type="submit">
        {{ t('save') }}
      </OButton>
      <OButton
        v-if="vv.$invalid"
        variant="primary"
        native-type="submit"
        disabled
      >
        {{ t('save') }}
      </OButton>
      <!-- A Segment Control is a horizontal control made of multiple segments. It provides a compact means of grouping together a number of controls. -->
      <fieldset v-if="false">
        <legend>Legend text</legend>
        <ul class="segmented-control segmented-control--stretched">
          <li>
            <input id="one" type="radio" name="choose1" checked />
            <label for="one">one</label>
          </li>
          <li>
            <input id="two" type="radio" name="choose1" />
            <label for="two">two</label>
          </li>
        </ul>
      </fieldset>
      <fieldset v-if="false">
        <legend>Choose a fruit</legend>
        <ul class="form-list">
          <li>
            <input id="apple" type="radio" name="fruit" aria-describedby="d4" />
            <label class="form-label" for="apple">Apple</label>
          </li>
          <li>
            <input id="pear" type="radio" name="fruit" aria-describedby="d4" />
            <label class="form-label" for="pear">Pear</label>
          </li>
          <li>
            <input
              id="bannana"
              type="radio"
              name="fruit"
              aria-describedby="d4"
            />
            <label class="form-label" for="bannana">Banana</label>
          </li>
        </ul>
        <p id="d4" class="error">Error: At least one option must be chosen</p>
      </fieldset>
    </form>
  </section>
</template>

<script lang="ts">
import {reactive, toRef} from '@vue/composition-api'
import {useRouter} from 'vue-router'
import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import {useI18n} from 'vue-i18n'

export default {
  setup() {
    const {t} = useI18n()

    const formData = reactive({
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      gender: 'Male',
      save: true,
    })

    const rules = {
      firstName: {required},
      lastName: {required},
      email: {required, email},
      gender: {},
      save: {},
    }

    const vv = useVuelidate(rules, {
      firstName: toRef(formData, 'firstName'),
      lastName: toRef(formData, 'lastName'),
      email: toRef(formData, 'email'),
      gender: toRef(formData, 'gender'),
      save: toRef(formData, 'save'),
    })

    // handle the submit of the form, only called
    // if the form is valid
    const onSubmit = () => {
      //   console.log(vv)

      vv.value.$touch()

      if (vv.value.$invalid) return

      //   console.log(vv)
      alert(`Form Submitted ${JSON.stringify(formData, null, 2)}`)
      //   console.log(formData)
    }

    return {
      t,
      router: useRouter(),
      onSubmit,
      vv,
      formData,
    }
  },

  //   setup () {
  //     return { v$: useVuelidate() }
  //   },
  //   validations: {
  //     person: {
  //       required,
  //       minLength: minLength(2),
  //     }
  //   }
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
