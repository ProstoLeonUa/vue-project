import Vue from 'vue'
import Vuex from 'vuex'
import { $http, $http_get } from '@/helpers'
import registration from './registration/index'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		signIn: false,
		isReg: false,
		menuIsOpen: false,
		items: []
	},
	mutations: {
		'AUTH_ENTER'(state, payload) {
			localStorage.isAuthorized = payload.isAuthorized;
			state.signIn = payload.isAuthorized;
		},
		'IS_REG'(state, payload) {
			state.isReg = payload
		},
		'SET_ITEM'(context, payload) {
			context.items = [
				...context.items,
				...payload
			];
		}
	},
	getters: {
		'GET_AUTH_ENTER'({ signIn }) {
			signIn = localStorage.isAuthorized
			return signIn
		},
		'GET_ITEMS'({ items }) {
			return items
		}
	},
	actions: {
		'AUTH'(context, payload) {
			return $http("http://localhost:3005/auth", payload);
		},
		'SET_ITEM'(context, payload) {
			$http_get(payload)
				.then(res => { context.commit('SET_ITEM', res.data) })
				.catch(e => { console.log(e) })
		}
	},
	modules: {
		registration
	}
})
