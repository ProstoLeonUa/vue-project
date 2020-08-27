import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/views/Auth'
import Dashboard from '@/views/Dashboard'
import store from '@/store/index'
import Product from '@/components/product/Product.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/auth',
		name: 'auth',
		component: Auth
	},
	{
		path: '/',
		name: 'dashboard',
		component: Dashboard,


	},
	{
		path: '/:id',
		name: 'product',
		component: Dashboard,

	}

]

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {

	const isReg = store.getters['GET_AUTH_ENTER']
	if (!isReg && to.name != 'auth') {
		next('/auth')
	} else {
		next()
	}

})

export default router
