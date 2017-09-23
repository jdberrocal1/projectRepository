import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueProgressBar from 'vue-progressbar';

import App from './App.vue';
import {routes} from './routes';
import store from './store/store';


Vue.use(VueRouter);
Vue.use(VeeValidate);

//http config
Vue.use(VueResource);

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
