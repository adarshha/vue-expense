import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);


const router = new VueRouter({
routes:Routes,
mode:'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
