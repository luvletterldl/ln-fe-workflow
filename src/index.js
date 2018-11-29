import Vue from 'vue'
import App from './app/app.vue'

import './app/app.css'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
