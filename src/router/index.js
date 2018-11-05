import Vue from 'vue';
import Router from 'vue-router';

import VehicleCollect from '../pages/VehicleCollect'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/vehicles'
    },
    {
      path: '/vehicles',
      name: 'vehicle-collect',
      component: VehicleCollect
    }
  ],
});
