import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import VueProgressBar from 'vue-progressbar';

import App from './App.vue';
import {routes} from './routes';
import store from './store/store';


Vue.use(VueRouter);
Vue.use(VeeValidate);

//progress bar config
Vue.use(VueProgressBar, {
  color: '#EF4023',
  failedColor: 'red',
  height: '2px'
});

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
