<template>
	<div class="summer-select">    
		<div class="sumselect-play">
			<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2016/1772travel10/170710/caption2.jpg">
		</div>
		<toggle ref="toggle"></toggle>
		<div class="sumselect-item">
			 <ul class="sumselect-content">
			 	<li class="sumselect-li" v-for="item in selectInfo">
			 	    <div class="sumselect-frame">
			 	   	    <div class="sumselect-img">
			 			    <img  :src="item.imgeUrl">
			 			    <span>北京</span>
				 		</div>
				 		<div class="sumselect-word">
				 			<div class="sumselect-title">{{item.title}}</div>
				 			<div class="sumselect-price">
				 			    <span class="price-red">{{item.redPrice}}</span>
				 			    <span class="price-gray">{{item.grayPrice}}</span>
				 			</div>
				 			<div class="sumselect-booked">立即预订</div>
				 		</div>
			 	    </div>
			 	</li>
			 </ul>
		</div>
		<div class="sumselect-more">
			<span class="sumselect-active">点击查看更多</span>
		</div>
	</div>
</template>

<script>
	import Toggle from './toggle.vue'
	export default {
		name: 'summerselect',
		data() {
			return {
				selectInfo: [{
					"id": 1,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"
				},{
					"id": 2,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 3,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 4,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 5,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 6,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 7,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 8,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				}]
			}
		},

		components: {
            "toggle": Toggle
		},

        created() {
	        window.addEventListener('scroll', this.handleScroll);
	    }
	}
</script>

<style scoped>
@import "../../assets/font/iconfont.css";
.summer-select{
	position: relative;
	width: 100%;
	background: #23a4e5;
}
.sumselect-play{
	overflow: hidden;
    min-height: .88rem;
}
.sumselect-play img{
    width: 100%;
    vertical-align: top;
}
.sumselect-item{
	width: 100%;
	overflow: hidden;
}
.sumselect-content{
	width: 100%;
	margin: 0 .12rem -.2rem;
}
.sumselect-li{
	float: left;
    width: 48.4%;
}
.sumselect-frame{
	display: block;
    margin: 0 .08rem .16rem;
    background: #fff;
    border-radius: .06rem;
}
.sumselect-img{
	overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 61.6%;
    border-radius: .06rem .06rem 0 0;
}
.sumselect-img img{
	width: 100%;
    vertical-align: top;
}
.sumselect-img span{
	overflow: hidden;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: .24rem;
    line-height: .4rem;
    text-indent: .1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.sumselect-word{
	overflow: hidden;
    min-height: 1rem;
    padding: .1rem;
}
.sumselect-title{
	overflow: hidden;
    height: .72rem;
    color: #333;
    font-size: .28rem;
    line-height: .36rem;
}
.sumselect-price{
	overflow: hidden;
    position: relative;
    margin-top: .06rem;
    height: .4rem;
    line-height: .4rem;
    vertical-align: middle;
}
.price-red{
	color: #ff4c56;
    font-size: .24rem;
}
.price-gray{
	color: #999;
    font-size: .24rem;
    text-decoration: line-through;
}
.sumselect-booked{
	min-width: 1.5rem;
    background: #ff4c56;
    color: #fff;
    font-size: .3rem;
    line-height: .56rem;
    text-align: center;
    border-radius: .06rem;
}
.sumselect-more{
    margin:0 auto;
}	
.sumselect-active{
	display: block;
    background: #6acfff;
    color: #fff;
    font-size: .32rem;
    line-height: .75rem;
    letter-spacing: .06rem;
    text-align: center;
}
</style>