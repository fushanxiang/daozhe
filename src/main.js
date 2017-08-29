// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueResource from 'vue-resource'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
 

Vue.use(IScrollView, IScroll)
Vue.use(vueResource);
fastclick.attach(document.body);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
