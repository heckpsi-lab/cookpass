import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Manage from '@/pages/Manage';
import Settings from '@/pages/Settings';
import ProfileEditor from '@/pages/ProfileEditor';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/profile/:id',
      name: 'ProfileEditor',
      component: ProfileEditor,
    },
  ],
});
