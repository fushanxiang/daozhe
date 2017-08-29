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
		data() {
			return {
				recommendInfo: [{
					"id": "1",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1707/58/582f4fc547ddc880a3.img.jpg_228x168_6f125bcf.jpg",
					"name": "长隆野生动物世界",
					"level": "(5A)",
					"money": "4.5",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "30114条评论",
					"subposition": "广州·广州长隆旅游度假区"
				}, {
					"id": "2",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1707/47/477416df92210439a3.img.jpg_228x168_9fb06d3e.jpg",
					"name": "长隆欢乐世界",
					"level": "(5A)",
					"money": "218.01",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "16523条评论",
					"subposition": "广州·广州长隆旅游度假区"
				}, {
					"id": "3",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_228x168_566646fc.jpg",
					"name": "广州长隆旅游度假区",
					"level": "(5A)",
					"money": "4.5",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "33578条评论",
					"subposition": "广州·番禺"
				}, {
					"id": "4",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_228x168_f3806a93.jpg",
					"name": "长隆国际大马戏剧院",
					"level": "(5A)",
					"money": "346",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "30114条评论",
					"subposition": "广州·广州长隆旅游度假区"
				}, {
					"id": "5",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1506/95/f4f87c47bfba5ff368bed3fb9a0b45fb.water.jpg_228x168_dda1b945.jpg",
					"name": "广州长隆酒店白虎餐厅",
					"level": "(5A)",
					"money": "198",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "304条评论",
					"subposition": "广州·广州长隆旅游度假区"
				}, {
					"id": "6",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1603/ee/ee2fb567add7969390.water.jpg_228x168_94b38380.jpg",
					"name": "广州塔",
					"level": "(4A)",
					"money": "68",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "78564条评论",
					"subposition": "广州·海珠区"
				}, {
					"id": "7",
					"link": "#",
					"src": "http://img1.qunarzz.com/sight/p0/1707/58/582f4fc547ddc880a3.img.jpg_228x168_6f125bcf.jpg",
					"name": "长隆野生动物世界",
					"level": "(5A)",
					"money": "56",
					"iconfont": "&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;",
					"commendNum": "30114条评论",
					"subposition": "广州·广州长隆旅游度假区"
				}]
			}

		}

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