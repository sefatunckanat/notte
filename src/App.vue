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
@import './assets/style/normalize.css'
@import './assets/style/flexiblegs.css'
</style>