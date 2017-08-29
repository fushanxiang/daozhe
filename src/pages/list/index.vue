<template>
    <div>
        <index-header :dataScen="hotSearchScen" :dataArea="hotSearchArea"></index-header>
        <item-products></item-products>
    </div>
</template>

<script>

import IndexHeader from './dz01/header.vue'
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
      console.log(this.hotSearchScen)
      }, response => {
      });
  },
  components:{
    "index-header": IndexHeader,
    "item-products": ItemProducts
  }
}
</script>


<style scoped>
</style>
