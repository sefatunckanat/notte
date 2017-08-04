<template>
	<div v-bind:class="classObject" v-on:click="onClick">
		{{ value }}
	</div>
</template>

<script>
export default{
	name: 'NiceButton',
	props:['value','option'],
	data(){
		return{
			class: "nice-button"
		}
	},
	methods:{
		onClick:function(){
			this.$emit("onClick",true);
		}
	},
	created:function(){
		for (var i = 0; i < this.option.length; i++) {
			this.class += " "+this.option[i];
		}
	},
	computed: {
		classObject: function(){
			return this.class;
		}
	}
}
</script>

<style lang="sass" scoped>
@import "../../assets/style/color.sass"
.nice-button
	display: block
	position: relative
	padding: 10px 20px
	text-align: center
	transition: 0.2s
	border: 1px solid $border
	&:active
		border: 1px inset $border
		cursor: pointer
		&.primary
			background: darken($primary,$dark)
	&.big
		padding: 15px 20px
	&.small
		padding: 5px
	&.flat
		border-radius: 0
	&.round
		border-radius: 2px
	&.primary
		background: $primary
		color: #fff
</style>












