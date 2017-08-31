<template>
	<div class="pd-ticketype-ticket-item2 pd-border-top2">
		<div class="pd-ticket-main">
			<div>
				<span class="pd-ticket-onedayitem">启程旅游</span>
				<h6 class="pd-ticket-title">[长隆周年庆]长隆水上乐园成人票（仅限8月28日）</h6>
				<p><span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon">&#xe64d;</span>18:00前可订今日</span>
					<span class="pd-ticket-desctag"><span class="iconfont pd-ticket-tagicon"> &#xe627;</span> 条件退</span>
				</p>
			</div>
		</div>

		<div class="pd-ticket-side">
			<div>
				<p class="pd-ticket-sale">
					¥<em class="pd-price-num">46</em>
				</p>
				<p class="pd-ticket-cost">
					票面价:¥<em>200</em>
				</p>
				<p class="pd-ticket-btn" @click="handleOrderClick">预订</p>
			</div>
		</div>

		<div v-if="show">
			<order></order>
		</div>
	</div>
</template>

<script>
	import Order from './order.vue'

	export default {
		data() {
			return {
				show: false
			}
		},
		components: {
			"order": Order
		},
		methods: {
			handleOrderClick: function() {
				this.$store.commit("changeIsPop");
			}
		}
	}
</script>

<style scoped>
	.pd-border-top2 {
		border-top: 1px dashed #dadada;
	}
	
	.pd-ticketype-ticket-item2 {
		padding: .20rem;
		margin-left: -.2rem;
		position: relative;
		background: #f5f5f5;
		display: flex;
		width: 100%;
	}
	
	.pd-ticket-main {
		display: flex;
		flex: 2.92;
		align-item: center;
	}
	
	.pd-ticket-onedayitem {
		display: inline-block;
		overflow: hidden;
		line-height: .34rem;
		max-width: 2.5rem;
		padding: 0 .2rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #666;
	}
	
	.pd-ticket-title {
		padding-top: 0;
		color: #888;
		font-size: .24rem;
		line-height: .36rem;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.pd-ticket-desctag {
		display: inline-block;
		color: #616161;
		font-size: .24rem;
		line-height: .32rem;
		white-space: nowrap;
		margin-right: .25rem;
	}
	
	.pd-ticket-tagicon {
		display: inline-block;
		margin-right: .08rem;
		color: #1ba9ba;
		font-size: .2rem;
	}
	
	.pd-ticket-side {
		display: flex;
		flex: 1;
		border-left: 1px solid #dadada;
		padding-left: .5rem;
		align-item: center;
	}
	
	.pd-ticket-sale {
		color: #ff9800;
		height: .32rem;
		display: block;
		font-size: .24rem;
		line-height: .28rem;
		text-align: center;
	}
	
	.pd-price-num {
		margin-left: .04rem;
		font: .24rem Tahoma, Helvetica, sans-serif;
		line-height: .3rem;
	}
	
	.pd-ticket-cost {
		width: 150%;
		margin: 1px -25%;
		color: #9e9e9e;
		text-decoration: line-through;
		transform: scale(.8);
		display: block;
		overflow: hidden;
		height: .28rem;
		line-height: .28rem;
		text-align: center;
		font-size: .18rem;
	}
	
	.pd-ticket-btn {
		height: .6rem;
		background: #ff9800;
		color: #fff;
		font-size: .28rem;
		line-height: .6rem;
		text-align: center;
		border-radius: .06rem;
	}
</style>