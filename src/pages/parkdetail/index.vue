<template>
	<div>
  <detail-tree></detail-tree>
  <discuss></discuss>
  </div>
</template>

<script>
import DetailTree from './detailtree.vue'
import Discuss from './discuss.vue'

export default {
  name: 'hello',
  data () {
    return {
      name: 'parkdetail page'
    }

  },
   components:{
   "detail-tree":DetailTree,
   "discuss":Discuss
    }
}
</script>


<style scoped>

</style>
