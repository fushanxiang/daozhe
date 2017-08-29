<template>
	<div id="order">
		<div class="mp-page">
			<!-- <IndexHeader></IndexHeader> -->
			<Tab :tabInfo="tabInfo" :scrollTop="scrollTop"></Tab>
		</div>
		 <div id="large-map">
		   
		</div>
	</div>
</template>
<script>
	/*import IndexHeader from './header.vue'
	import ImgSwiper from './imgswiper.vue'*/
	import Tab from './components/tab.vue'
	import detailsMap from './detailsMap.vue'
	export default{
		data(){
			return{
				zoom: 12,
				center: [116.397003, 39.922501],
				address:"",
				markers: [
				    {
				      position: [116.397003,39.922501],
				      visible: true,
				      key:1
				    },{
				      position: [116.398003,39.922501],
				      visible: true,
				      key:2
				    }
				          ],
				scrollTop: 0,
               "tabInfo": {
                   "index": {
                       "tabs": [],
                       "tabOfset": {}
                   },
                   "tourItinerary": {
                       "map": {},
                       "routesum": [],
                       "cardContent": [],
                       "timeLine": []
                   },
                   "instructions": {
                       "title": "",
                       "list": []
                   },
                   "expenseExplanation": {
                       "title": "",
                       "content": {
                           "expense": [{
                               "title": "",
                               "list": []
                           }, {
                               "title": "",
                               "list": []
                           }],
                           "last": {
                               "title": "",
                               "content": ""
                           }
                       }
                   }
               },
			}
		},
		mounted() {
		    var this_ = this;
		    window.addEventListener('scroll', function () {
		        this_.scrollTop = document.body.scrollTop;
		    }, false);
		    this.headerContent = this.headerTitle;
		},

		beforeDestroy: function () {
		    window.removeEventListener("scroll", function () {
		        this_.scrollTop = document.body.scrollTop;
		    }, false);
		},
		created:function(){
			this.$http.get('/static/onedaytour-details.json').then(response => {
			    this.$data.tabInfo =JSON.parse(JSON.stringify(response.body.data.tab));
			  }, response => {
			    console.log("获取数据失败")
			  });
		},
		components:{
			"Tab":Tab,
			"detailsMap":detailsMap
		}
	}
</script>
<style>
    @import "../../assets/font/iconfont.css";
	#order{
		background: #f1f5f6;
	}
	.mp-page {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f5f5f5;
	}
	.mp-page {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f5f5f5;
	}
</style>