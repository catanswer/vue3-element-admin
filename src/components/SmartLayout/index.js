import SmartLayout from './index.vue'

const compoents =  {
  install(Vue) {
    Vue.component('SmartLayout', SmartLayout)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default compoents