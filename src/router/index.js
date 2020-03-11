import Vue from 'vue';
import VueRouter from 'vue-router';

import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';

import Home from '../views/Home.vue';
import DogsEdit from '../views/DogsEdit.vue';
import DogsNew from '../views/DogsNew.vue';
import DogsShow from '../views/DogsShow.vue';


Vue.use(VueRouter)

const routes = [
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/login', name: 'login', component: Login },
  { path: '/logout', name: 'logout', component: Logout },

  { path: '/', name: 'home', component: Home },
  { path: '/dogs/new', name: 'dogs-new', component: DogsNew },
  { path: '/dogs/:id', name: 'dogs-show', component: DogsShow },
  { path: '/dogs/:id/edit', name: 'dogs-edit', component: DogsEdit }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
