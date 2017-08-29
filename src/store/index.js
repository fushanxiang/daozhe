import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      "city": "南京"
    },

    getters: {
    	"perfectCity": function(state) {
    		return state.city + "-,-"
    	}
    },

    mutations: {
    	changeCity: function(state, newCity) {
    		state.city = newCity;
    	}
    },

    actions: {
    	fiveSecondsChangeCity: function(context) {
    		setTimeout(() => {
    			context.commit("changeCity","上海")
    		},5000)
    	}
    }
})  

