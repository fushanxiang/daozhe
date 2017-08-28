<template>
	<div>
		<index-header></index-header>
<<<<<<< HEAD
		<img-swiper></img-swiper>
    <icon-swiper></icon-swiper>
    <index-location></index-location>
=======
		  <img-swiper :imgsInfo="imgsInfo"></img-swiper>
      <icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
      <hot-sale></hot-sale>
>>>>>>> e9f400f22ad2194bd106387d4f5bdf94b87b5432
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
<<<<<<< HEAD
import Location from './location.vue'
=======
import HotSale from './hotsale.vue'
>>>>>>> e9f400f22ad2194bd106387d4f5bdf94b87b5432

export default {
  name: 'index',
  data () {
    return {
      iconsInfo:[],
      imgsInfo:[]
    } 
  },
  created() {
    this.$http.get('/static/index.json').then(response => {
      var data = response.body.data;
      this.iconsInfo = data.iconsInfo;
      this.imgsInfo = data.imgsInfo;
    }, response => {
      console.log("ajax error");
    });
  },
  components:{
  	"index-header": IndexHeader,
  	"img-swiper": ImgSwiper,
    "icon-swiper": IconSwiper,
<<<<<<< HEAD
    "index-location": Location
=======
    "hot-sale": HotSale
>>>>>>> e9f400f22ad2194bd106387d4f5bdf94b87b5432
  }
}
</script>

<style scoped>

</style>
