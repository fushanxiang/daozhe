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

<<<<<<< HEAD
import IndexHeader from './header/header.vue'
import IndexDetail from './sort/index.vue'
import ItemProducts from './ProductItems/index.vue'
=======
import IndexHeader from './dz01/header.vue'
import IndexDetail from './sort/index.vue'
import ItemProducts from './dz03/index.vue'
>>>>>>> d90f09898f0cbfbc105239289e586aab1b455f99

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
  },
   methods: {
    handlefooter(){
       this.$store.commit("showNear",false)
    }
   }
}
</script>


<style scoped>
</style>
