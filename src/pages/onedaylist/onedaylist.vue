<template>
  <div>
	    <header-index></header-index>
	    <scroll-index :dataInfo="listInfo"></scroll-index>
      <oneday-tab></oneday-tab>
	</div>
 
</template>

<script>
import onedayTab from './oneday-tab.vue'
import Header from '../onedaytour/header.vue'
import Scroll from './onedayscroll.vue'

export default {
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
  	'scroll-index':Scroll,
    "oneday-tab":onedayTab
  }
}
</script>


<style scoped>

</style>