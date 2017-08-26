<template>
    <div>
        <index-header></index-header>
        <div class="wo-ding"></div>
        <item-products></item-products>
    </div>
</template>

<script>
import IndexHeader from './dz01/header.vue'
import ItemProducts from './dz03/index.vue'
export default {
  data () {
    return {
      name: 'list page'
    }
  },
  components:{
    "index-header": IndexHeader,
    "item-products": ItemProducts
  }
}
</script>


<style scoped>
	.wo-ding{
	   width:100%;
       height:1rem;
       background: #ccc;
	}
</style>
