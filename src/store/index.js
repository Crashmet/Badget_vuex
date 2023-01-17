import Vue from 'vue';
import Vuex from 'vuex';
import finance from './modules/finance';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    // регестрируем в общий стор наш модуль
    finance,
  },
});
