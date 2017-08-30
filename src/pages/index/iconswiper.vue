<template>
	<div>
		<swiper :options="swiperOption" >	    
			<swiper-slide v-for="page in pages" :key="1">				
				<ul class="icon-list">
					<router-link to="/ticketSale">
						<li class="icon-item" v-for="item in page" >
							<img class="icon-img" :src="item.imgUrl" />
							<p class="icon-itemTitle">{{item.title}}</p>
						</li>
					</router-link>
				</ul>
			</swiper-slide>	    
			<div class="swiper-pagination"  slot="pagination"></div>	
		</swiper>
		<div @click="handleButton">button</div>
	</div>
</template>

<script>

	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data () {
			return {
				swiperOption: {
					direction : 'horizontal',
					autoHeight: true,
					pagination : '.swiper-pagination',
					paginationClickable :true,
					observeParents:true
				}
			}
		},
		props:["iconsInfo"],
		methods: {
			handleButton: function(){
				this.iconsInfo.push({
					"id": "9",
					"imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
					"link": "/detail",
					"title":"全部"
				})
			}
		},
		computed: {
			pages: function() {
				const pages = [];
				for (var i = 0; i < this.iconsInfo.length; i++) {
					let page = Math.floor(i/8);
					if (!pages[page]) {
						pages[page] = [];
					}
					pages[page].push(this.iconsInfo[i])
				}
				return pages;
			}
		},
		components:{
			"swiper": swiper,
			"swiper-slide": swiperSlide
		}
	}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
	.icon-list {
		overflow: hidden;
		padding-bottom: .6rem;
		padding-top: .1rem;
		overflow: hidden;
		height: 3.7rem;
		background-color: #fff;
	}
	.icon-item {
		display: block;
		width: 25%;
		float: left;
		text-align: center;
		padding: .2rem 0;
		color:#212121;
	}
	.icon-item .icon-itemTitle{
		margin-top: .2rem;
		color: #212121;
		font-size: .28rem;

	}
	.icon-img {
		display: block;
		width: .66rem;
		height: .66rem;
		margin: 0 auto;
	}
	
</style>
