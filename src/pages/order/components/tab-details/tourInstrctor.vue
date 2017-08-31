<template>
	<div id="tourInstrctor">
	   <div class="mp-routesum-outter">
		            <div class="mp-routesum-inner" >
		                <div class="mp-routesum-item" v-for=" item in tourItinerary.routesum" >
		                    <div class="mp-routesum-title">
		                        <span class="mp-routesum-icon iconfont" v-html="item.icon"></span>
		                        <span>{{item.item}}</span>
		                    </div>
		                    <div class="mp-routesum-content">{{item.info}}</div>
		                </div>
		            </div>
		  </div>
		  <div class="mp-summary-head">
		              <h3 class="mp-summary-title">行程亮点</h3>
		  </div>
		  <div class="mp-card-content">
		       <p class="mp-card-desc" v-for="item in tourItinerary.cardContent">
		          ★ {{item.content}}<br>
		        </p>
		   </div>
		   <h3 class="mp-route-headtext">行程安排</h3>
		   <div mp-role="tabContent">
		        <div class="mp-prddetail-content mp-timeline">
                   <div class="mp-prddetail-routeitem" v-for="item in tourItinerary.timeLine">
                       <span class="mp-prddetail-date">{{item.time}}</span>
                       <div class="mp-verticalline mp-dark-dash mp-prddetail-route">
                           <span class="mp-timeline-nodeicon iconfont" v-html="item.icon"></span>
                           <a href="#" style="color:#00afc7;" data-lat="39.906953" data-lng="116.424439">{{item.title}}</span>
                           </a>
                           <p class="mp-route-desc">{{item.content}}</p>
                       </div>
                   </div>
		         </div>
		       </div>
		       <a href="http://touch.piao.qunar.com/touch//product/showProductFeature.htm?productId=338603949" data-click="t_detail_instruction">
		               <div class="mp-card-moreoutter">
		                   <div class="mp-card-more mp-border-bottom">
		                       查看详细产品介绍<span class="mp-iconfont iconfont" style="font-weight: bold;">&#xe626;</span>
		                   </div>
		               </div>
		           </a>
		    <div class="amap-page-container" @click="handleClick">
		      <el-amap vid="amap" :zoom="12" :center="tourItinerary.map.center" class="amap-demo" >
			     <el-amap-info-window v-for="(mapWindow, index) in tourItinerary.map.windows" :position="mapWindow.position" :content="mapWindow.content"
			         :visible="mapWindow.visible" :key="index + 'map'">
			     </el-amap-info-window>
		      </el-amap>
		    </div>
	</div>
</template>
<script >
 /*   import Imap from './map.vue'*/
	export default{
			data(){
				return{
                  
				}
			},
			props:["tourItinerary"],
			components:{
				  /*  Mapp:Imap*/
			},
			methods:{
				handleClick:function(){
					
				}
			}

		}
</script>
<style scoped>
     @import url("../../../../assets/css/order/order-tab.css");
     .amap-page-container{
          height: 3.5rem;
          padding: .2rem .2rem .1rem .2rem;
          overflow: hidden;
          margin-bottom: .2rem;
     }
     .amap-demo {
       height: 150px;
     }
     .amap-Info-content {
     		z-index: 2;
     }
</style>