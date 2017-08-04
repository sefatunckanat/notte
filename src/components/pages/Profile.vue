<template>
	<div id="profile">
		<div class="head gradient_background">Profile</div>
		<div class="content">
			<NiceInput placeholder="Name Surname" defaultValue="Sefa Tunçkanat"/>
			<NiceInput placeholder="Old Password" defaultValue="----" type="password"/>
			<div class="wrap xl-2 xl-gutter-8">
				<div class="col">
					<NiceButton value="Logout" v-bind:option="['danger','round']" v-on:onClick="logoutClick"/>
				</div>
				<div class="col">
					<NiceButton value="Save" v-bind:option="['primary','round']" v-on:onClick="saveClick"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NiceInput from './../static/NiceInput.vue'
import NiceButton from './../static/NiceButton.vue'
let _this;
export default{
	name: "Profile",
	components:{
		NiceInput,
		NiceButton
	},
	created:function(){
		_this = this;
	},
	methods:{
		logoutClick: function(){
			firebase.auth().signOut().then(function() {
				window.location.href = '/';
			}).catch(function(error) {
				console.log(error);
			});
		},
		saveClick: function(){

		}
	}
}
</script>

<style lang="sass" scoped>
#profile
	padding: 10px
	.head
		color: #fff
		font-weight: bold
		padding: 10px
		border-top-left-radius: 2px
		border-top-right-radius: 2px
	.content
		padding: 10px
		background: #F1FAEB
		color: #333
		overflow: hidden
		border-radius: 3px
		box-shadow: 0 2px 4px rgba(#000,0.1)
		.nice-input
			margin-bottom: 10px
</style>