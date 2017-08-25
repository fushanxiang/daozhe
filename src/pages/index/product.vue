<template>
	<div>
		<h2 class="product-title">周末去哪儿</h2>
		<div class="index-product" v-for="item in product" :id="item.id">
			<a class="product-a" href="">
					<div class="product-img-box">
						<img class="product-img" :src="item.src">
					</div>
				<div class="product-info">
					<p class="product-name">
						{{item.name}}
					</p>
					<p class="product-desc">
						{{item.desc}}
					</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			product: [{
				"src": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
				"name": "学生最爱的博物馆",
				"desc": "周末干嘛？北京很多博物馆已经免费开放啦",
				"id": "8907"
			},{
				"src": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
				"name": "寻找北京的皇城范儿",
				"desc": "数百年的宫廷庙宇，至今依旧威严霸气",
				"id": "8909"
			},{
				"src": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
				"name": "北京必游TOP10",
				"desc": "来北京必去的景点非这些地方莫属",
				"id": "8917"
			},{
				"src": "http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg",
				"name": "漂流勇进，烧烤露营",
				"desc": "轻松水上漂，任我乐逍遥",
				"id": "8937"
			},{
				"src": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
				"name": "儿童剧场，孩子的乐园",
				"desc": "带宝贝观看演出，近距离体验艺术的无穷魅力",
				"id": "8947"
			}]
    	}
	}
}
</script>

<style scoped>
.product-title {
	height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    background: #f8f8f8;
}
.product-img {
	position: relative;
    margin-bottom: .1rem;
    background: #fff;
}
.product-a {
	display: block;
	width: 100%;
	height: 100%;
}
.product-img-box{
	overflow: hidden;
	height: 0;
	padding-bottom: 37.07%;
}
.product-img{
	width: 100%;
}
.product-info{
	position: relative;
    padding: .14rem .2rem .2rem .2rem;
}
.product-name {
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
}
.product-desc {
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
}
</style>
