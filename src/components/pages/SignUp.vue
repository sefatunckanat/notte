<template>
	<div id="sign-up">
		<simplert :useRadius="true"
		          :useIcon="true"
		          ref="simplert">
		</simplert>
		<div class="main">
			<div class="head gradient_background">
				Sign Up
			</div>
			<div class="content">
				<NiceInput v-on:onChange="setEmail" placeholder="Email"/>
				<NiceInput v-on:onChange="setPassword" placeholder="Password" type="password"/>
				<NiceInput v-on:onChange="setPassword2" placeholder="Repeat Password" type="password"/>
				<NiceButton value="Sign Up" v-bind:option="['primary','round','big']" v-on:onClick="click"/>
			</div>
		</div>
	</div>
</template>

<script>
import NiceInput from './../static/NiceInput.vue'
import NiceButton from './../static/NiceButton.vue'
import Simplert from 'vue2-simplert'
let _this;

export default{
	name: 'SignUp',
	components:{
		NiceInput,
		NiceButton,
		Simplert
	},
	data(){
		return{
			email: '',
			password: '',
			password2: ''
		}
	},
	created:function(){
		_this = this;
	},
	methods:{
		setEmail: function(val){
			_this.email = val;
		},
		setPassword: function(val){
			_this.password = val;
		},
		setPassword2: function(val){
			_this.password2 = val;
		},
		click: function(){
			if(this.password == this.password2){
				firebase.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(err){
						let obj = {
							title: 'Sign Up Error !',
							message: err.message,
							type: 'error'
						}
						_this.$refs.simplert.openSimplert(obj)
				});
			}else{
				let obj = {
					title: 'Sign Up Error !',
					message: "Check your passwords",
					type: 'error'
				}
				_this.$refs.simplert.openSimplert(obj)
			}
		}
	}
}
</script>

<style lang="sass" scoped>
#sign-up
	padding: 10px
	.main
		background: #F1FAEB
		color: #333
		overflow: hidden
		border-radius: 3px
		box-shadow: 0 2px 4px rgba(#000,0.1)
		.head
			font-weight: bold
			color: #fff
			padding: 15px
			font-size: 20px
		.content
			padding: 10px
			.nice-input
				margin-bottom: 10px
</style>