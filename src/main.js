import Vue from 'vue'
import App from '@/App.vue'
import '@/configs/cube-ui'
import '@/configs/registerServiceWorker'
import '@/utils/register'

import '@/assets/stylus/base.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
