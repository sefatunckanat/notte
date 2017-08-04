<template>
	<div id="home">
    <div v-for="note in notes" v-if="!questPage">
      <h1>{{ note.title }} <span>{{note.createdTime}}</span></h1>
      <p>{{ note.detail }}</p>
    </div>
    <div v-if="questPage">
      <h1>Hello Demo User</h1>
    </div>
	</div>
</template>

<script>
let _this;
export default {
  name: 'Home',
  data(){
    return {
      user:null,
      questPage: false,
      notes:[]
    }
  },
  created:function(){
    var user = firebase.auth();
    this.user = user.currentUser;
    _this = this;
  },
  mounted:function(){
    var user = firebase.auth();
    this.user = user.currentUser;
    if(this.user != null){
      this.getNotes();
    }else{
      this.questPage = true;
    }
  },
  methods:{
    getNotes:function(){
      console.log(">","notes/"+this.user.uid);
      var get = firebase.database().ref("notes/"+this.user.uid);
      get.on('value',function(response){
        _this.notes = response.val();
      })
    }
  }
}
</script>
