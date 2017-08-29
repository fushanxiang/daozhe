<template>
    <div> 
    	<div><index-header></index-header></div>
    	<div> <ticketNum :ticketData="newslist"></ticketNum> </div>
    </div>
</template>

<script>
import IndexHeader from '../index/header.vue'
import TicketNum from "./ticketNum.vue" 

export default {
  data () {
    return {
      newslist: []
    }
  },
  created () {
      this.$http.get('/static/index.json').then(response => {
        var data = response.body.data
        this.newslist = data.newslist;

     }, response => {
        console.log("ajax error")
      });
      
  },
 
  components: {
  	"index-header": IndexHeader,
  	"ticketNum": TicketNum
  }
}
</script>


<style scoped>

</style>