import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import PageNotFound from '@/components/static/PageNotFound'
import SignUp from '@/components/pages/SignUp'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/sign-up',
    	name: 'SignUp',
    	component: SignUp
    },
    {
    	path: '*',
    	name: 'PageNotFound',
    	component: PageNotFound
    }
  ]
})
