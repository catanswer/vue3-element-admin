import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import app from './modules/app'

const vuexLocal = new VuexPersistence({
  key: 'sideMenuCollapsed',
  modules: ['app'],
  reducer: state => ({
    app: {
      sideMenu: {
        collapsed: state.app.sideMenu.collapsed
      }
    }
  }),
  filter: (mutation) => {
    return mutation.type == 'app/TOGGLE_SIDEMENU'
  }
})

const store = createStore({
  modules: {
    app
  },
  plugins: [vuexLocal.plugin]
})

export default store
