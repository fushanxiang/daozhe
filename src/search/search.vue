<template>
    <div>
        <index-header :dataScen="hotSearchScen" :dataArea="hotSearchArea"></index-header>
        <div class="footer" @click="handlefooter"></div>
    </div>
</template>

<script>

import IndexHeader from '../pages/list/header/header.vue'


export default {
  data () {
    return {
      hotSearchScen:[],
      hotSearchArea:[],
    }
  },
  created(){
       this.$http.get('/static/productItems.json').then(response => {
        var data = response.body.data;
        this.hotSearchScen = data.hotSearchScen;
        this.hotSearchArea = data.hotSearchArea;
      }, response => {
      });
  },
  components:{
    "index-header": IndexHeader,
  },
   methods: {
    handlefooter(){
       this.$store.commit("showNear",false)
    }
   }
}
</script>


<style scoped>
  .footer{
    position: absolute;
    top: 5.82rem;
    width: 100%;
    height: 100%;
  }
</style>
