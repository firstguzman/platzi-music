import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

import routes from '@/routes'
import store from '@/store'

import EventBus from '@/plugins/event-bus'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(EventBus)

Vue.use(VueRouter)

Vue.use(msToMm)
Vue.use(blur)


const router = new VueRouter({ mode: 'history', routes })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
