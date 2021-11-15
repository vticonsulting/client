import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { addDays } from 'date-fns'
import defaultBoard from '@/default-board'
import { saveStatePlugin, uuid } from '@/helpers'

// import auth from '@/store/modules/auth'
import event from '@/store/modules/event'
// import feature from '@/store/modules/feature'
// import menu from '@/store/modules/menu'
import message from '@/store/modules/message'
import notification from '@/store/modules/notification'
import products from '@/store/modules/products'
// import user from '@/store/modules/user'
import customers from '@/data/customers'


Vue.use(Vuex)

// Note: you may want to split your store to modules, but for simplicity we create all globally
const ADD_USERS = 'ADD_USERS'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

const getEventIndexById = (state, eventId) =>
    state.events.findIndex(event => event.id.toString() === eventId.toString())

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [saveStatePlugin],
    modules: {
        event,
        message,
        notification,
        products,
    },

    state: {
        isMenuOpen: false,
        customers: JSON.parse(JSON.stringify(customers)),
        events: [
            // {
            //   id: 10,
            //   title: 'Gratitude, Wisdom, Care, Courage, Grit, Celebration',
            //   date: new Date(),
            //   allDay: true,
            // },
            {
                id: 20,
                title: 'Backlog Grooming/Story Time',
                start: addDays(new Date(), 1),
            },
            { id: 30, title: 'Sprint Planning', start: addDays(new Date(), 2) },
            { id: 40, title: 'Release day', date: '2021-01-30' },
            // {id: 50, title: 'The Future of Frontend', date: '2021-02-05'},
        ],
        pages: {
            home: { name: 'Home', icon: 'home' },
            dashboard: { name: 'Dashboard', icon: 'template' },
            projects: { name: 'Projects', icon: 'collection' },
            calendar: { name: 'Calendar', icon: 'calendar' },
            customer: { name: 'Customers', icon: 'office-building' },
            billing: { name: 'Billing', icon: 'credit-card' },
            reports: { name: 'Reports', icon: 'document-report' },
            settings: { name: 'Settings', icon: 'cog' },
        },
        quotes: [
            {
                id: 1,
                text: 'A goal should scare you a little and excite you a lot.',
                attribution: 'Joe Vitale',
            },
            {
                id: 2,
                text: 'There is a destiny that makes us brothers; none goes his way alone. What we put into the lives of others, comes back into our own.',
                attribution: 'Edwin Markham',
            },
            {
                id: 3,
                text: 'Simplicity is the ultimate sophistication',
                attribution: 'Leonardo da Vinci',
                created_at: '',
                source: {
                    title:
                        'Presentation Zen: Simple Ideas on Presentation Design and Delivery',
                    author: 'Gar Reynolds',
                },
            },
            {
                id: 4,
                text: 'Invention requires a long term willingness to be misunderstood',
                attribution: 'Jeff Bezos',
                created_at: '',
                source: {
                    title: '',
                    author: '',
                    url: '',
                },
            },
        ],
        board,
        user: null,
        isNewUser: true,
        users: [],
        posts: [],
        todos: [
            {
                id: 1,
                name: 'Buy Milk',
                isComplete: false,
            },
            {
                id: 2,
                name: 'Buy Eggs',
                isComplete: false,
            },
            {
                id: 3,
                name: 'Buy Bread',
                isComplete: false,
            },
            {
                id: 4,
                name: 'Make French Toast',
                isComplete: false,
            },
        ],
        topics: [
            'Evaluation',
            'Health and Wellness',
            'Literature Review',
            'Literature',
            'Needs Assessment',
            'Report',
            'Strategic Prevention Framework',
            'Strategy',
            'Substance Abuse',
            'Suicide',
            'Technical Assistance',
            'Webinar',
        ],
        weekendsVisible: false,
    },

    getters: {
        events: state => state.events,
        weekendsVisible: state => state.weekendsVisible,
        getTask(state) {
            return id => {
                for (const column of state.board.columns) {
                    for (const task of column.tasks) {
                        if (task.id === id) {
                            return task
                        }
                    }
                }
            }
        },
        titles: state => {
            var allTitles = state.customers.map((item) => {
                return item.ContactTitle
            })

            return allTitles.filter((value, index, self) => {
                return self.indexOf(value) === index;
            })
        },
        customerIds: state => {
            return state.customers.map((item) => {
                return item.CustomerID
            })
        }
    },

    actions: {
        sendWindowHeight() {
            window.parent.postMessage({ windowHeight: document.body.scrollHeight }, '*')
        },
        createEvent({ commit }, event) {
            commit('CREATE_EVENT', event)
        },

        updateEvent({ commit }, updatedEvent) {
            commit('UPDATE_EVENT', updatedEvent)
        },

        deleteEvent({ commit }, eventId) {
            commit('DELETE_EVENT', eventId)
        },

        setweekendsVisible({ commit }, enabled) {
            commit('SET_WEEKENDS_ENABLED', enabled)
        },
        async fetchUsers({ commit }, config) {
            const users = await this.$api.users.fetch(config)
            commit(ADD_USERS, users)
            console.log({ message: 'Users from vuex', users })
        },

        async createPost({ commit }, post) {
            const id = await this.$api.posts.post(post)
            commit(ADD_POST, { ...post, id })
            console.log({ message: 'Created post', post: { ...post, id } })
        },

        async updatePost({ commit }, post) {
            const id = await this.$api.posts.put(post.id, post)
            commit(UPDATE_POST, post)
            console.log({ message: 'Updated post', post: { post, id } })
        },

        register({ commit }, credentials) {
            return axios
                .post('//localhost:3000/register', credentials)
                .then(({ data }) => {
                    commit('SET_USER_DATA', data)
                })
        },

        login({ commit }, credentials) {
            return axios
                .post('//localhost:3000/login', credentials)
                .then(({ data }) => {
                    commit('SET_USER_DATA', data)
                })
        },

        logout({ commit }) {
            commit('LOGOUT')
        },

        isNewUser({ commit }, isNewUser) {
            commit('IS_NEW_USER', isNewUser)
        },

        add(context, customer) {
            return new Promise((resolve, reject) => {
                if (context.getters.customerIds.indexOf(customer.CustomerID) > -1) {
                    reject('This Customer ID exists!')
                } else if (customer.CustomerID === '') {
                    reject('Customer ID cannot be empty!')
                } else {
                    context.commit('add', customer)
                    resolve(context.getters.customerIds.indexOf(customer.CustomerID))
                }
            })
        },
        remove(context, customer) {
            return new Promise((resolve, reject) => {
                var foundCustomer = context.state.customers.find((cust) => {
                    return cust.CustomerID === customer.CustomerID
                })

                var index = context.state.customers.indexOf(foundCustomer)

                if (!customer || index < 0) {
                    reject('Customer not found!')
                } else {
                    context.commit('remove', index)
                    resolve(Object.assign({}, foundCustomer))
                }
            })
        }
    },

    mutations: {
        CREATE_EVENT(state, event) {
            return state.events.push(event)
        },

        UPDATE_EVENT(state, updatedEvent) {
            const index = getEventIndexById(state, updatedEvent.id)

            if (index === -1) {
                // eslint-disable-next-line
                return console.warn(`Unable to update event (id ${updatedEvent.id})`)
            }

            return state.events.splice(index, 1, {
                ...state.events[index],
                title: updatedEvent.title,
                start: updatedEvent.start,
                end: updatedEvent.end,
                date: updatedEvent.date,
            })
        },

        DELETE_EVENT(state, eventId) {
            const index = getEventIndexById(state, eventId)

            if (index === -1) {
                // eslint-disable-next-line
                return console.warn(`Unable to delete event (id ${eventId})`)
            }

            return state.events.splice(index, 1)
        },

        SET_WEEKENDS_ENABLED(state, enabled) {
            state.weekendsVisible = enabled
        },

        SET_USER_DATA(state, userData) {
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${userData.token}`
            state.user = userData
        },

        SET_USER_INFO(state, userInfo) {
            // localStorage.setItem('user', JSON.stringify(userInfo))
            state.user = userInfo
        },

        LOGOUT() {
            localStorage.removeItem('user')
            location.reload()
        },

        IS_NEW_USER(state, isNewUser) {
            state.isNewUser = isNewUser
        },

        CREATE_TASK(state, { tasks, name }) {
            tasks.push({
                name,
                id: uuid(),
                description: '',
            })
        },

        CREATE_COLUMN(state, { name }) {
            state.board.columns.push({
                name,
                tasks: [],
            })
        },

        UPDATE_TASK(state, { task, key, value }) {
            task[key] = value
        },

        MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
            const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
            toTasks.splice(toTaskIndex, 0, taskToMove)
        },

        MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
            const columnList = state.board.columns

            const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
            columnList.splice(toColumnIndex, 0, columnToMove)
        },

        [ADD_USERS](state, users) {
            state.users = users
        },
        [ADD_POST](state, post) {
            state.posts = [...state.posts, post]
        },
        [UPDATE_POST](state, post) {
            const index = state.posts.findIndex(({ id }) => id === post.id)
            if (!~index) state.posts.splice(index, 1, post)
        },

        edit(state, customer) {
            var foundCustomer = state.customers.find((cust) => {
                return cust.CustomerID === customer.CustomerID
            })

            var index = state.customers.indexOf(foundCustomer)

            state.customers[index] = customer
        },
        add(state, customer) {
            state.customers.push(customer)
        },
        remove(state, index) {
            state.customers.splice(index, 1)
        },
        load(state, customersJson) {
            state.customers = JSON.parse(customersJson)
        },
        reset(state) {
            state.customers = JSON.parse(JSON.stringify(customers))
        }
    },
})

export * from './modules/mutation-types'

export default store
