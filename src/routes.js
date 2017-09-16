import home from './components/home.vue';
import login from './components/login.vue';
import store from './store/store';

export const routes = [
    {
        path: '/main',
        component: home
    },
    {
        path:'/login',
        component: login,
        beforeEnter: (to, from, next) => {
            next(!store.getters.isUserLogged);  
        }
    },
    {
        path: '*',
        redirect: '/main/'
    }
];