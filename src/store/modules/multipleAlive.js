import {CREATE_TAB, CLOSE_TAB, OPEN_TAB} from '../mutation-types';
import Vue from 'vue';
import router from 'src/router';

export default {
  state: {
    // tab[]:  {title, name, route, alive}
    tabs: []
  },
  getters: {
    tabs (state) {
      return state.tabs.filter(tab => tab.alive);
    },
    tabViews (state) {
      return state.tabs.filter(tab => tab.alive).map(tab => tab.name);
    }
  },
  mutations: {
    [CREATE_TAB] (state, {title, name}) {
      state.tabs = [...state.tabs, {title, name}];
    },
    [OPEN_TAB] (state, {route}) {
      const {tabs} = state;
      const name = route.matched[0].components['default'].name;
      const index = tabs.findIndex(tab => tab.name === name);
      if (index > -1) {
        Vue.set(tabs, index, {...tabs[index], route: {name: route.name, path: route.path}, alive: true});
      }
      state.tabs = tabs;
    },
    [CLOSE_TAB] (state, {name}) {
      const {tabs} = state;
      if (tabs.length === 1) {
        return; // 只有一个是不是不允许关闭了？
      }
      const index = tabs.findIndex(tab => tab.name === name);
      tabs[index].alive = false;
      const isActive = router.currentRoute.path === tabs[index].route.path;
      if (isActive) {
        const route = tabs.find((tab, id) => id !== index && tab.route).route;
        router.push({path: route.path, name: route.name});
      }
      state.tabs = tabs;
    }
  }
};
