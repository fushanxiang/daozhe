<template>
	<div class="main">
		<swiper></swiper>
		<introduce></introduce>
		<recommend></recommend>
		<ticket-notes></ticket-notes>
		<scenic-area></scenic-area>
		<header-fixed :scrollTop="scrollTop" :style="style"></header-fixed>
		<commentaries></commentaries>
		<recommend :recommendInfo="recommendInfo" :style="styleRec"></recommend>
		<foot-fixed :style="styleObject"></foot-fixed>
	</div>
</template>

<script>
	import Swiper from '../parkdetail/swiper.vue'
	import Introduce from './introduce.vue'
	import Recommend from './recommend.vue'
	import TicketNotes from './ticketnotes.vue'
	import ScenicArea from './scenicarea.vue'
	import FootFixed from './footfixed.vue'
	import Commentaries from './commentaries.vue'
	import HeaderFixed from '../parkdetail/headerfixed.vue'

	export default {
		data() {
			return {
				scrollTop: 0,
				headerShow: false,
				recommendInfo: [],
				styleObject: {
					position: 'fixed',
					left: 0,
					bottom: 0
				},
				styleRec: {
					marginBottom: ".88rem"
				}
			}
		},
		mounted() {
			var this_ = this;
			window.addEventListener('scroll', function() {
				this_.scrollTop = document.body.scrollTop;
			}, false);
		},

		beforeDestroy: function() {
			window.removeEventListener("scroll", function() {
				this_.scrollTop = document.body.scrollTop;
			}, false);
		},
		created() {
			this.$http.get('../../../static/ticketdetail.json').then(response => {
				var data = response.data;
				this.recommendInfo = data.recommendInfo;
			}, response => {
				console.log("dfs");
			});
		},
		components: {
			"ticket-notes": TicketNotes,
			"scenic-area": ScenicArea,
			"header-fixed": HeaderFixed,
			"introduce": Introduce,
			"recommend": Recommend,
			"commentaries": Commentaries,
			"foot-fixed": FootFixed,
			"swiper": Swiper
		},

		computed: {
			style: function() {
				if(this.headerShow) {
					return "opacity:1;"
				} else {
					return "opacity:" + this.scrollTop / 200
				}
			}
		}
	}

</script>

<style scoped>
	.main {
		background: #f4f4f4;
	}

</style>