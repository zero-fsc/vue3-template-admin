import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index'
import 'ant-design-vue/dist/antd.css'
import 'windi.css'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
