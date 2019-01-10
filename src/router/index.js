import Vue from 'vue';
import Router from 'vue-router';

import Home from '../home/Home.vue'
import About from '../about/About.vue'
import Portfolio from '../portfolio/Portfolio.vue'
import Cosplay from '../portfolio/Cosplay.vue'
import Misc from '../portfolio/Misc.vue'
import Events from '../events/Events.vue'
import Contact from '../contact/Contact.vue'
import Booking from '../booking/Booking.vue'
import Ohayo from '../booking/Ohayo.vue'
import Katsu from '../booking/Katsu.vue'

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
  }, {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }, {
    path: '/events',
    name: 'Events',
    component: Events
  }, {
    path: '/portfolio/cosplay',
    name: 'Cosplay',
    component: Cosplay
  }, {
    path: '/portfolio/misc',
    name: 'Misc',
    component: Misc
  }
],
});