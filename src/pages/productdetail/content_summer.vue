<template>
	<ul class='container'>
		<li class='item' v-for="item in itemsInfo" :key="item.id">
			<a href="###">
				<div class='item-show'>
					<img class="loading" :src="item.imgSrc" alt="">
					<span class='item-name'>
						<span class='name-inner'>{{item.sightName}}</span>
					</span>
				</div>
				<div class='item-info'>
					<h4 class='item-name'>{{item.itemName}}</h4>
					<p class='item-intro'>{{item.itemIntro}}</p>
					<div class='item-do'>
						<span class='order-btn'>预定</span>
					</div>
					<div class='item-lure'>
					    <span class='item-price'>&yen;</span>
					    <em class='now-price-num'>{{item.nowPrice}}</em>
						<span class='item-cost'>票面价¥<em class='cost-num'>{{item.prePrice}}</em></span>
					</div>
				 </div>
			</a>
		</li>
	</ul>	
</template>

<script>
export default {
	created() {
		this.$http.get('/static/productDetail_summer.json').then(response => {
				this.someData = response.body;
				this.itemsInfo = this.someData.data.itemsInfo;
				this.handleGetLength();
			},response => {
				console.log("url输入有误")
			});
	},
	data() {
		return {
			itemsInfo: []
    	}
	},
	methods: {
        handleGetLength(){
        	this.length = this.itemsInfo.length;
        	this.$emit("getLength",this.length); 	
        }
	}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.item {
		position: relative;
	    height: 2.2rem;
	    margin-top: .1rem;
	    padding: .1rem;
	    background: #fff;
	    cursor: pointer;
	}
	.item .item-link {
	    display: block;
	    text-decoration: none;
   		color: #25a4bb;
	}
	.item-show{
		position: relative;
	    float: left;
	    width: 2.4rem;
	}
	.item-show .loading {
	    width: 100%;
	    min-height: 2rem;
	    background-color: #f0f0f0;
	    vertical-align: top;
	    border: 0;
	}
	.loading {
	    background: #dcdcdc url(//simg4.qunarzz.com/piao/images/camel_56_56.jpg) center no-repeat;
	}
	.item-show .item-name {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    padding: .08rem 0;
	    background-color: rgba(0,0,0,.5);
	    color: #fff;
	    line-height: .32rem;
	}
	.item-show .name-inner {
	    display: block;
	    padding: 0 0.1rem;
	}
	.item-info {
	    margin-left: 2.5rem;
	}
	.item-name {
	    padding: 0.06rem 0;
	    font-size: 0.32rem;
	    line-height: 0.4rem;
	    color: #333;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical
	}
	.item-intro {
	    margin-top: 0.04rem;
	    line-height: 0.32rem;
	    color: #666;
	    overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item-do {
	    position: absolute;
	    right: 0.1rem;
	    bottom: 0.1rem;
	}
	.order-btn {
	    display: inline-block;
	    overflow: hidden;
	    width: .8rem;
	    height: .5rem;
	    font-size: .28rem;
	    line-height: .5rem;
	    text-align: center;
	    color: #fff;
	    background-color: #ff433e;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	}
	.item-lure {
	    position: absolute;
	    bottom: .1rem;
	    line-height: .6rem;
	}
	.item-cost {
	    font-size: .24rem;
	    margin-right: .1rem;
	    color: #9c9c9c;
	    text-decoration: line-through;
	}
	.item-cost .cost-num {
	    font-size: .24rem;
	}
	.price-num {
	    font: .28rem;
	}
	.item-price {
	    color: #ff433e;
	}
	.now-price-num {
	    font-size: .36rem;
	    color: #ff433e;
	}
	.price {
	    font: .24rem;
	}
</style>
