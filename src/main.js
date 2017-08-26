import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'


//在一个模块化工程中使用它,明确地安装 vue-bus

// 整个页面使用fastclick避免300毫秒延迟问题
fastclick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
