<template>
	<div class="recommend-list">
		<slot></slot>
		<a href="javascript:;" role="sightLink">
		<router-link :to="{name:'ticketdetail'}">
			<div class="recommend-item" v-for="item in recommendInfo" :key="item.id">
				<img class="recommend-img" :src="item.src" />
				<div class="recommend-info border-bottom">
					<div class="recommend-sight">{{item.name}}
						<span class="recomment-sightstar">{{item.level}}</span>
					</div>
					<div class="recommend-price price">¥<em class="price-num">{{item.money}}</em>
						<span class="recommend-flag">起</span>
					</div>
					<div class="recommend-comment">
						<span class="mpf-starlevel">
							<i class="mpf-starlevel-gain iconfont" data-score="4.44" style="width:98%" v-html="item.iconfont"></i>							
						</span>
						<span class="recommend-commentnum">{{item.commendNum}}</span>
					</div>
					<div class="recommend-position">
						<span class="recommend-subposition mp-border-left">{{item.subposition}}</span>
					</div>
				</div>
			</div>
		</router-link>
		</a>
	</div>
</template>

<script>
	export default {
		data () {
			return {				
			}
		},		
		props:["recommendInfo"]
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.recommend-list {
		overflow: hidden;
		background: #fff;
	}
	
	.recommend-sight {
		position: absolute;
		top: .2rem;
		left: 0;
		right: 1.5rem;
		height: .4rem;
		line-height: .4rem;
		font-size: .3rem;
		color: #212121;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.recommend-img {
		margin: .2rem .2rem 0 .2rem;
		width: 1.62rem;
		height: 1.62rem;
		float: left;
		background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) contain;
	}
	
	.recommend-info {
		position: relative;
		padding-top: .2rem;
		margin-left: 2.02rem;
		height: 1.8rem;
	}
	
	.recommend-price {
		position: absolute;
		right: .2rem;
		top: .2rem;
		line-height: .4rem;
		vertical-align: baseline;
		color: #ff9800;
	}
	
	.recommend-comment {
		position: absolute;
		top: 1rem;
		left: 0;
	}
	
	.recommend-position {
		position: absolute;
		bottom: .24rem;
		left: 0;
		color: #9e9e9e;
		font-size: .24rem;
	}
</style>