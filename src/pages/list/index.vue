<template>
    <div>
        <index-header></index-header>
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
</style>
