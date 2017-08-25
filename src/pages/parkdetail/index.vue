<template>
	<div>
    <recommend></recommend>
    <recommend-sites></recommend-sites>
  </div>

</template>

<script>

   import Recommend from './recommend.vue'
   import RecommendSites from './recommendsites.vue'

export default {
  name: 'hello',
  data () {
    return {
     }
  },
  components: {
    "recommend": Recommend,
    "recommend-sites": RecommendSites
  }
}
</script>


<style scoped>
	
</style>
