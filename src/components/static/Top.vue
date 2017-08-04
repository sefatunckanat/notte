<template>
  <header class="gradient_background">
  	<div class="home_wrapper">
      <router-link to="/">
      	<div class="logo">
      		NOTTE
      	</div>
      </router-link>
    	<div class="menu" v-if="load">
        <router-link v-if="!loggedIn" to="/sign-up">Sign Up</router-link>
        <router-link v-if="!loggedIn" to="/sign-in">Sign In</router-link>
        <router-link v-if="loggedIn" to="/profile">{{ username }}</router-link>
    	</div>
    </div>
  </header>
</template>

<script>
let _this;
export default {
  name: 'Top',
  data () {
    return {
      loggedIn: false,
      username: "",
      load: false,
      user: false
    }
  },
  created:function(){
    _this = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        _this.refreshUI(user);
      }
      _this.load = true;
      _this.routerCheck();
    });
  },
  mounted:function(){
    
  },
  methods:{
    refreshUI:function(u){
      this.loggedIn = true;
      this.username = u.displayName || u.email;
    },
    routerCheck:function(){
      if(_this.$router.history.current.path == "/sign-up" || _this.$router.history.current.path == "/sign-in"){
        window.location.href = "/";
      }
      if(_this.$router.history.current.path == "/profile"){
        window.location.href = "/";
      }
    }
  }
}
</script>

<style lang="scss">
header{
	color: #fff;
	box-shadow: 0 0 3px rgba(#000,0.1);
  padding: 10px;
  .logo{
    display: inline-block;
    font-size: 24px;
    height: 31px;
  }
  .menu{
    display: inline-block;
    line-height: 31px;
    float: right;
    a{
      padding: 10px;
      border-right: 1px solid rgba(#000,0.1);
      text-align: center;
      &:last-child{
        border-right: none
      }
    }
  }
}
</style>
