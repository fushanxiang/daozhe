<template>
	<div>
		<header-fixed></header-fixed>
		<form class="order-form-outer">
			<form-header></form-header>
			<time-and-number></time-and-number>
		</form>
		<footer-content></footer-content>
	</div>
</template>

<script>
	import HeaderFixed from './header_fixed.vue'
	import Header from './header.vue'
	import TimeAndNumber from './time_and_number.vue'
	import Footer from './footer.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			'header-fixed': HeaderFixed,
			'form-header': Header,
			'time-and-number': TimeAndNumber,
			'footer-content': Footer
		}
	}
</script>
<style scoped>
	.order-form-outer {
		padding-bottom: 100%;
		display: block;
		background: #f1f1f1;
	}
	
</style>