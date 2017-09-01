<template>
  <div class="index">
  <index-top :itemshotcity="hotCity"></index-top>
    <img-topic :imgsInfo="products" :itemshotcity="hotCity"></img-topic>
    <list-lvyou :lvyou="lvyou"></list-lvyou>
  </div>
</template>

<script>
import IndexHeader from './header.vue'
import Topic from './topic.vue'
import Listlvyou from './lvyou.vue'
export default {
  name: 'index',
  data () {
    return {
      hotCity:[],
      products:[],
      lvyou:[]
    }
  },
  created(){
    this.$http.get('/static/admissionticket.json').then(response => {
      //console.log(response.body.data.hotCity)
      var data = response.body.data;
      this.hotCity = data.hotCity;
      this.products = data.products;
      //console.log(this.products)
      this.lvyou = data.lvyou;
      }, response => {
        console.log("ajax error");
      });
  },
  components:{
    "index-top":IndexHeader,
    "img-topic":Topic,
    "list-lvyou":Listlvyou
  }
}
</script>

<style scoped>
  .index{
    background: #fd551e;
  }
</style>
