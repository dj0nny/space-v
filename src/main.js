import Vue from 'vue';
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';
import BootstrapVue from 'bootstrap-vue';
import VueTruncate from 'vue-truncate-filter';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(hooks);
Vue.use(plugin);
Vue.use(BootstrapVue);
Vue.use(VueTruncate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
