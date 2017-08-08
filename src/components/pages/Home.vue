<template>
	<div id="home">
    <div class="home_wrapper">
      <div v-for="note in notes" class="notte" v-if="!questPage">
        <div v-bind:class="getClass(note.priotify)">
          <h1>{{ note.title }}</h1>
          <p>{{ trim(note.detail) }}</p>
          <div class="detail">
            <span>{{note.createdTime}}</span>
            <span class="priotify"><span class="icon"></span></span>
            <div class="tags">
              <div class="tag" v-for="tag in note.tags">
                #{{ tag }}
              </div>
            </div>
          </div>
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
    padding: 10px 10px 0
    overflow: hidden
    border: 1px solid $border
    border-radius: $radius
    &.priotify-0 .icon
      background: $primary
    &.priotify-1 .icon
      background: $secondary
    &.priotify-2 .icon
      background: $danger
    h1,p
      margin: 0
    .detail
      margin: 0 0 10px
      padding-top: 5px
      color: #777
      font-size: 12px
      height: 20px
      span
        display: inline-block
      .tags
        float: right
        margin-right: 10px
        .tag
          display: inline-block
          vertical-align: top
          float: left
          padding: 0 3px
      .priotify
        float: right
        .icon
          vertical-align: top
          width: 30px
          height: 13px
          display: inline-block
          border-radius: 2px
          margin-left: 5px


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