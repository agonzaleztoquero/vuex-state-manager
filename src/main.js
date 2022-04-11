// import Vue from 'vue'
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
// import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'

// Vue.use(VueRouter)

const router = createRouter({
  routes,
  history:createWebHistory()
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')


// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   router,
//   store
// }).$mount('#app')
