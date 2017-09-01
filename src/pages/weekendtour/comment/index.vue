<template>
	<div>
		<header-fixed :id="id"></header-fixed>
		<comment :comments="comments" :flag="flag" ></comment>
	</div>
</template>

<script>

import HeaderFixed from './header_fixed.vue'
import Comment from './comment.vue'

export default {
  	data () {
    	return {
    		id: "",
    		comments: [],
    		flag: []
   		}
	},
	created() {

		this.$http.get('/static/weekendtour_comments.json').then(response => {
			var comments = response.body.data.comments;
			var id = this.$route.params.id.split("=")[1];
			this.id = id;
			for(var i in comments){
				if(comments[i].id == this.id){
					this.comments = comments[i];
				}
			}
			for(var j in this.comments.info){
				this.flag.push('true');
			}
		}, response => {
			console.log("ajax error");
  		});

	},
	components: {
		'header-fixed' : HeaderFixed,
		'comment': Comment
	}
}
</script>

<style scoped>

</style>