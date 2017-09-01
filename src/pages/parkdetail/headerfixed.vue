 <template>
     <div class="header" style="position: fixed; width: 100%; top: 0px; left: 0px; display: inline-block; opacity: 1;">
     	<a role="left" class="header-left iconfont" @click="handleBackClick">&#xe600;</a>
     	<h1 role="title" class="header-title">太平洋海底世界</h1> 
     </div>

</template>

<script>
export default {
    data () {
        return {           
        }
    },
    methods: {
    	handleBackClick:function(){
    		window.history.back()
    	}
    }
}
</script>


<style scoped>
	.box{
	    width: 640px;
	    height: 3rem;
	    background: pink;
	}
	.header-left {
	    left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    position: absolute;
	    font-size: .36rem;
	    color: #fff;
	    text-align: center;
	}
	.header {
	    position: relative;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}
	.header-title {
	    overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
</style>
