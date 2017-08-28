<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    <icon-swiper></icon-swiper>
    <position-sale></position-sale>
    <foot></foot>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import PositionSale from './positionsale.vue'
import Foot from './foot.vue'

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
    "position-sale": PositionSale,
    "foot": Foot
  }
}
</script>

<style scoped>

</style>
