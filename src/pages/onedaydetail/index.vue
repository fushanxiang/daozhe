<template>
  <div id="order">
      <transition name="slide-fade">
         <div class="mp-page" v-show="show===true">
           <header-image :swiperInfo="swiperInfo"></header-image>
           <sight-note :headerTitle="headerTitle"></sight-note>
           <title-comment></title-comment>
           <Tab :tabInfo="tabInfo" :scrollTop="scrollTop" @updateShow="change"></Tab>
           <other-comment></other-comment>
           <div class="mp-whitespace"></div>
           <Introduce></Introduce>
         </div>
        </transition>
      <transition name="slide-fade">
        <div id="large-map" class="mp-page" v-show="show===false">
          <div class="map-header">
             <span class="iconfont" @click="handleClick">&#xe624;</span>
             <h1>景点地图</h1>
             </div>
        </div>
      </transition>
  </div>
</template>
<script>
import headerImage from './header-image.vue'
import sightNote from './sight-note.vue'
import TitleComment from './titlecomments.vue'
import OtherComment from './othercomment.vue'
import Tab from './components/tab.vue'
import Introduce from '@/pages/onedaydetail/introduce'
export default {
  name: 'index',
  		data(){
  			return{
                swiperInfo: [],
                headerTitle: '',
                show:true,
                center:[],
  				      scrollTop: 0,
                "tabInfo": {
                    "index": {
                        "tabs": [],
                        "tabOfset": {}
                    },
                     "tourItinerary": {
                         "map": {
                         },
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
            window.addEventListener('scroll',this.Onscroll.bind(this),false);
        },
      		beforeDestroy: function () {
      		    window.removeEventListener("scroll",this.Onscroll.bind(this),false);
      		},
      		created (){
      			this.$http.get('/static/onedaytour-details.json').then(response => {
      			     this.swiperInfo = response.body.data.swiperImg;
                 this.headerTitle = response.body.data.index;
                 this.tabInfo =JSON.parse(JSON.stringify(response.body.data.tab));
                 this.center=this.tabInfo.tourItinerary.map.center;
                 this.loadmap();     //加载地图和相关组件

      			  }, response => {
      			    console.log("获取数据失败")
      			  });
      		},
          components:{
            "title-comment": TitleComment,
            "other-comment":OtherComment,
            "Tab":Tab,
            "header-image": headerImage,
            "sight-note": sightNote,
            "Introduce": Introduce
              
          },
          methods:{
             loadmap(){              
              const map = new AMap.Map('large-map', {
                zoom: 12,
                center:this.center
              });
            },
            Onscroll(){
              this.scrollTop = document.body.scrollTop;
            },
            change(){
              this.show=false;
            },
            handleClick(){
               this.show=true;
            }
          }

}
</script>
<style scoped>


    @import '../../assets/css/common/border.css';
    @import "../../assets/font/iconfont.css";
     .slide-fade-enter-active {
       transition: all .4s ease;
     }
     .slide-fade-leave-active {
       transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
     }
     .slide-fade-enter, .slide-fade-leave-to
     {
       transform: translateX(10px);
       opacity: 0;     }
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
    .mp-whitespace {
        width: 100%;
        height: 1.2rem;
    }
    .map-header{
      height: .88rem;
      width: 100%;
      background: #00bcd4;
      box-sizing: border-box;
      padding: 0 .2rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
    }

    h1,.iconfont{
      color: #fff;
      line-height:.88rem;
      text-align: center;
    }
    .map-header .iconfont{
      line-height: .88rem;
      position: absolute;
    }

</style>