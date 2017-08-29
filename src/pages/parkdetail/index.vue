<template>
	<div @mousewheel="test">   
    <park-location></park-location>
    <detail-tree></detail-tree>
    <header-fixed :scrollTop="scrollTop" :style="style"></header-fixed>  
    <discuss></discuss>
    <recommend></recommend>
    <recommend-sites></recommend-sites>
    <ua-pop :deltaY="deltaY"></ua-pop>
   
 </div>  
</template>

  <script>
    import DetailTree from './detailtree.vue'
	  import ParkLocation from './parkLocation.vue'
  	import Recommend from './recommend.vue'
  	import RecommendSites from './recommendsites.vue'
    import Uapop from './uapop.vue'
  	
  	import HeaderFixed from './headerfixed.vue'
  	import Discuss from './discuss.vue'
  
export default {
  name: 'hello',
  data () {
    return {
      deltaY :true,
      scrollTop: 0,
      headerShow: false
     }
  },
  components: {
    "park-location":ParkLocation,
    "detail-tree":DetailTree, 
    "recommend": Recommend,
    "recommend-sites": RecommendSites,
    "ua-pop":Uapop,
    
    "header-fixed":HeaderFixed,
    "discuss":Discuss
  },
  mounted() {
    var this_ = this;
    window.addEventListener('scroll', function () {
                this_.scrollTop = document.body.scrollTop;
            }, false);
  },
  beforeDestroy: function () {
            window.removeEventListener("scroll", function () {
                this_.scrollTop = document.body.scrollTop;
            }, false);
    },
   methods:{
    test(e) {
      if(e.deltaY < 0) {
        this.deltaY=false;
         
      }else{
        this.deltaY=true;
      }
    }
  },
  computed: {
    style: function() {
     if(this.headerShow) {
         return "opacity:1"
                } else {
                    return "opacity:" + this.scrollTop / 200
     }
    }

  }
  
}
</script>

<style scoped>

	
</style>
