<template>
  <div id="app">
		<Top></Top>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Top from './components/static/Top.vue'
export default {
  name: 'App',
  components:{
  	Top
  }
}
</script>

<style scoped>
@import './assets/style/flexiblegs.css';
@import './assets/style/normalize.css';
#app{
	padding-top: 51px;
}
</style>
