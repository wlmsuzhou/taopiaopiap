// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

Vue.use(VueLazyLoad,{
    error:'./static/error.png',
    loading:'./static/loading.png'
})
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(IScrollView, IScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
