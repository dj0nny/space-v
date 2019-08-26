import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HistoryDetail from './views/HistoryDetail.vue';
import Launches from './views/Launches.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/history/:id',
      name: 'historyDetailPage',
      component: HistoryDetail,
    },
    {
      path: '/launches',
      name: 'launches',
      component: Launches,
    },
  ],
});
