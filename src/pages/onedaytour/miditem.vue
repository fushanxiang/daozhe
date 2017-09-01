<template>
	<div class="miditem">
		<ul class="miditem-list">
			<li class="miditem-item border-right" v-for="item in twoItemsInfo" :key="item.id">
				<p class="miditem-title">{{item.title}}</p>
				<p class="miditem-content">{{item.content}}</p>
				<img class="item-img" :src="item.imgUrl"/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: ["twoItemsInfo"]
}
</script>

<style scoped>
	@import '../../assets/css/common/border.css';
	.miditem {
		position: relative;
		top: .88rem;
		height: 1.2rem;
		background: #fff;
		margin-top: .2rem;
	}
	.miditem-item {
		height: 1.2rem;
		width: 50%;
		position: relative;
		float: left;
		border-color: #ccc;
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
