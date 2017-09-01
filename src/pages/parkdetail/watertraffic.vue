<template>
	<div>
		<div class="area border-bottom area-hide" role="trafficWrap" style="visibility: visible;">
			<h3 class="area-title border-bottom">交通和到达</h3>
			<div class="area-content traffic-content">
				<div class="map-container" role="map">
					<img src="//api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.331236,23.005835&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.331236,23.005835&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png" class="map-img">
				</div>
				<div class="text-item">
					<h4 class="text-title">公交路线</h4>
					<div class="text-info">
						<p>地铁三号线长隆站E出口直达长隆水上乐园正门；202 、221 、247 、512 、530 、562路车到达长隆旅游度假区；79 、122 、125 、129 、301 、305 、522路车在洛溪新城站转乘 202 、221 、247 、512 、530 、562 路到达长隆旅游度假区</p>
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
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.area {
	    margin-bottom: .2rem;
	    background: #fff;
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
	.area-title::after {
	    content: " ";
	    position: absolute;
	    top: .32rem;
	    left: .2rem;
	    width: .06rem;
	    height: .28rem;
	    background: #00bcd4;
	    border-radius: .04rem;
	}
	.traffic-content {
	    padding-top: .32rem;
	}
	.area-content {
	    padding: 0 .2rem;
	    padding-top: .1rem;
	    padding-bottom: .06rem;
	}
	.map-container {
	    width: 100%;
	    height: 0;
	    padding-bottom: 54.054%;
	    margin-bottom: .22rem;
	}
	.map-img {
		width: 100%;
	}
	.text-item {
	    margin-bottom: .16rem;
	}
	.text-title {
	    font-weight: bold;
	    line-height: .42rem;
	    font-size: .28rem;
	    color: #212121;
	}
	.text-info {
	    word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    color: #616161;
	}
</style>