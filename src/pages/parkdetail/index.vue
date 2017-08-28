<template>
	<div @mousewheel="test">
    <header-fixed></header-fixed>  
    <discuss></discuss>
    <recommend></recommend>
    <recommend-sites></recommend-sites>
    <ua-pop :deltaY="deltaY"></ua-pop>
    <order></order>
  </div>

</template>

<script>

  import Recommend from './recommend.vue'
  import RecommendSites from './recommendsites.vue'
  import Uapop from './uapop.vue'
  import Order from './order.vue'
  import HeaderFixed from './headerfixed.vue'
  import Discuss from './discuss.vue'
  

export default {
  name: 'hello',
  data () {
    return {
      deltaY :true
     }
  },
  components: {
    "recommend": Recommend,
    "recommend-sites": RecommendSites,
    "ua-pop":Uapop,
    "order":Order,
    "header-fixed":HeaderFixed,
    "discuss":Discuss
  },
   methods:{
    test(e) {
      if(e.deltaY < 0) {
        this.deltaY=false;
         
      }else{
        this.deltaY=true;
      }
    }
  }
}
</script>


<style scoped>
	
</style>
