<template>
	<div>
		<div class="header" style="">
			<span class="header-left iconfont" role="left">&#xe600;</span>
			<h1 class="header-title" role="title">景点地图</h1>
			<span class="header-right" role="right"></span>
		</div>
	  	<div class="amap-page-container">
		    <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
		       	<el-amap-info-window v-for="window in windows" :position="window.position" :content="window.content" :visible="window.visible" :events="window.events"></el-amap-info-window>
		    </el-amap>
   		</div>
	  	<div class="poi-card">
		    <div class="poi-containner">
		        <div class="poi-info">
		            <div class="poi-title"><span class="poi-titleword">长隆飞鸟乐园</span><span class="poi-titletag">景点</span></div>
		        </div>
		    </div>
		</div>
 	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      zoom: 14,
          center: [121.5273285, 31.21515044],
          windows: [
            {
              position: [121.5273285, 31.21515044],
              content: '长隆飞鸟乐园!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow');
                }
              }
            }
          ]
	    }
	  }
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
		z-index: 91;
	}
	.header-left {
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
	}
	.header-left, .header-back {
		position: absolute;
		font-size: .36rem;
		color: #fff;
		text-align: center;
	}
	.header-title {
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	.header-right {
		position: absolute;
		top: 0;
		right: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		font-size: .32rem;
		color: #fff;
	}
	 .amap-demo {
      	height: 500px;
    }
	.poi-card {
	    position: absolute;
	    bottom: 0;
	    width: 100%;
	    margin-bottom: .06rem;
	}
	.poi-containner {
	    margin: 0 .1rem;
	    padding: .2rem;
	    background: #fff;
	    -webkit-box-shadow: 0 0 0.1rem #aaa;
	    -moz-box-shadow: 0 0 .1rem #aaa;
	    box-shadow: 0 0 0.1rem #aaa;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	}
</style>