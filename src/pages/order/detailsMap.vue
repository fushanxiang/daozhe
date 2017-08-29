<template>
    <div class="amap-page-container">
       <div class="map-header">
       <span class="iconfont">&#xe624;</span>
       <h1>景点地图</h1>
       </div>
      <el-amap vid="amap" :zoom="zoom" class="amap-demo"  :events="events" :center="center">
        <el-amap-marker v-for="marker in markers" :position="marker.position" :key="marker.key">
        </el-amap-marker>
      </el-amap>
    </div>
  </template>
  <style scoped>
  @import "../../assets/font/iconfont.css";
    html,#app{
      height: 100%;
      width: 100%;
    }
    .amap-page-container{
         height: 500px;
         width: 100%
    }
    .map-header{
      height: .88rem;
      width: 100%;
      background: #00bcd4;
      box-sizing: border-box;
      padding: 0 .2rem;
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
  <script>
    module.exports ={
      data () {
        let self = this;
        return {
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
          events: {
             click(e) {
               let { lng, lat } = e.lnglat;
               self.lng = lng;
               self.lat = lat;
               var geocoder = new AMap.Geocoder({
                 radius: 1000,
                 extensions: "all"
               });        
               geocoder.getAddress([lng ,lat], function(status, result) {
                 if (status === 'complete' && result.info === 'OK') {
                   if (result && result.regeocode) {
                     self.address = result.regeocode.formattedAddress;
                     self.$nextTick();
                   }
                 }
               });        
             }
           },
           lng: 0,
           lat: 0
        }
      }

    };
</script>