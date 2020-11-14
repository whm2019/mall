import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad)//在项目中使用vue-lazyload

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// console.log(new Vue())
import { getHomeContent, getHomeClothes } from 'network/home'

// getHomeContent().then(res => {
//   console.log(res.data.data.list.list)
// }).catch(err => {
//   console.log('failed!')
// })

// getHomeClothes().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log('failed to load clothes!')
// })
// import axios from 'axios'

// axios.get({
//   url: '127.0.0.1/examp.json'
// }).then(res => {
//   console.log(res)
// })
// console.log(typeof(setTimeout(console.log(1), 1000)))

