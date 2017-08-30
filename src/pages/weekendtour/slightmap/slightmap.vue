<template>
	<div class="box">
		 <baidu-map class="map" :center="{lng: 116.435856, lat: 40.16293}" :zoom="15">
   			<bm-marker :position="{lng: 116.435856, lat: 40.16293}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
    	</baidu-map>
	</div>
</template>


<script>
	

	export default {
	  	data () {
	    	return {
	    		
	   		}
	     
		},
		
		props: ['goodsInfo']
	}
</script>

<style scoped>
	.box{
		position: fixed;
		width: 100%;
		left: 0;
		right: 0;
		top: .88rem;
		bottom: 0;
		overflow: hidden;
		background:#ccc;
	}
	.map {
	 	width: 100%;
	 	height: 100%;
	}
</style>