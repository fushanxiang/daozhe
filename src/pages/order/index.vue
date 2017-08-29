<template>

  <div id="order">
     <div class="mp-page">

       <header-image :swiperInfo="swiperInfo"></header-image>
       <sight-note :headerTitle="headerTitle"></sight-note>
       <title-comment></title-comment>
       <Tab :tabInfo="tabInfo" :scrollTop="scrollTop"></Tab>
       <other-comment></other-comment>
      </div>
  </div>
</template>

<script>
import headerImage from './header-image.vue'
import sightNote from './sight-note.vue'
import TitleComment from './titlecomments.vue'
import OtherComment from './othercomment.vue'
import Tab from './components/tab.vue'
import detailsMap from './detailsMap.vue'

export default {

  name: 'index',
  		data(){
  			return{
                swiperInfo: [],
                headerTitle: '',
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
      		created (){
      			this.$http.get('/static/onedaytour-details.json').then(response => {
      			     this.swiperInfo = response.body.data.swiperImg;
               
                 console.log(response.body.data.swiperImg)
                 this.headerTitle = response.body.data.index;
                
                this.tabInfo =JSON.parse(JSON.stringify(response.body.data.tab));
                console.log(this.$data.tabInfo);
      			  }, response => {
      			    console.log("获取数据失败")
      			  });
      		},
          components:{
            "title-comment": TitleComment,
            "other-comment":OtherComment,
            "Tab":Tab,
            "detailsMap":detailsMap,
            "header-image": headerImage,
            "sight-note": sightNote
              
          }

}
</script>
<style scoped>

    @import '../../assets/css/base/reset.css';

    @import "../../assets/font/iconfont.css";

    .top-head {
        width: 100%;
        height: 7.16rem;
        background: pink;
    }
    .comments {
       overflow: hidden;
    }
    #order {
        background: #f1f5f6;
    }
    .mp-page {
        width: 100%;
        min-height: 100%;
        position: absolute;
        left: 0;
        background: #f5f5f5;
    }

</style>