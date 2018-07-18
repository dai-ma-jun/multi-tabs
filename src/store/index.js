import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import multipleAlive from './modules/multipleAlive';
import * as mutationTypes from './mutation-types';
import * as actionTypes from './action-types';

Vue.use(Vuex);
export default new Store({
  modules: {
    multipleAlive
  }
});
export const ACTION = actionTypes;
export const MUTATION = mutationTypes;
