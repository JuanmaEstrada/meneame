import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'


Vue.use(VueRouter);
//array de routes[con S]-path es una clave del objeto--component en singular.

//Ahora aauí se le pasan las rutas. En español, enrutador.
const router = new VueRouter({
	routes,
	mode : 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
