<template>
	<div id="sign-up">
		<div class="form">
			<div class="head gradient_background">
				Sign Up
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'SignUp'
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
	.form
		display: inline-block
		background: #F1FAEB
		color: #333
		border-radius: 4px
		overflow: hidden
		.head
			font-weight: bold
			color: #fff
			padding: 10px
</style>