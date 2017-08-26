<template>
<div>

	<div class = "content-box">
		<div class = "content">
			<div class = "tab-list">
				<div class = "caption">
					<div class = 'inner'>
						<h2 class = 'name'>热销区</h2>
					</div>
				</div>
				    <content-palace v-if="showPalace">{{getContend}}</content-palace>
					<content-temple v-if="showTemple">{{getContend}}</content-temple>
					<content-summer v-if="showSummer">{{getContend}}</content-summer>
			</div>	
		</div>
	</div>
</div>
</template>

<script>

import ContentPalace from './content_palace.vue'
import ContentTemple from './content_temple.vue'
import ContentSummer from './content_summer.vue'



export default {

	data () {
		return {
			showPalace:true,
			showTemple:false,
			showSummer:false
    	}
	},
	props:["tabChoosedIndex"],
	components:{
    	"content-palace": ContentPalace,
    	"content-temple": ContentTemple,
    	"content-summer": ContentSummer
    },
    computed:{
    	getContend:function(){
    		this.showPalace = false;
			this.showTemple = false;
			this.showSummer = false;
    		//console.log(typeof this.tabChoosedIndex)
    		if(this.tabChoosedIndex == 0){
    			this.showTemple = this.showTemple = false;
    			this.showPalace = true;
    		}else if(this.tabChoosedIndex == 1){
  
    			this.showTemple = true;
    		}else if(this.tabChoosedIndex == 2){
    			this.showSummer = true;
    		}


    	}
    }
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	
	.content-box{
		padding-top: .2rem;
		background: #FFE6AA;
    }
    .content{
		background: #FFE6AA;
		position: relative;
	    margin: 0 .5rem;
	    padding-bottom: .1rem;
    }
    .tab-list{
    	
    }
    .tab-list .caption{
    	background: #fdae08;
    	position: relative;
	    height: .5rem;
    }
    .inner{
    	background-color: #ff4444;
    	position: absolute;
	    top: -4px;
	    left: 50%;
	    width: 106px;
	    height: 24px;
	    margin-left: -45px;
    }
    .name{
	    padding: 4px 0;
	    color: #fff;
	    font: 14px/16px;
	    text-align: center;
    }
    

</style>
