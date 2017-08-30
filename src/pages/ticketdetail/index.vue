<template>
	  <div class="main">
	  <recommend></recommend>
	  <ticket-notes></ticket-notes>
	  <scenic-area></scenic-area>
	  </div>
</template>

<script>
    import Recommend from './recommend.vue'
    import TicketNotes from './ticketnotes.vue'
    import ScenicArea from './scenicarea.vue'


export default {
  data () {
    return {
    }
  },  
  components:{
  	"recommend": Recommend,
  	"ticket-notes":TicketNotes,
  	"scenic-area":ScenicArea
  }
}
</script>
<style scoped>
	.main{
		background:#f4f4f4;
	}
</style>
