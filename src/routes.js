import home from './components/home.vue';
import login from './components/login.vue';
import projectList from './components/projects/projectList.vue'
import projectDetail from './components/projects/projectDetail.vue'
import importProject from './components/projects/importProject.vue'
import store from './store/store';

export const routes = [
  {
    path: '/projects',
    component: home,
    children: [
      {
        path: '/',
        component: projectList
      },
      {
        path: '/project/:id',
        component: projectDetail,
        name: 'projectDetail',
        props: { default: true, sidebar: false }
      },
      {
        path: '/import',
        component: importProject,
        name: 'importProject',
        beforeEnter: (to, from, next) => {
          next(store.getters.isUserLogged);
        }
      }
    ]
  },
  {
    path: '/login',
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