<template>
  <header class="gradient_background">
  	<div class="home_wrapper">
      <router-link to="/">
      	<div class="logo">
      		NOTTE
      	</div>
      </router-link>
    	<div class="menu">
    		<router-link to="/sign-up">Sign Up</router-link>
    	</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
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
  }
}
</style>
