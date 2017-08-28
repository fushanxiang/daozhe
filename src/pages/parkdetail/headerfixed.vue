 <template>
     <div class="mp-header" style="position: fixed; width: 100%; top: 0px; left: 0px; display: block; opacity: 1;">
     	<a mp-role="left" class="mp-header-left iconfont">&#xe600;</a>
     	<h1 mp-role="title" class="mp-header-title">太平洋海底世界</h1>
     </div>
</template>

<script>
export default {
    data () {
        return {           
        }
    }
}
</script>


<style scoped>
	.mp-header-left {
    left: 0;
    top: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
}
.mp-header-left, .mp-header-back {
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;
}
	.mp-header {
    position: relative;
    height: .88rem;
    background: #00bcd4;
    z-index: 91;
}
.mp-header-title {
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
