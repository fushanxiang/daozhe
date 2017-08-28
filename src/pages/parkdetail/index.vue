<template>
	<div @mousewheel="test">   
    <discuss></discuss>
    <recommend></recommend>
    <recommend-sites></recommend-sites>
    <ua-pop :deltaY="deltaY"></ua-pop>
  </div>

</template>

<script>

  import Recommend from './recommend.vue'
  import RecommendSites from './recommendsites.vue'
  import Uapop from './uapop.vue'
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
