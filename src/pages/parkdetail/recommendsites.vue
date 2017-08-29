<template>
	<div class="mp-recommend-list">
		<slot></slot>
		<a href="//touch.piao.qunar.com/touch/detail.htm?id=4281924223" mp-role="sightLink">
			<div class="mp-recommend-item" v-for="item in recommendInfo" :key="item.id">
				<img class="mp-recommend-img" :src="item.src" />
				<div class="mp-recommend-info mp-border-bottom">
					<div class="mp-recommend-sight">{{item.name}}
						<span class="mp-recomment-sightstar">{{item.level}}</span>
					</div>
					<div class="mp-recommend-price mp-price">¥<em class="mp-price-num">{{item.money}}</em>
						<span class="mp-recommend-flag">起</span>
					</div>

					<div class="mp-recommend-comment">
						<span class="mpf-starlevel">
							<i class="mpf-starlevel-gain iconfont" data-score="4.44" style="width:98%" v-html="item.iconfont"></i>
							
						</span>
						<span class="mp-recommend-commentnum">{{item.commendNum}}</span>
					</div>

					<div class="mp-recommend-position">
						<span class="mp-recommend-subposition mp-border-left">{{item.subposition}}</span>
					</div>
				</div>
			</div>
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
	.mp-recommend-list {
		overflow: hidden;
		background: #fff;
	}
	
	.mp-recommend-sight {
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
	
	.mp-recommend-img {
		margin: .2rem .2rem 0 .2rem;
		width: 1.62rem;
		height: 1.62rem;
		float: left;
		background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) contain;
	}
	
	.mp-recommend-info {
		position: relative;
		padding-top: .2rem;
		margin-left: 2.02rem;
		height: 1.8rem;
	}
	
	.mp-border,
	.mp-border-top,
	.mp-border-right,
	.mp-border-bottom,
	.mp-border-left,
	.mp-border-topbottom,
	.mp-border-rightleft,
	.mp-border-topleft,
	.mp-border-rightbottom,
	.mp-border-topright,
	.mp-border-bottomleft {
		position: relative;
	}
	
	.mp-recommend-price {
		position: absolute;
		right: .2rem;
		top: .2rem;
		line-height: .4rem;
		vertical-align: baseline;
		color: #ff9800;
	}
	
	.mp-recommend-comment {
		position: absolute;
		top: 1rem;
		left: 0;
	}
	
	.mp-recommend-position {
		position: absolute;
		bottom: .24rem;
		left: 0;
		color: #9e9e9e;
		font-size: .24rem;
	}
</style>