<template>
	<div class="nice-input" v-bind:class="getInputState()">
		<span v-bind:class="getInputState()">{{ placeholder }}</span>
		<div v-if="type == 'password'">
			<input v-model="value" type="password" v-on:click="onSelect" v-on:mouseleave="onExit">
		</div>
		<div v-if="type != 'password'">
			<input v-model="value" v-on:change="onChange" v-on:click="onSelect" v-on:mouseleave="onExit">
		</div>
	</div>
</template>

<script>
export default{
	name: "NiceInput",
	data () {
    return {
      state: "notSelect",
      value: ""
    }
  },
  props:['placeholder','type'],
	methods:{
		onSelect: function(){
			this.state = "select";
		},
		onChange: function(){
			console.log('change')
		},
		onExit: function(){
			if(this.value.length == 0){
				this.state = "notSelect";
			}else{
				this.state = "edited";
			}
			this.$emit("onChange",this.value);
		},
		getInputState: function(){
			if(this.state == "select" || this.state == "edited"){
				return "active"
			}else{
				return "";
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.nice-input{
  width: 100%;
  border: 1px solid rgba(#000,0.2);
  position: relative;
  padding: 20px 10px;
  color: #919599;
  font-family: sans-serif;
  transition: 0.2s;
  background: #fff;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;
  font-weight: lighter;
  font-size: 14px;
  border-radius: 2px;
	&.active{
  	border: 1px solid rgba(#000,0.4);
	}
	span{
	  position: absolute;
	  transform: translateY(10%);
	  left: 10px;
	  transition: 0.2s;
	  user-select: none;
	  z-index: -1;
	  pointer-events: none;
		&.active{
  		transform: translateY(-100%);
  		font-size: 0.9em;
  	}
  }
	input{
	  width: 100%;
	  box-sizing: border-box;
	  outline: none;
	  border: 0;
	  color: #55585a;
	  background: transparent;
	  font-size: 1em;
	}
}
</style>