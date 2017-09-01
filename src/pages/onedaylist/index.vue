<template>
    <div>
	    <header-index></header-index>
        <ticketnum :newslist="newslist"></ticketnum>
	    <scroll-index :dataInfo="listInfo"></scroll-index>
     	<oneday-tab></oneday-tab>
    </div>
</template>

<script>
import onedayTab from './oneday-tab.vue'
import Header from '../onedaylist/header.vue'
import Scroll from './onedayscroll.vue'
import Ticketnum from './ticketNum.vue'
export default {
  data () {
    return {
       listInfo: [],
       newslist: []
    }
  },
  created() {
    this.$http.get('/static/onedaylist.json').then(response => {
      var data = response.body.data;
      this.listInfo = data.listInfo;
      this.newslist = data.newslist;
    }, response => {
      console.log("ajax error")
    });
  },
  components: {
  	'header-index':Header,
  	'scroll-index':Scroll,
    "oneday-tab":onedayTab,
    'ticketnum':Ticketnum
  }
}
</script>
<style scoped>
</style>