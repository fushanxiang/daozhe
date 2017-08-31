<template>
	<div class="main">
		<detail-header></detail-header>
		<show-img></show-img>
		<ticket-info></ticket-info>
		<comment></comment>
		<detail-footer></detail-footer>
	</div>
</template>

<script>
	import DetailHeader from './header'
	import ShowImg from './showImg'
	import TicketInfo from './ticketInfo'
	import Comment from './comment'
	import Footer from './footer'
	
	export default {
		components: {
			"detail-header": DetailHeader,
			"show-img": ShowImg,
			"ticket-info": TicketInfo,
			"comment": Comment,
			"detail-footer": Footer,
		},
		data() {
			return{

			}
		},
		created() {
			console.log(this.$route.params.id)
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
</style>
