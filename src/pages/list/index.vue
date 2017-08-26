<template>
	<div>
  <index-header></index-header>
  <p>{{name}}</p>
  <h1>wwwww</h1>
  </div>
</template>

<script>
import IndexHeader from './dz01/header.vue'

export default {
  name: 'hello',
  data () {
    return {
      name: 'list page'
    }
  },
  components:{
    "index-header": IndexHeader
  }
}
</script>


<style scoped>
	div {
		background: green;
	}
</style>
