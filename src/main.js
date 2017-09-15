import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import {routes} from './routes';
import store from './store/store';


Vue.use(VueRouter);
Vue.use(VeeValidate);

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
  store,
  render: h => h(App)
});
