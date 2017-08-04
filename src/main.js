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
let app = Firebase.initializeApp(config)
let db = app.database()
window.firebase = app;

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
