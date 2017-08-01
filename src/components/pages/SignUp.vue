<template>
	<div id="sign-up">
		<div class="main">
			<div class="head gradient_background">
				Sign Up
			</div>
			<div class="content">
				<NiceInput v-on:onChange="setUsername" placeholder="Username"/>
				<NiceInput v-on:onChange="setPassword" placeholder="Password" type="password"/>
				<NiceButton value="Sign Up" v-bind:option="['primary','round']"/>
			</div>
		</div>
	</div>
</template>

<script>
import NiceInput from './../static/NiceInput.vue'
import NiceButton from './../static/NiceButton.vue'
export default{
	name: 'SignUp',
	components:{
		NiceInput,
		NiceButton
	},
	data(){
		return{
			sign_up_values:{
				username: '',
				password: ''
			}
		}
	},
	methods:{
		setUsername: function(val){
			this.sign_up_values.username = val;
		},
		setPassword: function(val){
			this.sign_up_values.password = val;
		},
		click: function(){

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
		.head
			font-weight: bold
			color: #fff
			padding: 10px
			font-size: 20px
		.content
			padding: 10px
			.nice-input
				margin-bottom: 10px
</style>