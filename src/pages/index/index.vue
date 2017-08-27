<template>
	<div class="main-content">
		<index-header></index-header>
		<img-swiper></img-swiper>
        <icon-swiper></icon-swiper>
        <position-sale></position-sale>
        <hot-recommend></hot-recommend>
        <holiday></holiday>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import PositionSale from './positionsale.vue'
import HotRecommend from './hotrecommend'
import Holiday from './holiday'
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
    "hot-recommend":HotRecommend,
    "holiday":Holiday
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
