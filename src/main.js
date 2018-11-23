import Vue from 'vue'
import './cube-ui'
import './utils/register'
import App from './App.vue'

import 'assets/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
