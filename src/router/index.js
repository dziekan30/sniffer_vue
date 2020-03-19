import Vue from 'vue';
import VueRouter from 'vue-router';

import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';

import Home from '../views/Home.vue';
import DogsNew from '../views/DogsNew.vue';
import DogsShow from '../views/DogsShow.vue';
import DogsEdit from '../views/DogsEdit.vue';

import RequestsIndex from '../views/RequestsIndex.vue';
// import RequestsNew from '../views/RequestsNew.vue';
import RequestsShow from '../views/RequestsShow.vue';
import RequestsEdit from '../views/RequestsEdit.vue';

import MyPage from '../views/MyPage.vue';
import DogRequestShow from '../views/DogRequestShow.vue';


Vue.use(VueRouter)

const routes = [
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/login', name: 'login', component: Login },
  { path: '/logout', name: 'logout', component: Logout },

  { path: '/', name: 'home', component: Home },
  { path: '/dogs/new', name: 'dogs-new', component: DogsNew },
  { path: '/dogs/:id', name: 'dogs-show', component: DogsShow },
  { path: '/dogs/:id/edit', name: 'dogs-edit', component: DogsEdit },

  { path: '/requests', name: 'requests-index', component: RequestsIndex },
  // { path: '/requests/new', name: 'requests-new', component: RequestsNew },
  { path: '/requests/:id', name: 'requests-show', component: RequestsShow },
  { path: '/requests/:id/edit', name: 'requests-edit', component: RequestsEdit },

  { path: '/dogs', name: 'dogs-home', component: MyPage },
  { path: '/requests', name: 'dogs-requests-show', component: DogRequestShow }






]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
