import Vue from 'vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// Font Awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// Layout Components
import BlogLayout from '@/layouts/BlogLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import FullScreenLayout from '@/layouts/FullScreenLayout'
import NoHeaderLayout from '@/layouts/NoHeaderLayout'

// Base Elements
import BaseAlert from '@/components/base/BaseAlert'
import BaseBadge from '@/components/base/BaseBadge'
import BaseBlankState from '@/components/base/BaseBlankState'
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import BaseCalendar from '@/components/base/BaseCalendar'
import BaseChart from '@/components/base/BaseChart'
import BaseDirectory from '@/components/base/BaseDirectory'
import BaseIcon from '@/components/base/BaseIcon'
import BaseIconOutlined from '@/components/base/BaseIconOutlined'
import BaseIconSolid from '@/components/base/BaseIconSolid'
import BaseImage from '@/components/base/BaseImage'
import BaseList from '@/components/base/BaseList'
import BaseLogo from '@/components/base/BaseLogo'
import BaseMap from '@/components/base/BaseMap'
import BaseModal from '@/components/base/BaseModal'
import BasePageHeading from '@/components/base/BasePageHeading'
import BaseProgressMeter from '@/components/base/BaseProgressMeter'
import BaseTable from '@/components/base/BaseTable'
import BaseVideo from '@/components/base/BaseVideo'

// Patterns
import ActionsPanel from '@/components/patterns/ActionsPanel'
import AffiliateItem from '@/components/patterns/AffiliateItem'
import AffiliatesTable from '@/components/patterns/AffiliatesTable'
import AnnouncementsPanel from '@/components/patterns/AnnouncementsPanel'
import ApplicantInfo from '@/components/patterns/ApplicantInfo'
import AssignSelect from '@/components/patterns/AssignSelect'
import AutoComplete from '@/components/elements/AutoComplete'
import BillingHistory from '@/components/patterns/BillingHistory'
import CalendarSidebar from '@/components/CalendarSidebar'
import Charts from '@/components/patterns/Charts'
import ClientsTable from '@/components/patterns/ClientsTable'
// import ColorSwitcher from '@/components/elements/ColorSwitcher'
import CourseParticipantsList from '@/components/patterns/CourseParticipantsList'
import CourseParticipantsTable from '@/components/patterns/CourseParticipantsTable'
import DarkModeSwitch from '@/components/patterns/DarkModeSwitch'
import DashboardCalendar from '@/components/DashboardCalendar'
import Divider from '@/components/elements/Divider'
import Dropdown from '@/components/elements/Dropdown'
import FeaturedVideo from '@/components/patterns/FeaturedVideo'
import FormValidation from '@/components/FormValidation'
import Hello from '@/components/Hello'
import Hero from '@/components/patterns/Hero'
import KeyboardShortcut from '@/components/KeyboardShortcut'
import LanguageToggle from '@/components/patterns/LanguageToggle'
import NavbarStepProgress from '@/components/patterns/NavbarStepProgress'
import NotificationsButton from '@/components/patterns/NotificationsButton'
import OverlaySlideOver from '@/components/OverlaySlideOver'
import PaymentDetails from '@/components/patterns/PaymentDetails'
import PeopleTable from '@/components/patterns/PeopleTable'
import Plan from '@/components/patterns/Plan'
import PrivacyPolicyButton from '@/components/PrivacyPolicyButton'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import ProfileBio from '@/components/patterns/ProfileBio'
import ProfileSidebar from '@/components/patterns/ProfileSidebar'
import ProjectsList from '@/components/patterns/ProjectsList'
import ProjectsTable from '@/components/patterns/ProjectsTable'
import QuickLinksButton from '@/components/patterns/QuickLinksButton'
import SettingsGeneralAccount from '@/components/patterns/SettingsGeneralAccount'
import SettingsGeneralProfile from '@/components/patterns/SettingsGeneralProfile'
import SettingsPrivacy from '@/components/patterns/SettingsPrivacy'
import StatsDisplay from '@/components/patterns/StatsDisplay'
import StatsPanels from '@/components/patterns/StatsPanels'
import StepProgress from '@/components/patterns/StepProgress'
import SvgFlorida from '@/components/elements/SvgFlorida'
import SvgGeorgia from '@/components/elements/SvgGeorgia'
import SvgUsa from '@/components/elements/SvgUsa'
import TaskList from '@/components/patterns/TaskList'
import UpcomingItems from '@/components/patterns/UpcomingItems'
import UpcomingTasks from '@/components/patterns/UpcomingTasks'
import WelcomePanel from '@/components/patterns/WelcomePanel'

// Templates
import Courses from '@/components/templates/Courses'
import RecentActivity from '@/components/templates/RecentActivity'
import FileUploadForm from '@/components/templates/FileUploadForm'
import AdvocateInterestForm from '@/components/templates/AdvocateInterestForm'

// import MessageList from '@/components/MessageList'
// import MessagesPageHeading from '@/components/MessagesPageHeading'
// import MessageTable from '@/components/MessageTable'
// import PendingPlaceholder from '@/components/PendingPlaceholder'
// import SearchHeader from '@/components/SearchHeader'
// import Sidebar from '@/components/Sidebar'
// import SidebarCloseButton from '@/components/SidebarCloseButton'
// import SidebarDropdown from '@/components/SidebarDropdown'
// import SidebarDropdownButton from '@/components/SidebarDropdownButton'
// import SidebarMenu from '@/components/SidebarMenu'
// import SidebarOffCanvas from '@/components/SidebarOffCanvas'
// import SidebarSearch from '@/components/SidebarSearch'
// import SidebarToggle from '@/components/SidebarToggle'

