<template>
	<div>
  <index-header></index-header>
  <index-tab></index-tab>
  111

  </div>
</template>

<script>

import Header from './header.vue'
import Tab from './tab.vue'


export default {
  name: 'hello',
  data () {
    return {
      name: 'list page'
    }
  },
  components:{
    "index-header": Header,
    "index-tab": Tab
  }
}
</script>


<style scoped>
	div {
		background: red;
	}
</style>
