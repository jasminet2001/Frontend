import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
import VueCookies from 'vue-cookies'
Vue.use(VueCookies,{expires: '3h'})
Vue.use(VueRouter)
const router=new VueRouter({
    routes:Routes,
    mode:"history"
})
new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
