import Vue from 'vue';

import { BootstrapVueIcons } from 'bootstrap-vue';

import App from './App.vue';
import store from './store';

import './styles.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVueIcons);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
