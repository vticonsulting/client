import EventService from '@/services/EventService.js'
import {addDays} from 'date-fns'

export const namespaced = true

const getEventIndexById = (state, eventId) =>
  state.events.findIndex(event => event.id.toString() === eventId.toString())

export const state = {
  events: [
    {
      id: 10,
      title: 'Gratitude, Wisdom, Care, Courage, Grit, Celebration',
      date: new Date(),
      allDay: true,
    },
    {
      id: 20,
      title: 'Backlog Grooming/Story Time',
      start: addDays(new Date(), 1),
    },
    {id: 30, title: 'Sprint Planning', start: addDays(new Date(), 2)},
    {id: 40, title: 'Release day', date: '2021-01-30'},
    {id: 50, title: 'The Future of Frontend', date: '2021-02-05'},
  ],
  eventsTotal: 0,
  event: {},
  perPage: 3,
  weekendsVisible: false,
}

export const getters = {
  events: state => state.events,
  weekendsVisible: state => state.weekendsVisible,
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  },
}

export const actions = {
  // createEvent({commit, dispatch}, event) {
  //   return EventService.postEvent(event)
  //     .then(() => {
  //       commit('ADD_EVENT', event)
  //       commit('SET_EVENT', event)
  //       const notification = {
  //         type: 'success',
  //         message: 'Your event has been created!',
  //       }
  //       dispatch('notification/add', notification, {root: true})
  //     })
  //     .catch(error => {
  //       const notification = {
  //         type: 'error',
  //         message: 'There was a problem creating your event: ' + error.message,
  //       }
  //       dispatch('notification/add', notification, {root: true})
  //       throw error
  //     })
  // },

  fetchEvents({commit, dispatch, state}, {page}) {
    return EventService.getEvents(state.perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message,
        }
        dispatch('notification/add', notification, {root: true})
      })
  },

  fetchEvent({commit, getters, state}, id) {
    if (id == state.event.id) {
      return state.event
    }

    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return EventService.getEvent(id).then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      })
    }
  },

  createEvent({commit}, event) {
    commit('CREATE_EVENT', event)
  },

  updateEvent({commit}, updatedEvent) {
    commit('UPDATE_EVENT', updatedEvent)
  },

  deleteEvent({commit}, eventId) {
    commit('DELETE_EVENT', eventId)
  },

  setweekendsVisible({commit}, enabled) {
    commit('SET_WEEKENDS_ENABLED', enabled)
  },
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  },

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
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
