import { $http } from '@/helpers'

export default{
	state: {
		regInfo:{

		}
	},
	mutations: {
		'SET_REG_INFO'(state, payload) {
			state.regInfo ={
				...state.regInfo,
				...payload
			}
		}
	
	},
	getters: {
		'SET_REG_INFO'({ regInfo }){
			return regInfo
		}

	},
	actions: {
		'SET_REG_INFO'(context, payload){
			return $http('http://localhost:3005/registration', payload)
			
		}
	},
	modules: {
	}
}
