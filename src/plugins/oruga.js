import Vue from 'vue'

import Oruga from '@oruga-ui/oruga'

import '@oruga-ui/oruga/dist/oruga.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'FontAwesomeIcon',
  //   statusIcon: false,
  //   button: {
  //     override: true,
  //     rootClass: 'btn',
  //   },
  //   radio: {
  //     rootClass: 'radio',
  //     labelClass: 'radio-label',
  //     checkClass: 'radio-check',
  //     checkedClass: 'radio-checked',
  //   },
  //   field: {
  //     override: true,
  //     labelClass: 'field-label',
  //     messageClass: 'text-xs italic',
  //     variantClass: 'field-',
  //   },
  //   input: {
  //     override: true,
  //     inputClass: 'input focus:outline-none focus:shadow-outline',
  //     roundedClass: 'rounded',
  //     variantClass: 'input-',
  //   },
  //   dropdown: {
  //     menuClass: 'dropdown-menu',
  //     itemClass: 'dropdown-item',
  //     itemActiveClass: 'dropdown-item-active',
  //   },
  //   loading: {
  //     overlayClass: 'loading-background',
  //   },
  //   icon: {
  //     override: true,
  //     spinClass: 'fa-spin',
  //   },
  //   switch: {
  //     checkClass: 'switch',
  //     labelClass: 'switch-label',
  //   },
})
