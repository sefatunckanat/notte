<template>
	<div class="nice-input" v-bind:class="getInputState()">
		<span v-bind:class="getInputState()">{{ placeholder }}</span>
		<div v-if="type == 'password'">
			<input v-model="getValue" type="password" v-on:click="onSelect" v-on:mouseleave="onExit">
		</div>
		<div v-if="type != 'password'">
			<input v-model="getValue" type="text" v-on:click="onSelect" v-on:mouseleave="onExit">
		</div>
	</div>
</template>

<script>
export default{
	name: "NiceInput",
  props:['placeholder','type','value'],
	data () {
    return {
      state: "notSelect",
      orjinalValue: ""
    }
  },
  mounted:function(){
  	console.log(this.value)
  	if(this.value != undefined){
  		this.orjinalValue = this.value;
  	}
		this.onExit();
  },
	methods:{
		onSelect: function(){
			this.state = "select";
		},
		onChange: function(){
		},
		onExit: function(){
			if(this.orjinalValue.length == 0){
				this.state = "notSelect";
			}else{
				this.state = "edited";
			}
			this.$emit("onChange",this.orjinalValue);
		},
		getInputState: function(){
			if(this.state == "select" || this.state == "edited"){
				return "active"
			}else{
				return "";
			}
		}
	},
	computed:{
		getValue:function(){
			this.orjinalValue = this.value;
			this.onExit();
			return this.value;
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