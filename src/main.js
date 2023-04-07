import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from './router'
import store from './store'
// 全局引入icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(store)
app.use(router)

app.use(ElementPlus)
// 全局引入icon图标并进行注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
import 'virtual:windi.css'

import './permission'
// loading进度条
import 'nprogress/nprogress.css'

import permission from '~/directives/permission.js'
app.use(permission)

app.mount('#app')
