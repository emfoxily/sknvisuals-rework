import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
