<template>
	<div>
		 <div class="top-head">
            xxxxxxxxxxxx
            间隔盒
        </div>
        <title-comment></title-comment>
        <div class="top-head">
           yyyyyyyyyyyyyy
           间隔盒
        </div>
        <other-comment></other-comment>
	</div>
</template>

<script>

import TitleComment from './titlecomments.vue'
import OtherComment from './othercomment.vue'

export default {
    name: 'index',
        data () {
            return {

            }
    },
    components:{
        "title-comment": TitleComment,
        "other-comment":OtherComment
    }
}
</script>

<style scoped>
    .top-head{
        width: 100%;
        height: 7.16rem;
        background: pink;
    }
</style>
