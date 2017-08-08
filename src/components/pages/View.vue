<template>
	<div id="view">
    <div class="content">
      <pre>{{data}}</pre>
    </div>
	</div>
</template>

<script>
let _this;
export default {
  name: 'Home',
  data(){
    return {
      data:{}
    }
  },
  mounted:function(){
    _this = this;
    var link = this.$route.params.link;
    var userID = firebase.auth().currentUser.uid;
    firebase.database().ref('notes/'+userID+"/"+link).once('value').then(function(response){
      _this.data = response.val();
    });
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
@import "./../../assets/style/color.sass"
#view
  padding: 10px
  .content
    background: #fafafa
    padding: 10px
    overflow: hidden
    border: 1px solid $border
    border-radius: $radius
</style>