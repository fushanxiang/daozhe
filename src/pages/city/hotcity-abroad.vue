<template>
	<div  class="city-list">

		<div class="1-h selCityTap">
			<div class="position">您的位置</div>
			<div  class="site-text site-text-hot">
				<span class="sites sites-hot">港澳台...</span>
			</div>
		</div>
		<div class="l-h">
		<div class="position">热门城市</div>
			<div class="site-text">
				<span v-for="item in datas" class="sites histCitySite">{{item.city}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
 var hotcity = require ('../../hotcity_abroad.json');
 var datas = hotcity.data.inlandhotcity;

export default { 
	data () {
		return {
			datas : datas
    	}
	},
	mountd() {

	}
}
</script>

<style scoped>
	.city-list {
		width:100%;
		min-height: 3.2rem;
		background: #F5F5F5;
	}
	.l-h {
	    font-size: 0;
	    overflow: hidden;
    }
   .position {
   		width:100%;
   		margin-left: 0.16rem;
   		line-height: .64rem;
	    text-align: left;
	    font-size: .24rem;
   }
	.site-text {
		box-sizing: border-box;
		padding: .2rem 0rem 0rem .2rem; 
		width:100%;
		height: auto;
		background: #fff;
		border: .01rem solid #ccc;
		border-left: 0;
		border-right: 0;
	}
	.site-text-hot {
		padding: 0;
		box-sizing: border-box;
		padding: .1rem 0rem .1rem .2rem; 
	}
	.sites {
	    width: 1.6rem;
	    height: .6rem;
	    border-radius: .1rem;
	    font-size: .28rem;
	    background: #fff;
	    text-align: center;
	    line-height: .6rem;
	    display: inline-block;
	    margin: 0 .24rem .18rem 0;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    border: .02rem solid #ccc;
    }
    .sites-hot{
    	margin: 0;
    }
	
</style>
