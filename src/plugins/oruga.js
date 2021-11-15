import Vue from 'vue'
import Oruga from '@oruga-ui/oruga'
import '@oruga-ui/oruga/dist/oruga.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'FontAwesomeIcon',
  button: {
    override: true,
    rootClass: 'button',
    variantClass: 'is-',
    expandedClass: 'w-full',
    roundedClass: 'is-rounded',
    invertedClass: 'is-inverted',
    outlinedClass: 'is-outlined',
  },
  field: {
    override: true,
    labelClass: 'block text-sm font-medium text-gray-700',
    messageClass: 'mt-1 text-sm text-gray-500',
    variantClassDanger: 'bg-red-500',
    variantDanger: 'bg-red-500',
    variantClass: 'text-',
  },
  input: {
    override: true,
    rootClass: 'input-field',
    inputClass: 'input',
    iconLeftClass:
      'absolute inset-y-0 left-0 pl-3 pointer-events-none text-gray-400',
    iconLeftSpaceClass: 'pl-10',
    iconRightClass:
      'absolute inset-y-0 right-0 pr-3 pointer-events-none text-gray-400',
    iconRightSpaceClass: 'pr-10',
    expandedClass: 'w-full',
    roundedClass: 'rounded-full',
    variantClass: 'border-',
  },
  dropdown: {
    // override: true,
    // rootClass: 'flex relative w-full lg:w-auto lg:inline-flex',
    // disabledClass: '',
    // expandedClass: '',
    // inlineClass: '',
    // itemActiveClass: 'bg-primary-500 text-white',
    // itemClass:
    //   'm-1 py-1 px-4 h-11 flex items-center rounded lg:block relative lg:h-auto text-base font-normal leading-normal cursor-pointer outline-none',
    // itemDisabledClass: '',
    // menuActiveClass: '',
    // menuClass:
    //   'absolute shadow left-0 mt-1 w-64 top-full block z-20 shadow p-0 bg-white',
    // menuMobileOverlayClass: '',
    // menuPositionClass: 'is-',
    // mobileClass: '',
    // triggerClass: 'w-full lg:w-auto',
  },
  dropdownItem: {
    override: true,
  },
  // autocomplete: {
  //   override: true,
  //   menuClass:
  //     'border absolute z-10 bg-white shadow-lg rounded-md p-2 mt-2 max-h-72 overflow-auto',
  //   itemClass:
  //     'py-2 px-4 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900',
  //   itemHoverClass: 'bg-gray-100',
  // },
  // checkbox: {
  //   override: true,
  //   rootClass: 'radio',
  //   labelClass: 'ml-1 text-sm font-medium text-gray-700',
  //   checkClass:
  //     'focus:ring-primary-500 h-4 w-4 rounded text-primary-600 border-gray-300',
  //   checkedClass: 'radio-checked',
  // },
  // radio: {
  //   override: true,
  //   rootClass: 'radio',
  //   labelClass: 'ml-1 text-sm font-medium text-gray-700',
  //   checkClass:
  //     'focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300',
  //   checkedClass: 'radio-checked',
  // },

  // select: {
  //   override: true,
  //   rootClass: 'select-field',
  //   expandedClass: 'is-expanded',
  //   selectClass: 'select',
  //   arrowClass: '',
  //   iconLeftClass: '',
  //   iconLeftSpaceClass: '',
  //   iconRightClass: '',
  //   iconRightSpaceClass: '',
  //   multipleClass: '',
  //   placeholderClass: '',
  //   roundedClass: '',
  //   sizeClass: '',
  //   variantClass: '',
  // },
  table: {
    override: true,
    wrapperClass:
      'overflow-hidden bg-white dark:bg-black lg:p-4 rounded shadow',
    borderedClass: 'is-bordered',
    hoverableClass: 'is-hoverable',
    narrowedClass: 'is-narrowed',
    stripedClass: 'is-striped',
    detailedClass: 'border-red-500',
    thClass:
      'px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase tracking-wider',
    thCheckboxClass: 'w-6',
    tdCheckboxClass: 'w-6',
    emptyClass: '',
    footerClass: '',
    mobileClass: '',
    mobileSortClass: '',
    paginationWrapperClass: 'p-8',
    scrollableClass: '',
    stickyHeaderClass: '',
    tableClass: 'table min-w-full divide-y divide-gray-200',
    tdClass: 'py-2 px-6 whitespace-nowrap text-sm text-gray-500',
    tdDetailedChevronClass: '',
    tdPositionClass: 'is-',
    thPositionClass: 'is-',
    tdStickyClass: '',
    thCurrentSortClass: 'relative font-bold bg-gray-200',
    thDetailedClass: '',
    thSortableClass: ' cursor-pointer hover:font-bold',
    thSortIconClass: 'absolute right-0 mr-6',
    thStickyClass: '',
    thUnselectableClass: '',
    trSelectedClass: 'is-selected',
  },
  tabs: {
    override: true,
    rootClass: 'tabs',
    navTabsClass: 'flex -mb-px space-x-8 border-b',
    tabItemWrapperClass:
      'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm',
    itemHeaderClass: 'header-item-',
    itemHeaderActiveClass: 'is-active-',
    itemHeaderTextClass: 'text-sm',
  },
})
