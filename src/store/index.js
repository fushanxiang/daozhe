import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		"city": localStorage.selectedCity || "北京",
		"searchNear":false
	},
	getters: {
		"perfectCity": function(state) {
			return state.city
		},
		"searchNear":function(state){
			return state.searchNear
		}
	},
	mutations: {
		changeCity: function(state, payload){
			state.city = payload.city;
		},
		showNear:function(state,ifshow){
			state.searchNear = ifshow;
		}
	},
	actions: {
		fiveSecondsChangeCity: function(context, payload) {
			setTimeout(() => {
				context.commit("changeCity",{city: payload.city})
			},5000);
		}
	}
})