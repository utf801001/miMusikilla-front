import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import MusikillaAPI from './plugins/api/index'

Vue.use(MusikillaAPI, {baseURL: 'https://mimusikilla-front.herokuapp.com/'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
