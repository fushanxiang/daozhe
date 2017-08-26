<template>
    <div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    	<icon-swiper></icon-swiper>
	</div>
</template>

<script>
import IndexHeader from '../index/header.vue'
import ImgSwiper from '../index/imgswiper.vue'
import IconSwiper from '../index/iconswiper.vue'


export default {
  name: 'onedaytour',
  data () {
    return {
    }
     
  },
  components:{
  	"index-header": IndexHeader,
  	"img-swiper": ImgSwiper,
    "icon-swiper": IconSwiper
  }
}
</script>


<style scoped>
	
</style>
