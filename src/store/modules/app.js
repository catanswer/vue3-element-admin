import storage from '@/utils/storage.js'

const state = {
  sideMenu: {
    opened: storage.get('sideMenuOpened') ? storage.get('sideMenuOpened') : false
  }
}

const mutations = {
  TOGGLE_SIDEMENU(state) {
    state.sideMenu.opened = !state.sideMenu.opened
    if (state.sideMenu.opened) {
      storage.set('sideMenuOpened', true)
    } else {
      storage.set('sideMenuOpened', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}