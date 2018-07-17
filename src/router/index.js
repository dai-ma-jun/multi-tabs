import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
//
import NotFuoud from '@/pages/common/404';
import NoAccess from '@/pages/common/403';
import ServiceError from '@/pages/common/500';

//
import Login from '@/pages/common/Login';
import Home from '@/pages/home/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/403',
      name: 'NoAccess',
      component: NoAccess
    }, {
      path: '/404',
      name: 'NotFuoud',
      component: NotFuoud
    }, {
      path: '/500',
      name: 'ServiceError',
      component: ServiceError
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
});
