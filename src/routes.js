import home from './components/home.vue';
import login from './components/login.vue';

export const routes = [
    {
        path: '/main',
        children: [
            {
              path: '/',
              component: home
            }
        ]
    },
    {
        path:'/login',
        component: login
    },
    {
        path: '*',
        redirect: '/main/'
    }
];