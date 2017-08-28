<template>
	<div>
    <summerselect></summerselect>
	</div>
</template>

<script>
import SummerSelect from './summerselect.vue'

export default {
  name: 'index',
  data () {
    return {
    }  
  },
  components:{
    "summerselect": SummerSelect
  }
}
</script>

<style scoped>

</style>
