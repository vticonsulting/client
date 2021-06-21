export const namespaced = true

export const state = () => ({
  isMenuOpen: false,
  open: false,
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.isMenuOpen = !state.isMenuOpen
  },
  OPEN_MENU(state) {
    state.isMenuOpen = true
  },
  CLOSE_MENU(state) {
    state.isMenuOpen = false
  },

  TOGGLE(state, open) {
    state.open = open !== undefined ? open : !state.open
  },

  CLOSE(state) {
    state.open = false
  },
}

export default {
  namespaced,
  state,
  mutations,
}
