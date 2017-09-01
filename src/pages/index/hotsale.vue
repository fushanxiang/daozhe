<template>
	<div>
		<h3 class="hotsale-title">热销推荐</h3>
		<ul class="hotsale-list">
			<router-link :to="{name:'parkdetail'}">
				<li class="hotsale-item border-bottom" v-for="item in itemsInfo" :key="item.id">
					<img class="item-img" v-lazy='item.imgUrl'/>
					<p class="item-title">{{item.title}}</p>
					<p class="item-content">{{item.content}}</p>
					<p class="item-price"><span class="price-yuan">&yen;</span>{{item.price}}<span class="price-font">起</span></p>
				</li>
			</router-link>
		</ul>
		<p class="item-all">查看所有产品</p>
	</div>
</template>

<script>
export default {
	props:["itemsInfo"],
	data () {
		return {
			
    	}
	}
}
</script>

<style scoped>
	@import '../../assets/css/common/border.css';
	.hotsale-list{
		background: #fff;
	}
	.hotsale-title {
		display: inline-block;
		width:60%;
		background: #f5f5f5;
		padding-left: .28rem;
		line-height: .8rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .28rem;
		color: #212121;
	}
	.hotsale-item {
		padding: .24rem .36rem .24rem .24rem;
		height: 1.4rem;
	}
	.hotsale-item::before {
		border-color: #e0e0e0;
	}
	.item-img {
		margin-right: .2rem;
		float: left;
		height: 1.4rem;
		width: 1.4rem;
	}
	.item-title {
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: .04rem;
		font-size: .3rem;
		color: #212121;
	}
	.item-content {
		overflow: hidden;
		margin: .16rem 0 .2rem 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .28rem;
		color: #9e9e9e;
	}
	.item-price {
		font-size: .36rem;
		color: #ff8300;
	}
	.price-yuan {
		margin-right: .04rem;
		font-size: .26rem;
	}
	.price-font {
		margin-left: .04rem;
		font-size: .24rem;
		color: #9e9e9e;
	}
	.item-all {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .86rem;
		text-align: center;
		background: #fff;
		font-size: .28rem;
		color: #00b7d7;
	}
</style>