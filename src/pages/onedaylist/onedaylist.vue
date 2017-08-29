<template>
	<div>
	<header-index></header-index>
	<scroll-index :dataInfo="listInfo"></scroll-index>
	</div>
</template>

<script>

import Header from '../index/header.vue'
import Scroll from './onedayscroll.vue'

export default {
  name: 'index',
  data () {
    return {
      listInfo:[]
    }
  },
  created() {
    this.$http.get('/static/onedaylist.json').then(response => {
    var data = response.body.data;
    this.listInfo = data.listInfo;
    }, response => {
      console.log("ajax error")
    });
  },
  components:{
  	'header-index':Header,
  	'scroll-index':Scroll
  }
}
</script>

<style scoped>

</style>