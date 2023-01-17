import Vue from 'vue';
import App from './App.vue';
import store from './store';
// регестрируем Vuex store
import './plugins/elements';
// все компогненты из el-ui доступны без дополнительного импорта

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
