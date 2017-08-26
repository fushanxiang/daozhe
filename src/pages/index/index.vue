<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
        <icon-swiper></icon-swiper>
    <position-sale></position-sale>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'
import PositionSale from './positionsale.vue'

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
    "position-sale": PositionSale
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
