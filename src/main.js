import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'
import firebase from 'firebase';

Vue.use(VueRouter);
//array de routes[con S]-path es una clave del objeto--component en singular.

//Ahora aauí se le pasan las rutas. En español, enrutador.
const router = new VueRouter({
	routes,
	mode : 'history'
})


 var config = {
     apiKey: "AIzaSyCbnDh2SGGZRzdum6JucJRCeIKpEC89vsY",
    authDomain: "meneame-f31ee.firebaseapp.com",
    databaseURL: "https://meneame-f31ee.firebaseio.com",
    projectId: "meneame-f31ee",
    storageBucket: "meneame-f31ee.appspot.com",
    messagingSenderId: "118475633512"
  };
  firebase.initializeApp(config);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
