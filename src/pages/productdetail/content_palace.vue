<template>
	<ul class = 'container'>
		<li class = 'item' v-for="item in itemsInfo" :key="item.id">
			<a href="###">
				<div class = 'item-show'>
					<img class = "loading" :src="item.imgSrc" alt="">
					<span class = 'name'>
						<span class = 'name-inner'>{{item.sightName}}</span>
					</span>
				</div>
				<div class = 'item-info'>
					<h4 class = 'item-name'>{{item.itemName}}</h4>
					<p class = 'item-intro'>{{item.itemIntro}}</p>
					<div class = 'item-do'>
						<span class = 'order-btn'>预定</span>
					</div>
					<div class = 'item-lure'>
					    <span class = 'item-price'>&yen;</span>
					    <em class = 'now-price-num'>{{item.nowPrice}}</em>
						<span class = 'item-cost'>票面价¥<em class = 'cost-num'>{{item.prePrice}}</em></span>
					</div>
				 </div>
			</a>
		</li>
	</ul>	
</template>

<script>
export default {
	created(){
		this.$http.get('/someUrl').then(response => {
			this.someData = response.body;
		},response => {
			console.log("url输入有误")
		});
	},
	data () {
		return {
			itemsInfo:[
				{
					imgSrc:'//img1.qunarzz.com/piao/fusion/1707/93/e46fb508820f3d02.jpg_240x220_f4d28630.jpg',
					sightName:"故宫",
					itemName:"【大内御讲9:00场】蓝琪儿格格带您穿越故宫（不含故宫门票）",
					itemIntro:"无与伦比的古代建筑杰作",
					nowPrice:65,
					prePrice:88,
					id:0
				},
				{
					imgSrc:'//img1.qunarzz.com/piao/fusion/1707/93/e46fb508820f3d02.jpg_240x220_f4d28630.jpg',
					sightName:"故宫",
					itemName:"【09:00场次】故宫讲解服务（配无线耳麦，不含故宫门票）",
					itemIntro:"无与伦比的古代建筑杰作",
					nowPrice:135,
					prePrice:178,
					id:1
				},
				{
					imgSrc:'//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_240x220_50b98380.jpg',
					sightName:"故宫",
					itemName:"【3探秘天圆地方奥秘】北京天坛人工讲解服务含门票—08:00场",
					itemIntro:"探寻古代皇帝祭天仪式的奥秘",
					nowPrice:27,
					prePrice:39,
					id:2
				}
			]
    	}
	},
	methods:{
		
	}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.item {
		position: relative;
	    height: 110px;
	    margin-top: 5px;
	    padding: 5px;
	    background: #fff;
	    cursor: pointer;
	}
	.item a {
	    display: block;
	    text-decoration: none;
   		color: #25a4bb;
	}
	.item-show{
		position: relative;
	    float: left;
	    width: 120px;
	}
	.item-show img {
	    width: 100%;
	    min-height: 100px;
	    background-color: #f0f0f0;
	    vertical-align: top;
	    border: 0;
	}
	.loading {
	    background: #dcdcdc url(//simg4.qunarzz.com/piao/images/camel_56_56.jpg) center no-repeat;
	}
	.item-show .name {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    padding: 4px 0;
	    background-color: rgba(0,0,0,.5);
	    color: #fff;
	    line-height: 16px;
	}
	.item-show .name-inner {
	    display: block;
	    padding: 0 5px;
	}
	.item-info {
	    margin-left: 125px;

	}
	.item-name {
	    padding: 3px 0;
	    font-size: 16px;
	    line-height: 20px;
	    color: #333;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.item-intro {
	    margin-top: 2px;
	    line-height: 16px;
	    color: #666;
	    overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item-do {
	    position: absolute;
	    right: 5px;
	    bottom: 5px;
	}
	.order-btn {
	    display: inline-block;
	    overflow: hidden;
	    width: 40px;
	    height: 30px;
	    font-size: 14px;
	    line-height: 30px;
	    text-align: center;
	    color: #fff;
	    background-color: #ff433e;
	    -webkit-border-radius: 3px;
	    -moz-border-radius: 3px;
	    border-radius: 3px;
	}
	.item-lure {
	    position: absolute;
	    bottom: 5px;
	    line-height: 30px;
	}
	.item-cost {
	    font-size: 12px;
	    margin-right: 5px;
	    color: #9c9c9c;
	    text-decoration: line-through;
	}
	.item-cost .cost-num {
	    font-size: 12px;
	}
	.price-num {
	    font: 14px;
	}
	.item-price {
	    color: #ff433e;
	}
	
	.now-price-num {
	    font-size: 18px;
	    color: #ff433e;
	}
	.price {
	    font: 12px;
	}
</style>
