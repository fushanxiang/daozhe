<template>
	<div @mousewheel="test">
    <recommend></recommend>
    <recommend-sites></recommend-sites>
    <ua-pop :deltaY="deltaY"></ua-pop>
  </div>

</template>

<script>

  import Recommend from './recommend.vue'
  import RecommendSites from './recommendsites.vue'
  import Uapop from './uapop.vue'

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
    "ua-pop":Uapop
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
