const state = {
  sideMenu: {
    collapsed: false
  }
}

const mutations = {
  TOGGLE_SIDEMENU(state) {
    state.sideMenu.collapsed = !state.sideMenu.collapsed
  }
}

export default {
  namespaced: true,
  state,
  mutations
}