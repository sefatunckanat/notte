<template>
	<div id="new-notte">
		<div class="home_wrapper">
			<div class="head gradient_background">New Notte</div>
			<div class="content">
				<label>Title</label>
				<input type="text" class="nice-input" v-model="title"/>
				<label>Detail</label>
				<textarea v-model="detail" rows="4"></textarea>
				<label>Priotify</label>
				<select v-model="priotify">
					<option value="0">Düşük</option>
					<option value="1">Normal</option>
					<option value="2">Acil</option>
				</select>
				<label>Tags</label>
				<textarea v-model="tags" rows="4"></textarea>
				<div class="wrap xl-2 xl-gutter-8">
					<div class="col">
						<NiceButton value="Cancel" v-bind:option="['danger','round']" v-on:onClick="goBack"/>
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
let router;
export default{
	name: "Profile",
	components:{
		NiceInput,
		NiceButton
	},
	data(){
		return{
			title: "",
			detail: "",
			tags: "",
			priotify: 0
		}
	},
	mounted:function(){
		router = this.$router;
	},
	methods:{
		goBack:function(){
			router.go(-1);
		},
		saveClick: function(){
			var date = new Date();
			var data = {
				title: this.title,
				detail: this.detail,
				priotify: this.priotify,
				tags: this.tags.split(','),
				createdTime: date.toLocaleString()
			}
			if(data.title != "" || data.detail != ""){
				var userID = firebase.auth().currentUser.uid;
				var rootRef = firebase.database().ref();
			  var storesRef = rootRef.child('notes/'+userID);
			  var newStoreRef = storesRef.push();
			  newStoreRef.set(data).then(function(){
					router.go(-1);
			  });
			}
		}
	}
}
</script>

<style lang="sass" scoped>
#new-notte
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
		.nice-input,select,textarea
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
		  resize: none
</style>