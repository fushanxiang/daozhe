<template>
	<div>
		<park-location></park-location>
	    <recommend></recommend>
	    <recommend-sites></recommend-sites>
  	</div>
</template>

<script>
	import ParkLocation from './parkLocation.vue'
    import Recommend from './recommend.vue'
    import RecommendSites from './recommendsites.vue'
	export default {
	  	data () {
	    	return {
	    	
	    	}
	  	},
	  	components: {
		  	"park-location":ParkLocation,
		    "recommend": Recommend,
		    "recommend-sites": RecommendSites
	  	}
	}
</script>

<style scoped>
	
</style>
