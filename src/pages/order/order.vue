<template>
	<div>{{name}}</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'order page'
    }
  }
}
</script>


<style scoped>
	div {
		background: red;
	}
</style>