// const requireComponent = require.context(
//   './components',
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/,
// )

// requireComponent.keys().forEach(fileName => {
//   const componentConfig = requireComponent(fileName)
//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
//   )
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })

// Font Awesome
library.add(fas)
library.add(fab)
Vue.component('VueFontAwesome', FontAwesomeIcon)

// Layouts
Vue.component('BlogLayout', BlogLayout)
Vue.component('DefaultLayout', DefaultLayout)
Vue.component('FullScreenLayout', FullScreenLayout)
Vue.component('NoHeaderLayout', NoHeaderLayout)

// Vue.component('ColorSwitcher', ColorSwitcher)
// Vue.component('LangSwitcher', LangSwitcher)

// Base Elements
Vue.component('BaseAlert', BaseAlert)
Vue.component('BaseBadge', BaseBadge)
Vue.component('BaseBlankState', BaseBlankState)
Vue.component('BaseBreadcrumb', BaseBreadcrumb)
Vue.component('BaseCalendar', BaseCalendar)
Vue.component('BaseChart', BaseChart)
Vue.component('BaseDirectory', BaseDirectory)
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseIconOutlined', BaseIconOutlined)
Vue.component('BaseIconSolid', BaseIconSolid)
Vue.component('BaseImage', BaseImage)
Vue.component('BaseList', BaseList)
Vue.component('BaseLogo', BaseLogo)
Vue.component('BaseMap', BaseMap)
Vue.component('BaseModal', BaseModal)
Vue.component('BasePageHeading', BasePageHeading)
Vue.component('BaseProgressMeter', BaseProgressMeter)
Vue.component('BaseTable', BaseTable)
Vue.component('BaseVideo', BaseVideo)

// Patterns
Vue.component('ActionsPanel', ActionsPanel)
Vue.component('AffiliateItem', AffiliateItem)
Vue.component('AffiliatesTable', AffiliatesTable)
Vue.component('AnnouncementsPanel', AnnouncementsPanel)
Vue.component('ApplicantInfo', ApplicantInfo)
Vue.component('AssignSelect', AssignSelect)
Vue.component('AutoComplete', AutoComplete)
Vue.component('BillingHistory', BillingHistory)
Vue.component('CalendarSidebar', CalendarSidebar)
Vue.component('Charts', Charts)
Vue.component('ClientsTable', ClientsTable)
Vue.component('CourseParticipantsList', CourseParticipantsList)
Vue.component('CourseParticipantsTable', CourseParticipantsTable)
Vue.component('DarkModeSwitch', DarkModeSwitch)
Vue.component('DashboardCalendar', DashboardCalendar)
Vue.component('Divider', Divider)
Vue.component('Dropdown', Dropdown)
Vue.component('FeaturedVideo', FeaturedVideo)
Vue.component('FormValidation', FormValidation)
Vue.component('Hello', Hello)
Vue.component('Hero', Hero)
Vue.component('KeyboardShortcut', KeyboardShortcut)
Vue.component('LanguageToggle', LanguageToggle)
Vue.component('NavbarStepProgress', NavbarStepProgress)
Vue.component('NotificationsButton', NotificationsButton)
Vue.component('OverlaySlideOver', OverlaySlideOver)
Vue.component('PaymentDetails', PaymentDetails)
Vue.component('PeopleTable', PeopleTable)
Vue.component('Plan', Plan)
Vue.component('PrivacyPolicyButton', PrivacyPolicyButton)
Vue.component('PrivacyPolicyModal', PrivacyPolicyModal)
Vue.component('ProfileBio', ProfileBio)
Vue.component('ProfileSidebar', ProfileSidebar)

Vue.component('ProjectsList', ProjectsList)
Vue.component('ProjectsTable', ProjectsTable)
Vue.component('QuickLinksButton', QuickLinksButton)
Vue.component('SettingsGeneralAccount', SettingsGeneralAccount)
Vue.component('SettingsGeneralProfile', SettingsGeneralProfile)
Vue.component('SettingsPrivacy', SettingsPrivacy)
Vue.component('StatsDisplay', StatsDisplay)
Vue.component('StatsPanels', StatsPanels)
Vue.component('StepProgress', StepProgress)
Vue.component('SvgFlorida', SvgFlorida)
Vue.component('SvgGeorgia', SvgGeorgia)
Vue.component('SvgUsa', SvgUsa)
Vue.component('TaskList', TaskList)
Vue.component('UpcomingItems', UpcomingItems)
Vue.component('UpcomingTasks', UpcomingTasks)
Vue.component('WelcomePanel', WelcomePanel)

// Templates
Vue.component('Courses', Courses)
Vue.component('RecentActivity', RecentActivity)
Vue.component('FileUploadForm', FileUploadForm)
Vue.component('AdvocateInterestForm', AdvocateInterestForm)

// Vue.component('MessageList', MessageList)
// Vue.component('MessagesPageHeading', MessagesPageHeading)
// Vue.component('MessageTable', MessageTable)
// Vue.component('PendingPlaceholder', PendingPlaceholder)
// Vue.component('SearchHeader', SearchHeader)
// Vue.component('Sidebar', Sidebar)
// Vue.component('SidebarCloseButton', SidebarCloseButton)
// Vue.component('SidebarDropdown', SidebarDropdown)
// Vue.component('SidebarDropdownButton', SidebarDropdownButton)
// Vue.component('SidebarMenu', SidebarMenu)
// Vue.component('SidebarOffCanvas', SidebarOffCanvas)
// Vue.component('SidebarSearch', SidebarSearch)
// Vue.component('SidebarToggle', SidebarToggle)
