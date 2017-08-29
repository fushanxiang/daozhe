import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAMap  from 'vue-amap';
/*import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'*/
Vue.use(IScrollView, IScroll)
Vue.use(VueAMap);
Vue.use(vueResource);
VueAMap.initAMapApiLoader({
  key: 'f6b8d097b1d7ef560072dce35c0e81e4',
  // 插件集合
  plugin: ['AMap.Autocomplete',"Geocoder", 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});
Vue.use(VueAwesomeSwiper);
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
