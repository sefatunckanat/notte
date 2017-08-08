<template>
	<div id="home">
    <div class="home_wrapper">
      <div v-for="note in notes" class="notte" v-if="!questPage">
        <div v-bind:class="getClass(note.priotify)">
          <h1>{{ note.title }} <span>{{note.createdTime}}</span></h1>
          <p>{{ trim(note.detail) }}</p>
        </div>
      </div>
      <div v-if="questPage">
        <h1>Hello Demo User</h1>
      </div>
      <router-link to="/new">
        <div class="new-notte gradient_background">
          <div class="plus icon"></div>
        </div>
      </router-link>
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
  mounted:function(){
    var user = this.user = window.userData;
    if(user != null){
      this.getNotes();
    }else{
      this.questPage = true;
    }
  },
  methods:{
    getClass:function(i){
      return "content priotify-"+i;
    },
    getNotes:function(){
      console.log(">","notes/"+this.user.uid);
      var get = firebase.database().ref("notes/"+this.user.uid);
      var _this = this;
      get.on('value',function(response){
        _this.notes = response.val();
      });
    },
    trim:function(str,length=200){
      if(str.length<length)return str;
      return str.substr(0,length)+"...";
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./../../assets/style/color.sass"
.notte
  padding: 10px 10px 0
  .content
    background: #fafafa
    padding: 10px
    overflow: hidden
    border: 1px solid $border
    border-radius: $radius
    h1,p
      margin: 0
.new-notte
  width: 50px
  height: 50px
  line-height: 50px
  color: #fff
  position: fixed
  right: 30px
  bottom: 60px
  border-radius: 50%
  box-shadow: 0 1px 2px rgba(#000,0.1)
  &:hover .plus
    transform: rotate(90deg)
  .plus.icon
    transition: 0.2s
    left: 50%
    top: 50%
    margin-left: -13px
    position: absolute
    transform-origin: 13px
  .plus.icon:before
    content: ''
    position: absolute
    width: 26px
    height: 2px
    background-color: currentColor
  .plus.icon:after
    content: ''
    position: absolute
    width: 26px
    height: 2px
    background-color: currentColor
    transform: rotate(90deg)

</style>