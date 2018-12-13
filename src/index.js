import Vue from 'vue'
import App from './app/app.vue'

import './app/app.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
