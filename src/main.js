import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'
import Store from './store'
import VueToast from 'vue-toast-notification';
import './assets/styles/global.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCookies, {expires: '3h'})
Vue.use(VueRouter)

Vue.use(VueToast, {
    position: 'top-right', duration: 5000
});
const router = new VueRouter({
    routes: Routes, mode: "history",
})

router.beforeEach((to, from, next) => {
    if (to.path.startsWith("/user") || to.path.startsWith("/company")) {
        let user = Vue.$cookies.get('user')
        console.log(to.path)
        if (!user) {
            next('/login')
        }
        if (user.role === "company") {
            if (to.path.startsWith("/user")) {
                next(to.path.replace('user', 'company'))
            }
        }
        if (user.role === "user") {
            if (to.path.startsWith("/company")) {
                next(to.path.replace('company', 'user'))
            }
        }
    }
    next()
})

new Vue({
    vuetify, render: h => h(App), router: router, store: Store
}).$mount('#app')

