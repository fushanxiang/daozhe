import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		"city": "北京"
	},
	getters: {
		"perfectCity": function(state) {
			return state.city
		}
	},
	mutations: {
		changeCity: function(state, payload){
			state.city = payload.city;
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