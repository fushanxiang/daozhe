<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    <icon-swiper></icon-swiper>
    <hot-sale></hot-sale>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import HotSale from './hotsale.vue'

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
    "hot-sale": HotSale
  }
}
</script>

<style scoped>

</style>
