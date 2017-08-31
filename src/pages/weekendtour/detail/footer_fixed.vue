<template>
	<div class="box">
		<div class="footer">
			<div class="left">
				<span class="icon">&yen;</span>
				<span class="price" >{{goodsInfo.sellPrice}}</span>
				<span class="original-price">{{goodsInfo.marketPrice}}</span>
			</div>

			<div class="right">
				<router-link :to="'/order/id=' + goodsInfo.id">
					<a href="javascript:;" id="bookingBtn" class="ljyd">立即预订</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	props: ["goodsInfo"]

}
</script>

<style scoped>

	.box{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
	    background: #fff;
	    color: #ff8300;
	    text-indent: .2rem;
	    line-height: 1rem;
	    display: block;
		box-sizing: border-box;

	}
	.footer{
		height: 100%;
	    line-height: 1rem;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		align-self: center;
	}
	.left{
		position: relative;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		width: 50%;
		height: 1rem;
		overflow: hidden;
		overflow: hidden;
	}
	.left::before{
		content:"";
	    width: 100%;
	    position: absolute;
	    left: 0;
	    top:0;
	    height: .02rem;
	    background: #cbccce;
	}
	.left span{
		height: auto;
	}
	.left .icon{
		position: absolute;
		left: -4px;
		top: 3px;
	}
	.price{
		margin-left: 6px;
		font-size: .42rem;
	    color: #ff8300;
    	text-indent: .2rem;
    	max-width: 123px;
    	overflow: hidden;

	}
	.original-price{

	    color: #9e9e9e;
    	font-size: .24rem;
    	overflow: hidden;
		white-space: nowrap;
		line-height: 1.11rem;
		text-overflow: ellipsis;
    	text-decoration: line-through;
	}
	.right{
		box-sizing: border-box;
		width: 50%;
		height: 1rem;
		overflow:hidden;
	    background: #ff8300;
	    color: #fff;
	    font-size: .4rem;
	    text-align: center;
	}
	.right a{
		color: #fff;
	}

</style>