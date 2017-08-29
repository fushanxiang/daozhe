<template>
	<div>
		<header-image :swiperInfo="swiperInfo"></header-image>
    	<sight-note :headerTitle="headerTitle"></sight-note>
	</div>
</template>

<script>

import headerImage from './header-image.vue'
import sightNote from './sight-note.vue'

export default {
    name: 'index',
    data () {
        return {
        	swiperInfo: [],
        	headerTitle: ''
        	
        }    
     },
    components:{
  	    "header-image": headerImage,
  	    "sight-note": sightNote
    },
    created() {
        this.$http.get('/static/onedaytour-details.json').then(response => {
        	
              var data = response.body.data[0];
          this.swiperInfo = data.swiperImg;
         	
           this.headerTitle = data.index;
           console.log(this.headerTitle)
        }, response => {
        console.log("ajax error");
        });
  },
}
</script>

<style scoped>

</style>
