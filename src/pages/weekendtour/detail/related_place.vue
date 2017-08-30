<template>

<div class="related-place-box">
	<div class="related-place">

		<div class="title">
			<div class="detail-title">
				<h3>相关推荐</h3>
			</div>
		</div>



		<div class="detail-box"  v-for="item in goodsInfo.relatedPlace" :key="item.id">
			<div class="detail-group">

				<div class="detail-name">
					<h2 class="detail-related-name">{{item.title}}</h2>
					<span class="level">(4A)</span>
				</div>

				<div class="detail-price">
					<span class="Icon">&yen;</span>
					<span id="price">{{item.sellPrice}}</span>
					<span class="priceunit">起/张</span>
				</div>

				<div class="detail-enter">
					<router-link  :to="'/weekendtour/slightmap/id=' + item.id" class="fl">
						<div class="sight">
							<div class="item">
								<span class="next-icon iconfont">&#xe614;</span>
								<span class="detail-related-text">{{item.address}}</span>
								<span class="next-icon iconfont d-right">&#58918;</span>
							</div>
						</div>
					</router-link>
				</div>

			</div>
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
	props:["goodsInfo"]
}
</script>





<style scoped>
.related-place-box{
	background: #f1f1f1;
	padding-top: .2rem;
}
.related-place:before,.related-place:after{
	content:"";
	position: absolute;
	left: 0;
	width: 100%;
	height: .02rem;
	background: #c9cccd;
}
.title{
	padding: 0 .2rem;
	background-color: #fff;
}
.detail-box{
	padding: .2rem .2rem 0;
	background-color: #fff;
}

.detail-title{
    overflow: hidden;
    position: relative;
    height: .88rem;
    color: #212121;
    font-size: .3rem;
    line-height: .88rem;
    text-indent: .12rem;
}
.detail-group{
	position: relative;
}
.detail-group:after{
	content: " ";
	background: #c8cccd;
    position: absolute;
    bottom: 0;
    left: 0;
    height: .02rem;
}
.detail-name {
	margin-bottom: .1rem;
	overflow: hidden;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.detail-name h2{
	display: inline-block;
	max-width:91%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.detail-title::before {
    content: " ";
    position: absolute;
    top: .33rem;
    left: 0;
    width: .06rem;
    height: .25rem;
    background: #00bcd4;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    border-radius: .04rem;
}
.detail-related-name{
    margin-bottom: .2rem;
    font-size: .32rem;
}
.detail-price{
	 margin: 0 0 .1rem 0;
}
.Icon{
	color: #ff8300;
    font-size: .24rem;
}
#price{
	color: #ff8300;
    font-size: .36rem;
}
.level{
	padding-left: 6px;
	color: #9e9e9e;
	margin-bottom: 7px;
}
.priceunit{
    color: #9e9e9e;
    font-size: .24rem;
}
.detail-enter{
    position: relative;
    height: .9rem;
    line-height: .9rem;
}
.detail-enter::before{
    content: ' ';
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-top: .02rem dashed #ccc;
    -webkit-transform: scaleY(.5);
    -moz-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    -o-transform: scaleY(.5);
    transform: scaleY(.5);
}

.detail-enter .sight{
	color:#9e9e9e;
	position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.detail-enter .item{
	position: relative;
	height: 100%;
    line-height: .9rem;
    overflow: hidden;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	align-self: center;
}
.detail-enter .item span{
	height: 100%;
	overflow: hidden;
}

.detail-enter .item::after{
	content: ' ';
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-top: .02rem solid #ccc;
    -webkit-transform: scaleY(.5);
    -moz-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    -o-transform: scaleY(.5);
    transform: scaleY(.5);
}
.detail-related-text{
	max-width:6.5rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.d-right{
	position: absolute;
	right: 0;
	top: 0;
}
.fl{
	display: block;
	height: 100%;
}



</style>