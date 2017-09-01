<template>
	<div>
		<div class="area border-bottom">
			<h3 class="area-title border-bottom">特色玩法</h3>
			<div class="area-content">
				<div role="textItem" class="text-item">
					<div class="text-title">长隆水上乐园</div>
					<div class="imgwrap" role="textInnerElem">
						<img class="park-img" role="lazyLoadImg" data-original-src="http://img1.qunarzz.com/sight/p0/1504/7f/7fc254c4d628610.water.jpg_710x420_e65ffe54.jpg" src="http://img1.qunarzz.com/sight/p0/1410/13/1b8ad559bdf2c90ad477a867b5afafea.jpg_710x420_23f1c77a.jpg" style="">
						<p class="imginfo ellipsis" role="textInnerElem">酷炫的设施</p>
					</div>
					<div class="text-info" role="textInnerElem">有各种水上游艺设备，从滑道高速下滑，带来刺激的体验。还有专门为孩子设计的宝贝水城和亲子滑道，适合家庭出游，带孩子游玩。</div>
					<div class="imgwrap" role="textInnerElem">
						<img class="park-img" role="lazyLoadImg" data-original-src="http://img1.qunarzz.com/sight/p0/1504/7f/7fc254c4d628610.water.jpg_710x420_e65ffe54.jpg" src="http://img1.qunarzz.com/sight/p0/1504/7f/7fc254c4d628610.water.jpg_710x420_e65ffe54.jpg" style="">
						<p class="imginfo ellipsis" role="textInnerElem">全家游</p>
					</div>
					<div class="text-info" role="textInnerElem">哇~和粑粑麻麻一起到水上乐园来消暑，好开心！！！</div>
					<div class="imgwrap" role="textInnerElem" :style="styleObj">
						<img class="park-img" role="lazyLoadImg" data-original-src="http://img1.qunarzz.com/sight/p0/1507/97/56c577cf6c05088eb6150b0491871528.water.jpg_710x420_b8c36305.jpg" src="http://img1.qunarzz.com/sight/p0/1507/97/56c577cf6c05088eb6150b0491871528.water.jpg_710x420_b8c36305.jpg">
						<p class="imginfo ellipsis" role="textInnerElem" :style="styleObj">超级巨兽碗</p>
					</div>
					<div class="text-info" role="textInnerElem" :style="styleObj">超级巨兽碗，你先在紫水晶通道穿越，来到一个巨碗中。当你稍觉平稳，仰望到蓝天白云时，突然被吸进一个黑洞，你的大声呼喊还没结束，你已穿越黑洞回到现实。</div>
					<div class="imgwrap" role="textInnerElem" :style="styleObj">
						<img class="park-img" role="lazyLoadImg" data-original-src="http://img1.qunarzz.com/sight/p0/1410/13/eb00e1f6c7f4a4d10d1276417b84bf03.jpg_710x420_e4b9d6d0.jpg" src="http://img1.qunarzz.com/sight/p0/1410/13/eb00e1f6c7f4a4d10d1276417b84bf03.jpg_710x420_e4b9d6d0.jpg">
						<p class="imginfo ellipsis" role="textInnerElem" :style="styleObj">超级大喇叭</p>
					</div>
					<div class="text-info" role="textInnerElem" :style="styleObj">超级大喇叭，家人一起坐在四叶草浮圈里，从六层多楼高的平台出发，像被龙卷风吸进一个巨大喇叭中，在快速滑行中倾情欢叫，大喇叭会让你的声音传遍整个园区。</div>
					<div class="imgwrap" role="textInnerElem" :style="styleObj">
						<img class="park-img" role="lazyLoadImg" data-original-src="http://img1.qunarzz.com/sight/p0/1504/92/92c82c4e0c17755e.water.jpg_710x420_5d0b7c69.jpg" src="http://img1.qunarzz.com/sight/p0/1504/92/92c82c4e0c17755e.water.jpg_710x420_5d0b7c69.jpg">
						<p class="imginfo ellipsis" role="textInnerElem" :style="styleObj">去玩~~</p>
					</div>
					<div class="text-info" role="textInnerElem" :style="styleObj">嗯？粑粑去哪儿了？村长在这里耶~~</div>
				
				</div>
			</div>
			<div class="expand border-top" v-show="mode" role="expandButton" @click="handleModeClick">展开更多
				<span class="iconfont more-arrow">&#xe6a6;</span>
			</div>
			
		</div>
	</div>	
</template>

<script>
	export default {
		data () {
			return {
				prompt:false,
				mode:true,
				styleObj:{
					display:"none"
				}
			}
		},
		methods: {
			handleModeClick:function() {
				this.mode=false;
				this.prompt=true;
				this.styleObj.display="block";
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.area {
	    margin-bottom: .2rem;
	    background: #fff;
	}
	.border-bottom{
		position: relative;
	}
	.area.border-bottom::before, .area-title.border-bottom::before {
	    border-color: #c9cccd;
	}
	.area-title {
	    position: relative;
	    overflow: hidden;
	    height: .9rem;
	    line-height: .9rem;
	    padding: 0 .34rem;
	    font-size: .3rem;
	    font-weight: bold;
	    color: #212121;
	}
	.area-content {
		padding: 0 .2rem ;
	    padding-top: .1rem;
	    padding-bottom: .06rem;
	}
	.text-item {
	    margin-bottom: .16rem;
	}
	.text-title {
	    font-weight: bold;
	}
	.imgwrap {
	    position: relative;
	    overflow: hidden;
	    width: 100%;
	    height: 0;
	    margin: .12rem 0;
	    padding-bottom: 59.1549%;
	    background: url(//simg2.qunarzz.com/piao/images/camel_440_285.jpg);
	    background-size: cover;
	}
	.park-img {
	    vertical-align: top;
	    width: 100%;
	}
	.imginfo {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    height: .6rem;
	    line-height: .6rem;
	    width: 100%;
	    background: rgba(0,0,0,.5);
	    font-size: .28rem;
	    color: #fff;
	    text-align: center;
	}
	.ellipsis {
	    overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.text-info {
	    word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    color: #616161;
	}
	.expand {
	    line-height: .88rem;
	    text-align: center;
	}
	.border-top{
	    position: relative;
	}
</style>