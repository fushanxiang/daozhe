<template>
    <div>
        <index-header :dataScen="hotSearchScen" :dataArea="hotSearchArea"></index-header>
        <div class="footer" @click="handlefooter">
        <index-detail></index-detail>
        <item-products :productItems="content"></item-products>
        </div>
    </div>
</template>

<script>

import IndexHeader from './header/header.vue'
import IndexDetail from './sort/index.vue'
import ItemProducts from './ProductItems/index.vue'

export default {
  data () {
    return {
      hotSearchScen:[],
      hotSearchArea:[],
      content:[]
    }
  },
  created(){
       this.$http.get('/static/productItems.json').then(response => {
        var data = response.body.data;
        this.hotSearchScen = data.hotSearchScen;
        this.hotSearchArea = data.hotSearchArea;
        this.content = data.content;
      }, response => {
      });
  },
  components:{
    "index-header": IndexHeader,
    "item-products": ItemProducts,
    "index-detail": IndexDetail
  },
   methods: {
    handlefooter(){
       this.$store.commit("showNear",false);
       this.$store.commit("suggestsearch",false);
    }
   }
}
</script>


<style scoped>
</style>
