import TestComponent from './components/Test.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/scss/styles.scss';
import App from './App.vue';
import store from './store';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: TestComponent },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
