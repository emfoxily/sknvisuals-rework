import Vue from 'vue';
import Router from 'vue-router';

import Home from '../home/Home.vue';
import About from '../about/About.vue';
import Contact from '../contact/Contact.vue';
import Booking from '../booking/Booking.vue';
import Ohayo from '../booking/Ohayo.vue';
import Katsu from '../booking/Katsu.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }, {
      path:'/booking',
      name: 'Booking',
      component: Booking,
  }, {
    path: '/ohayo',
    name: 'Ohayo',
    component: Ohayo
  }, {
    path: '/katsu',
    name: 'Katsu',
    component: Katsu
  }
],
});