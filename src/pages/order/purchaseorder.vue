<template>
	<div class="box">
		<order ></order>
		<powerbuy></powerbuy>   
	</div>
</template>

<script>

import Powerbuy from './powerbuy.vue'
import Order from './order.vue'

export default {
  name: 'purchaseorder',
  data () {
    return {}    
  },
  components:{
  	"order": Order,
  	"powerbuy": Powerbuy,
   
  }
}
</script>

<style scoped>
  
</style>
