<template>
<<<<<<< HEAD
    <div>{{name}}</div>
=======
	<div>
  <index-header></index-header>
  <p>{{name}}</p>
  <h1>wwwww</h1>
  </div>
>>>>>>> 1f0d0817a1a71c26b395c76afb7349a559bb7008
</template>

<script>
import IndexHeader from './dz01/header.vue'
export default {
<<<<<<< HEAD
      name: 'hello',
      data () {
        return {
            name: 'list page'
        }
      }
=======
  name: 'hello',
  data () {
    return {
      name: 'list page'
    }
  },
  components:{
    "index-header": IndexHeader
  }
>>>>>>> 1f0d0817a1a71c26b395c76afb7349a559bb7008
}
</script>


<style scoped>
	div {
		background: green;
	}
</style>
