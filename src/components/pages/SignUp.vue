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
				<NiceInput v-on:onChange="setUsername" placeholder="Username"/>
				<NiceInput v-on:onChange="setPassword" placeholder="Password" type="password"/>
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
			sign_up_values:{
				username: '',
				password: ''
			}
		}
	},
	created:function(){
		_this = this;

	},
	methods:{
		setUsername: function(val){
			this.sign_up_values.username = val;
		},
		setPassword: function(val){
			this.sign_up_values.password = val;
		},
		click: function(){
			firebase.auth().createUserWithEmailAndPassword(this.sign_up_values.username,this.sign_up_values.password).catch(function(err){
					let obj = {
						title: 'Sign Up Error !',
						message: err.message,
						type: 'error'
					}
					_this.$refs.simplert.openSimplert(obj)
			});
		}
	}
}
</script>

<style lang="sass" scoped>
#sign-up
	display: flex
	flex-direction: column
	justify-content: center
	align-content: center
	padding: 20px
	height: calc( 100vh - 51px )
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