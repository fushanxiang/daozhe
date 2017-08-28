import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueResource from 'vue-resource'

Vue.use(vueResource);

// 整个页面使用fastclick避免300毫秒延迟问题
fastclick.attach(document.body);

Vue.config.productionTip = false

// {
// 	this.$http.get('/static/onedaytour.json').then(response => {
// 		console.log(response)
// 	}, response => {
// 		console.log("error")
// 	});
// }




/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
