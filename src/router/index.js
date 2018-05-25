import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from 'views/user/user-info/user-info'
import UserLogin from 'views/user/user-login/user-login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'user-login'
    },
    {
      path: '/user-login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/user-info',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
