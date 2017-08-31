import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		"city": localStorage.selectedCity || "北京",
		"searchNear":true,
		"searchHistory":true,
		"suggestsearch":false
	},
	getters: {
		"perfectCity": function(state) {
			return state.city
		}
	},
	mutations: {
		changeCity: function(state, payload){
			state.city = payload.city;
		},
		showNear:function(state,ifshow){
			state.searchNear = ifshow;
		},
		searchHistory:function(state,ifshow){
			state.searchHistory = ifshow;
		},
		suggestsearch:function(state,ifshow){
			state.suggestsearch= ifshow;
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