<template>
	<div class="miditem">
		<ul class="miditem-list">
			<li class="miditem-item border-right" v-for="item in itemsInfo" :key="item.id">
				<p class="miditem-title">{{item.title}}</p>
				<p class="miditem-content">{{item.content}}</p>
				<img class="item-img" :src="item.imgUrl"/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			itemsInfo: [{
				"id": "1",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1705/19/2242e99c881ae902.png_80x80_ef0daf45.png",
				"title": "清凉夏日游",
				"content": "夏日避暑路线精选"
			},{
				"id": "2",
				"imgUrl": "http://img1.qunarzz.com/piao/fusion/1707/a9/31ab3b84c7dc7802.png_80x80_9b35d411.png",
				"title": "9元起",
				"content": "12周年庆门票秒杀"
			}]
    	}
	}
}
</script>

<style scoped>
	@import '../../assets/css/common/border.css';
	.miditem {
		height: 1.2rem;
		background: #fff;
		margin-top: .2rem;
	}
	.miditem-item {
		position: relative;
		float: left;
		height: 1.2rem;
		width: 50%;
		border-color: #ccc;
	}
	.miditem-item:nth-child(odd){
		border-right: none;
	}
	.miditem-title {
	    line-height: .44rem;
	    margin-right: 1rem;
	    margin-left: .2rem;
	    padding-top: .22rem;
	    font-size: .3rem;
	    color: #212121;
	}
	.miditem-content {
	    overflow: hidden;
	    line-height: .36rem;
	    width: 1.8rem;
	    margin-right: 1rem;
	    margin-left: .2rem;
	    font-size: .24rem;
	    color: #616161;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item-img {
		position: absolute;
		margin-right: .2rem;
		height: 1.2rem;
		width: 1.2rem;
		right: 0;
		bottom: 0;
	}
</style>
