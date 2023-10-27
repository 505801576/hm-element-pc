import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from '@/utils/element'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
Vue.config.productionTip = false
new Vue({
  Element,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
