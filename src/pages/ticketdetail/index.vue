<template>
		<div>
			<introduce></introduce>
		  <recommend></recommend>
		  <!--<el-amap vid="amapDemo" :zoom="zoom" :center="center">
		</el-amap>-->
	  </div>
</template>

<script>
    import Recommend from './recommend.vue'
	import Introduce from './introduce.vue'

	export default {
		data () {
		    return {
		    	
		    }
		},  
		components:{
		  	"recommend": Recommend,
		  	"introduce": Introduce
		}
	}
</script>
<style scoped>

</style>
