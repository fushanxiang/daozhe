<template>
    <div>
        <swiper></swiper>
        <header-fixed :scrollTop="scrollTop" :style="style"></header-fixed>
    	  <recommend :recommendInfo="recommendInfo" :style="styleRec"></recommend>
        <foot-fixed :style="styleObject"></foot-fixed>
    </div>
</template>

<script>
    import Swiper from '../parkdetail/swiper.vue'
    import Recommend from './recommend.vue'
    import FootFixed from './footfixed.vue'
    import HeaderFixed from '../parkdetail/headerfixed.vue' 
export default {
  data () {
    return {
        scrollTop: 0,
        headerShow: false,
        recommendInfo: [],
        styleObject:{
            position:'fixed',
            left:0,
            bottom:0
        },
        styleRec:{
            marginBottom:".88rem"
        }
    }
    
  }, 

  mounted() {
      var this_ = this;
      window.addEventListener('scroll', function() {
        this_.scrollTop = document.body.scrollTop;
      }, false);
  },

  beforeDestroy: function() {
    window.removeEventListener("scroll", function() {
      this_.scrollTop = document.body.scrollTop;
    }, false);
  },

   created() {
      this.$http.get('../../../static/ticketdetail.json').then(response => {
        var data = response.data;
        this.recommendInfo = data.recommendInfo;
      }, response => {
        console.log("dfs");
      });
    },

  components:{
    "header-fixed": HeaderFixed,
  	"recommend": Recommend,
    "foot-fixed": FootFixed,
    "swiper": Swiper
  },

  computed: {
      style: function() {
          if(this.headerShow) {
            return "opacity:1;"
          } else {
            return "opacity:" + this.scrollTop / 200
          }
      } 
  }
}
</script>
<style scoped>

</style>
