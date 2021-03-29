import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './store'
import '@/styles/index.scss'
import SmartLayout from '@/components/SmartLayout/index.js'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import { locale } from 'element-plus'
locale(lang)

// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// 按需引入
import elementPlus from './element'

const app = createApp(App)
// element全局配置
app.config.globalProperties.$ELEMENT = { size: 'small' }
app.use(elementPlus)
app.use(SmartLayout)

app.use(router).use(vuex).mount('#app')
