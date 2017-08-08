<template>
	<div id="profile">
		<div class="home_wrapper">
			<div class="head gradient_background">Profile</div>
			<div class="content">
				<label>Name Surname</label>
				<input type="text" class="nice-input" v-model="this.userData.displayName"/>
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
	data(){
		return{
			userData:{},
			password: "jky3188383"
		}
	},
	mounted:function(){
		this.userData = window.userData;
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
			this.userData.updateProfile({
				displayName: this.userData.displayName,
			}).then(function(){
        window.location.href = "/";
			}).catch(function(err){
				console.log(err);
			})
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
		label
			color: #555
		.nice-input
		  border: 1px solid rgba(#000,0.2)
		  position: relative
		  padding: 20px 10px
		  color: #333
		  font-family: sans-serif
		  transition: 0.2s
		  background: #fff
		  overflow: hidden
		  z-index: 1
		  box-sizing: border-box
		  font-size: 14px
		  border-radius: 2px
		  padding: 15px 10px
		  outline: none
		  display: block
		  width: 100%
		  margin-bottom: 10px
</style>