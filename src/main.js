import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import {routes} from './routes';


Vue.use(VueRouter);

//http config
Vue.use(VueResource);

const router = new VueRouter(
  {
    routes
  }
);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});