<template>
	<div>
		<index-header></index-header>
		<img-swiper :imgsInfo="imgsInfo"></img-swiper>
        <icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
        <hot-sale></hot-sale>
        <index-product :product="product"></index-product>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import IndexProduct from './product.vue'
import HotSale from './hotsale.vue'


export default {
  name: 'index',
  data () {
    return {
      iconsInfo:[],
      imgsInfo:[],
      product:[]
    } 
  },
  created() {
    this.$http.get('/static/index.json').then(response => {
      var data = response.body.data;
      this.iconsInfo = data.iconsInfo;
      this.imgsInfo = data.imgsInfo;
      this.product = data.product;
    }, response => {
      console.log("ajax error");
    });
  },
  components:{
  	"index-header": IndexHeader,
  	"img-swiper": ImgSwiper,
    "icon-swiper": IconSwiper,
    "index-product": IndexProduct,
    "hot-sale": HotSale

  }
}
</script>

<style scoped>

</style>
