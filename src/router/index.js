import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
//
import NotFuoud from '@/pages/common/404';
import NoAccess from '@/pages/common/403';
import ServiceError from '@/pages/common/500';

//
import Login from '@/pages/common/Login';
import Home from '@/pages/home/home';
import store, {MUTATION} from 'src/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
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
      component: Login,
      meta: {
        tab: 'tab name1'
      }
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        tab: 'tab tab2'
      }
    }
  ]
});
router.afterEach(route => {
  store.commit(MUTATION.OPEN_TAB, {route});
});
export default router;
