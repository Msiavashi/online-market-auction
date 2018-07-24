// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
Vue.use(Vuex)
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify)
import storePlugin from './store/storePlugin'
Vue.use(storePlugin)
Vue.config.productionTip = false
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
