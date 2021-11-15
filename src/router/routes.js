import Index from '@/views/index'
import Dashboard from '@/views/dashboard'
import Welcome from '@/views/welcome.vue'
import About from '@/views/about'

import Board from '@/views/board.vue'
import Task from '@/views/task.vue'

import EventList from '@/views/events.vue'
import EventLayout from '@/views/event/layout.vue'
import EventDetails from '@/views/event/details.vue'
import EventRegister from '@/views/event/register.vue'
import EventCreate from '@/views/event/create.vue'
import EventEdit from '@/views/event/edit.vue'

import NetworkError from '@/views/network-error'
import NotFound from '@/views/not-found'

import Authenticate from '@/views/authenticate'

export default [
  {
    path: '/',
    name: 'home',
    redirect: {name: 'index'},
  },
  {
    path: '/authenticate',
    name: 'authenticate',
    component: Authenticate,
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    props: {
      showExtra: true,
    },
    meta: {
      layout: 'FullScreenLayout',
      requiresVisitor: true,
    },
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
    props: route => ({showExtra: route.query.e}),
    meta: {
      layout: 'FullScreenLayout',
      requiresVisitor: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: false,
      requiresAdmin: false,
    },
  },
  {
    path: '/advocates',
    name: 'advocates',
    component: () =>
      import(/* webpackChunkName: "advocates" */ '@/views/advocates.vue'),
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: () =>
      import(
        /* webpackChunkName: "announcements" */ '@/views/announcements.vue'
      ),
  },
  {
    path: '/billing',
    name: 'billing',
    component: () =>
      import(/* webpackChunkName: "billing" */ '@/views/billing.vue'),
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    children: [
      {
        path: 'task/:id',
        name: 'task',
        component: Task,
      },
    ],
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () =>
      import(/* webpackChunkName: "calendar" */ '@/views/calendar.vue'),
  },
  {
    path: '/carriers',
    name: 'carriers',
    props: route => ({page: parseInt(route.query.page) || 1}),
    component: () =>
      import(/* webpackChunkName: "carriers" */ '@/views/carriers.vue'),
  },
  {
    path: '/carriers/:id',
    name: 'carrier-layout',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "carrier-layout" */ '@/views/carrier/layout.vue'
      ),
    children: [
      {
        path: '',
        name: 'carrier',
        component: () =>
          import(
            /* webpackChunkName: "carrier-details" */ '@/views/carrier/details.vue'
          ),
      },
      {
        path: 'register',
        name: 'carrier-register',
        component: () =>
          import(
            /* webpackChunkName: "carrier-register" */ '@/views/carrier/register.vue'
          ),
      },
      {
        path: 'edit',
        name: 'carrier-edit',
        component: () =>
          import(
            /* webpackChunkName: "carrier-edit" */ '@/views/carrier/edit.vue'
          ),
      },
    ],
  },
  {
    path: '/carrier/:afterCarrier(.*)',
    redirect: to => {
      return {path: '/carriers/' + to.params.afterCarrier}
    },
  },
  {
    path: '/charts',
    name: 'charts',
    component: () =>
      import(/* webpackChunkName: "charts" */ '@/views/charts.vue'),
  },
  {
    path: '/clients',
    name: 'clients',
    component: () =>
      import(/* webpackChunkName: "clients" */ '@/views/clients.vue'),
  },
  {
    path: '/composition',
    name: 'composition',
    component: () =>
      import(/* webpackChunkName: "composition" */ '@/views/composition.vue'),
  },
  {
    path: '/courses',
    name: 'courses',
    component: () =>
      import(/* webpackChunkName: "courses" */ '@/views/courses.vue'),
  },
  {
    path: '/customers',
    name: 'customers',
    component: () =>
      import(/* webpackChunkName: "customers" */ '@/views/customers/index.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo.vue'),
  },
  {
    path: '/directory',
    name: 'directory',
    component: () =>
      import(/* webpackChunkName: "directory" */ '@/views/directory.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: EventList,
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/events/:id',
    name: 'event-layout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'event',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'event-register',
        component: EventRegister,
      },
      {
        path: 'create',
        name: 'event-create',
        component: EventCreate,
      },
      {
        path: 'edit',
        name: 'event-edit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return {path: '/events/' + to.params.afterEvent}
    },
  },
  {
    path: '/example',
    name: 'example',
    component: () =>
      import(/* webpackChunkName: "example" */ '@/views/example.vue'),
  },
  {
    path: '/examples/form',
    name: 'example-form',
    component: () =>
      import(/* webpackChunkName: "examples" */ '@/views/examples/form.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '@/views/faq.vue'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '@/views/form.vue'),
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: () =>
      import(/* webpackChunkName: "inbox" */ '@/views/inbox.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '@/views/list.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'FullScreenLayout',
      requiresVisitor: true,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login.vue'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '@/views/map.vue'),
  },
  {
    path: '/media',
    name: 'media',
    component: () =>
      import(/* webpackChunkName: "media" */ '@/views/media.vue'),
  },
  {
    path: '/overview',
    name: 'overview',
    component: () =>
      import(/* webpackChunkName: "overview" */ '@/views/overview.vue'),
  },
  {
    path: '/people',
    name: 'people',
    component: () =>
      import(/* webpackChunkName: "people" */ '@/views/people.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/products',
    name: 'products',
    component: () =>
      import(
        /* webpackChunkName: "products" */ '@/views/products/products.vue'
      ),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/profile.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '@/views/projects/index.vue'),
  },

  {
    path: '/services',
    name: 'services',
    component: () =>
      import(/* webpackChunkName: "services" */ '@/views/services.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },

  {
    path: '/reports',
    name: 'reports',
    component: () =>
      import(/* webpackChunkName: "reports" */ '@/views/reports.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/requests',
    name: 'requests',
    component: () =>
      import(/* webpackChunkName: "requests" */ '@/views/requests.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/resources',
    name: 'resources',
    component: () =>
      import(/* webpackChunkName: "resources" */ '@/views/resources.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/resume',
    name: 'resume',
    component: () =>
      import(/* webpackChunkName: "resume" */ '@/views/resume.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () =>
      import(/* webpackChunkName: "settings" */ '@/views/settings.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/support',
    name: 'support',
    component: () =>
      import(/* webpackChunkName: "support" */ '@/views/support.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () =>
      import(/* webpackChunkName: "tasks" */ '@/views/tasks.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '@/views/team.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "todos" */ '@/views/todos'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/training',
    name: 'training',
    component: () =>
      import(/* webpackChunkName: "training" */ '@/views/training.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user.vue'),
    props: route => ({page: parseInt(route.query.page) || 1}),
  },
  {
    path: '/users',
    name: 'users',
    props: route => ({page: parseInt(route.query.page) || 1}),
    component: () =>
      import(/* webpackChunkName: "users" */ '@/views/users/index.vue'),
  },
  {
    path: '/users/:id',
    name: 'user-layout',
    props: true,
    component: () =>
      import(/* webpackChunkName: "users" */ '@/views/users/_id.vue'),
    children: [
      {
        path: '',
        name: 'user-id',
        props: true,
        component: () =>
          import(/* webpackChunkName: "users" */ '@/views/users/_id/index.vue'),
      },
      {
        path: 'register',
        name: 'user-id-register',
        component: () =>
          import(
            /* webpackChunkName: "users" */ '@/views/users/_id/register.vue'
          ),
      },
      {
        path: 'create',
        name: 'user-id-create',
        component: () =>
          import(
            /* webpackChunkName: "users" */ '@/views/users/_id/create.vue'
          ),
      },
      {
        path: 'edit',
        name: 'user-id-edit',
        component: () =>
          import(/* webpackChunkName: "users" */ '@/views/users/_id/edit.vue'),
      },
    ],
  },
  {
    path: '/user/:afterPerson(.*)',
    redirect: to => {
      return {path: '/users/' + to.params.afterPerson}
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404-resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'network-error',
    component: NetworkError,
  },
  {
    path: '*',
    redirect: {name: '404', params: {resource: 'page'}},
  },
]
