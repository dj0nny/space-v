import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
import HistoryDetail from './views/HistoryDetail.vue';
import Launches from './views/Launches.vue';
import LaunchDetail from './views/LaunchDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/launches',
      name: 'launches',
      component: Launches,
    },
    {
      path: '/launch/:id',
      name: 'launchDetail',
      component: LaunchDetail,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/history/:id',
      name: 'historyDetailPage',
      component: HistoryDetail,
    },
  ],
});
