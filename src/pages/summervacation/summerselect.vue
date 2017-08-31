<template>
	<div class="summer-select" id="summer-select">    
		<div class="sumselect-item">
			 <ul class="sumselect-content">
			 	<li class="sumselect-category" v-for="item in selectInfo">
			 	    <div class="sumselect-frame">
			 	   	    <div class="sumselect-img">
			 			    <img  v-lazy="item.imgeUrl">
			 			    <span>北京</span>
				 		</div>
				 		<div class="sumselect-word">
				 			<div class="sumselect-title">{{item.title}}</div>
				 			<div class="sumselect-price">
				 			    <span class="price-new">{{item.redPrice}}</span>
				 			    <span class="price-old">{{item.grayPrice}}</span>
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
	
	export default {
		name: 'summerselect',

		components: {
           
		},

		data() {
			return {
				selectInfo: [{
					"id": 1,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的客户管理卡哈啦哈啦时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"
				},{
					"id": 2,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 3,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 4,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 5,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 6,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事激发撒上了飞机阿里卷发多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 7,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				},{
					"id": 8,
					"imgeUrl":"https://imgs.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_292x180_81727aaa.jpg",
					"link": "/detail",
					"title":"十度聚龙湾的时光都是根深蒂固树大根深地方割发代首歌功颂德上的根深蒂固发生的故事多玻璃栈道成人票（含大门票)",
					"redPrice":"¥35",
					"grayPrice":"票面价¥40"

				}]
			}
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
.sumselect-item{
	width: 100%;
	overflow: hidden;
}
.sumselect-content{
	width: 100%;
	margin: 0 .12rem -.2rem;
}
.sumselect-category{
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
    display: -webkit-box; 
	-webkit-line-clamp: 2; 
	-webkit-box-orient: vertical; 
}
.sumselect-price{
	overflow: hidden;
    position: relative;
    margin-top: .06rem;
    height: .4rem;
    line-height: .4rem;
    vertical-align: middle;
}
.price-new{
	color: #ff4c56;
    font-size: .24rem;
}
.price-old{
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