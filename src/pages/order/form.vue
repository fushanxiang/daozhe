<template>
	<div class="container">
		<header-fixed :goodsInfo='goodsInfo'></header-fixed>
		<form class="order-form-outer">
			<form-header :goodsInfo='goodsInfo'></form-header>
			<time-and-number :goodsInfo='goodsInfo'></time-and-number>
		</form>
		<footer-content :goodsInfo='goodsInfo'></footer-content>
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
				goodsInfo:[]
			}
		},
		components: {
			'header-fixed': HeaderFixed,
			'form-header': Header,
			'time-and-number': TimeAndNumber,
			'footer-content': Footer
		},
		created() {
			this.$http.get('/static/weekendtour.json').then(response => {
			var id = this.$route.params.id.split("=")[1];
			this.id = id;
			var data = response.body.data;
			for(var i in data.goods){
				if(data.goods[i].id == this.id){
					this.goodsInfo = data.goods[i];
				}
			}
		}, response => {
			console.log("ajax error");
  		});
		}
	}
</script>
<style scoped>
	.order-form-outer {
		height: 100%;
		box-sizing: border-box;
		display: block;
		background: #f1f1f1;
	}
</style>