<template>

	<div @mousewheel="test">
		<swiper></swiper>
		<park-location></park-location>
		<detail-tree :qnrecommendinfo="qnrecommendinfo"></detail-tree>
		<tree-item :ticketinfo="ticketinfo"></tree-item>
		<header-fixed :scrollTop="scrollTop" :style="style"></header-fixed>
		<discuss></discuss>
		<recommend></recommend>
		<recommend-sites :recommendInfo="recommendInfo"></recommend-sites>
		<ua-pop :deltaY="deltaY"></ua-pop>
		<foot></foot>
		<order v-show="$store.state.isPop"></order>
	</div>

</template>

<script>

	import Swiper from './swiper.vue'
	import ParkLocation from './parkLocation.vue'
	import DetailTree from './detailtree.vue'
	import HeaderFixed from './headerfixed.vue'
	import Discuss from './discuss.vue'
	import Recommend from './recommend.vue'
	import RecommendSites from './recommendsites.vue'
	import Uapop from './uapop.vue'
	import Foot from '../index/foot.vue'
	import Order from './order.vue'
	import TreeItem from './treeitem/treeitem.vue'

	export default {
		
		data() {
			return {
				deltaY: true,
				scrollTop: 0,
				headerShow: false,
				recommendInfo: [],
				qnrecommendinfo:[],
				ticketinfo:[],
				tickethinfo:[]
			}
		},
		created() {
			this.$http.get('../../../static/parkdetail.json').then(response => {
				var data = response.data;
				this.recommendInfo = data.recommendInfo;
				this.qnrecommendinfo = data.qnrecommendinfo;
				this.ticketinfo = data.ticketinfo;
				this.tickethinfo = data.tickethinfo;
			}, response => {
				console.log("dfs");
			});
		},
		components: {
			"park-location": ParkLocation,
			"detail-tree": DetailTree,
			"recommend": Recommend,
			"recommend-sites": RecommendSites,
			"ua-pop": Uapop,
			"header-fixed": HeaderFixed,
			"discuss": Discuss,
			"swiper": Swiper,
			"foot": Foot,
			"tree-item":TreeItem,
			"order": Order
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
		methods: {
			 test(e) {
				if(e.deltaY < 0) {
					this.deltaY = false;

				} else {
					this.deltaY = true;
				}
			},
			onBeforeRate (rate) {
	            alert(rate)
	        },
	        onAfterRate (rate) {
	            alert(rate)
	        }
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

</style>