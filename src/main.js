import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';




firebase.initializeApp({
    apiKey: "AIzaSyDxX-R_-6HtlprC940yGLUw0RSWnNLVfnY",
    authDomain: "pensioner-fcadf.firebaseapp.com",
    databaseURL: "https://pensioner-fcadf-default-rtdb.firebaseio.com",
    projectId: "pensioner-fcadf",
    storageBucket: "pensioner-fcadf.appspot.com",
    messagingSenderId: "1002826954206",
    appId: "1:1002826954206:web:cfc730c6a676521bb5194f"
})


let app

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
		  router,
		  store,
		  render: h => h(App)
		}).$mount('#app')
	}


})
