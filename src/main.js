import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueResource from 'vue-resource'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import 'vue-event-calendar/dist/style.css' 
import vueEventCalendar from 'vue-event-calendar'
Vue.use(IScrollView, IScroll)
Vue.use(vueResource);
Vue.use(vueEventCalendar, {locale: 'en',color: 'pink'}) 
fastclick.attach(document.body);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
