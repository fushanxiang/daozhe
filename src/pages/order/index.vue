<template>
  <div id="order">
     <div class="mp-page">
       <title-comment></title-comment>
       <Tab :tabInfo="tabInfo" :scrollTop="scrollTop"></Tab>
       <other-comment></other-comment>
      </div>
	</div>
</template>

<script>

import TitleComment from './titlecomments.vue'
import OtherComment from './othercomment.vue'
import Tab from './components/tab.vue'
import detailsMap from './detailsMap.vue'
export default {
  name: 'index',
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
          "tabInfo":{},
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
                console.log(this.$data.tabInfo);
      			  }, response => {
      			    console.log("获取数据失败")
      			  });
      		},
          components:{
              "title-comment": TitleComment,
              "other-comment":OtherComment,
              "Tab":Tab,
        	    "detailsMap":detailsMap
          }
}
</script>
<style scoped>
 @import "../../assets/font/iconfont.css";
    .top-head{
        width: 100%;
        height: 7.16rem;
        background: pink;
    }
    .comments{
      overflow: hidden;
    }

    	#order{
    		background: #f1f5f6;
    	}
    	.mp-page {
    	    position: absolute;
    	    left: 0;
    	    width: 100%;
    	    min-height: 100%;
    	    background: #f5f5f5;
    	}

</style>
