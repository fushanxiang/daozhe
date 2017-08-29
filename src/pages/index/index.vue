<template>
	<div>
		<index-header></index-header>
		<img-swiper :imgsInfo="imgsInfo"></img-swiper>
    <icon-swiper :iconsInfo="iconsInfo"></icon-swiper>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'

export default {
  name: 'index',
  data () {
    return {
      iconsInfo:[],
      imgsInfo:[]
    }
     
  },
  created(){

    this.$http.get('/static/index.json').then(response => {
        var data = response.body.data;
        this.iconsInfo = data.iconsInfo;
        this.imgsInfo = data.imgsInfo;

    }, response => {
      // error callback
    });
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
