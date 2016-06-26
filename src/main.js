import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/index': {
    component: Home
  },
  'time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
});

router.redirect({
  '*': '/index'
});

router.start(App, '#app');
