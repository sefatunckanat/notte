<template>
	<div id="pageNotFound" class="gradient_background">
		<div>
			<div>
				Page not found.
			</div>
			<router-link to="/">
				<div class="home_link">Home Page</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default{
	name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
#pageNotFound{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 9999;
	color: #eee;
	text-align: center;
	display:flex;
	flex-direction: column;
	justify-content: center;
	font-weight: normal;
	font-size: 40px;
	.home_link{
		font-size: 16px;
		font-weight: bold;
		margin-top: 10px;
	}
}
</style>
