<template>
    <div class="main-content">
    		<index-header></index-header>
    		<img-swiper :imgsInfo="imgsInfo"></img-swiper>
        <icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
        <hot-sale :itemsInfo="itemsInfo"></hot-sale>
        <holiday :holidayInfo="holidayInfo"></holiday>
        <foot></foot>
	 </div>
</template>
<script>
import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import HotSale from './hotsale.vue'
import Holiday from './holiday'
import Foot from './foot.vue'


export default {
  name: 'index',
  data () {
    return {
      iconsInfo:[],
      imgsInfo:[],
      itemsInfo:[],
      holidayInfo:[]
    } 
  },
  created() {
    this.$http.get('/static/index.json').then(response => {
    
      var data = response.body.data;
      this.iconsInfo = data.iconsInfo;
      this.imgsInfo = data.imgsInfo;
      this.itemsInfo = data.itemsInfo;
      this.holidayInfo = data.holidayInfo;
    }, response => {
      console.log("ajax error");
    });

  },
  components:{
  	"index-header": IndexHeader,
    "img-swiper": ImgSwiper,
    "icon-swiper": IconSwiper,
    "hot-sale": HotSale,
    "holiday":Holiday,
    "foot": Foot
  }
}
</script>

<style scoped>

.main-content{
    background: #f5f5f5;
}
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
