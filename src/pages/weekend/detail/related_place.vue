<template>

<div>

	<div class="title">
		<div class="detail-title">
			<h3>相关推荐</h3>
		</div>
	</div>



	<div class="detail-box">
		<div class="detail-group">
			<div class="detail-name">
				<h2 class="detail-related-name">小汤山温泉度假区</h2>
				<span class="level">(4A)</span>
			</div>
			<div class="detail-price">
				<span class="Icon">&yen;</span>
				<span id="price">58</span>
				<span class="priceunit">起/张</span>
			</div>
			<div class="detail-enter">
				<a href="javascript:;" class="sight">
					<div class="item">
						<span class="next-icon iconfont">&#xe614;</span>
						<span class="detail-related-text">北京市昌平区小汤山现代农业科技示范园内</span>
						<span class="next-icon iconfont d-right">&#58918;</span>
					</div>
				</a>
			</div>
		</div>
    </div>
	


	<div class="detail-box">
		<div class="detail-group">
			<div class="detail-name">
				<h2 class="detail-related-name">温都水城养生馆</h2>
				<span class="level">(4A)</span>
			</div>
			<div class="detail-price">
				<span class="Icon">&yen;</span>
				<span id="price">77</span>
				<span class="priceunit">起/张</span>
			</div>
			<div class="detail-enter">
				<a href="javascript:;" class="sight">
					<div class="item">
						<span class="next-icon iconfont">&#xe614;</span>
						<span class="detail-related-text">北京市昌平区北七家镇郑各庄村王府街51号</span>
						<span class="next-icon iconfont d-right">&#58918;</span>
					</div>
				</a>
			</div>
		</div>
    </div>

	<div class="detail-box">
		<div class="detail-group">
			<div class="detail-name">
				<h2 class="detail-related-name">温都水城</h2>
				<span class="level">(4A)</span>
			</div>
			<div class="detail-price">
				<span class="Icon">&yen;</span>
				<span id="price">25</span>
				<span class="priceunit">起/张</span>
			</div>
			<div class="detail-enter">
				<a href="javascript:;" class="sight">
					<div class="item">
						<span class="next-icon iconfont">&#xe614;</span>
						<span class="detail-related-text">北京市昌平区北七家镇郑各庄村王府街55号</span>
						<span class="next-icon iconfont d-right">&#58918;</span>
					</div>
				</a>
			</div>
		</div>
    </div>
	
	<div class="detail-box">
		<div class="detail-group">
			<div class="detail-name">
				<h2 class="detail-related-name">温都水城HI水空间</h2>
				<span class="level">(4A)</span>
			</div>
			<div class="detail-price">
				<span class="Icon">&yen;</span>
				<span id="price">77</span>
				<span class="priceunit">起/张</span>
			</div>
			<div class="detail-enter">
				<a href="javascript:;" class="sight">
					<div class="item">
						<span class="next-icon iconfont">&#xe614;</span>
						<span class="detail-related-text">北京市昌平区北七家镇平西府街51号宏福创业园8号</span>
						<span class="next-icon iconfont d-right">&#58918;</span>
					</div>
				</a>
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
	}
}
</script>

<style scoped>

.detail-box,.title{
	margin-top: .1rem;
	padding: 0 .2rem;
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
.detail-group::after{
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




</style>