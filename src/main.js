import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import vueResource from 'vue-resource'
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'BlFsjzbKOSRMfMVdX8mE9O07Mm80B8mC'
})

// 整个页面使用fastclick避免300毫秒延迟问题
fastclick.attach(document.body);

Vue.config.productionTip = false
Vue.use(vueResource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

