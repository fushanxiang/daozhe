<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    <icon-swiper></icon-swiper>
    <index-product></index-product>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import IndexProduct from './product.vue'

export default {
  name: 'index',
  data () {
    return {
    }
     
  },
  components:{
  	"index-header": IndexHeader,
  	"img-swiper": ImgSwiper,
    "icon-swiper": IconSwiper,
    "index-product": IndexProduct
  }
}
</script>

<style scoped>

</style>
