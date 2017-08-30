<template>
    <div>
        <index-header :dataScen="hotSearchScen" :dataArea="hotSearchArea"></index-header>
        <index-detail></index-detail>
        <item-products :productItems="content"></item-products>
    </div>
</template>

<script>

import IndexHeader from './dz01/header.vue'
import IndexDetail from './dz02/index.vue'
import ItemProducts from './dz03/index.vue'

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
        var data=response.body.data;
        this.hotSearchScen=data.hotSearchScen;
        this.hotSearchArea=data.hotSearchArea;
        this.content=data.content;
      }, response => {
      });
  },
  components:{
    "index-header": IndexHeader,
    "item-products": ItemProducts,
    "index-detail": IndexDetail
  }
}
</script>


<style scoped>
</style>
