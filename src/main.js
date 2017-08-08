import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/global.scss'
import Firebase from 'firebase'

let config = {
	apiKey: "AIzaSyA0zF57saJ5-TvfzkJ5NKq2Fiuj7K-yZmQ",
	authDomain: "notte-d3b82.firebaseapp.com",
	databaseURL: "https://notte-d3b82.firebaseio.com",
	projectId: "notte-d3b82",
	storageBucket: "notte-d3b82.appspot.com",
	messagingSenderId: "4933978277"
};
Vue.config.productionTip = false
let app = Firebase.initializeApp(config)
window.firebase = app;
firebase.auth().onAuthStateChanged(function(user) {
	window.userData = user;
	new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',
	  components: { App },
	});
});
