import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.path === '/users/1') {
//     next({path: '/'})
//   }
//   next()
// })

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
