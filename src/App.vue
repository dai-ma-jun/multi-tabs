<template>
  <div id="app">
    <div class="tabs">
      <template v-for="tab in tabs">
        <router-link :to="tab.route" class="tab" :key="tab.name">
          <span>{{ tab.title }}</span>
          <i class="close" @click.self.stop.prevent="close(tab)">x</i>
        </router-link>
      </template>
    </div>
    <keep-alive :include="tabViews">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {CLOSE_TAB} from './store/mutation-types';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['tabs', 'tabViews'])
  },
  methods: {
    ...mapMutations({
      close: CLOSE_TAB
    })
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.tabs {
  background: #f4f4f4;
  padding: 3px;
  display: flex;
  justify-content: flex-start;
}

.tab {
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 32px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 5px;
  text-decoration: none;
  color: inherit;
}

.active {
  background-color: #666;
  color: white;
}
  .close {
    color: #999;
    font-size: 14px;
    font-style: normal;
    font-family: Arial;
  }
</style>
