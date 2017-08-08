import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import PageNotFound from '@/components/static/PageNotFound'
import SignUp from '@/components/pages/SignUp'
import SignIn from '@/components/pages/SignIn'
import Profile from '@/components/pages/Profile'
import NewNotte from '@/components/pages/NewNotte'

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
      path: '/new',
      name: 'New',
      component: NewNotte
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
    	path: '*',
    	name: 'PageNotFound',
    	component: PageNotFound
    }
  ]
})
