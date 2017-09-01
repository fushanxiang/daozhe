<template>	       
   <div class="pd-ticketype-ticket-item pd-border-top">
    <div>
        <h5 class="pd-ticket-type-name">[长隆周年庆]长隆水上乐园成人票（仅限8月28日）</h5>
        <div class="pd-ticket-type-price" @click="handleClick">¥
            <em class="pd-price-num">455</em>
            <span class="pd-ticket-numword">起</span>
            <span class="pd-ticket-type-extend iconfont">{{isActive?'&#xe62d;':'&#xe62e;'}}</span>
        </div>
     </div>   
        <div :style="isActive2?'display:none':'display:block'">
                <ticket-detail></ticket-detail>
                <ticket-detail></ticket-detail>      
        </div>   
    </div>
</template>

<script>
	
     import ticketdetail from './ticketdetail.vue'
	export default {
		data () {
			return {
                isActive: true,
                isActive2: true
			}		
		},
        components:{
        	"ticket-detail": ticketdetail       
        },
        methods:{
            handleClick() {
                this.isActive = !this.isActive,
                this.isActive2 = !this.isActive2
            }
        }		
	}
</script>

<style scoped>
   .pd-ticketype-ticket-item{
        padding: .24rem .2rem;
        position:relative;
    } 
    .pd-ticket-type-name {
        margin-right: 1.8rem;
        color: #333;
        font-size: .3rem;
        line-height: .48rem; 
     } 
     .pd-ticket-type-price{
        right: .15rem;
        margin-top: -.28rem;
        color: #ff9800;
        overflow: hidden;
        position: absolute;
        top: .5rem;
        height: .4rem;
        line-height: .4rem;
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
     } 
     .pd-price-num{
        margin-left: .04rem;
        font-size: .36rem;
     } 
     .pd-ticket-numword{
        display: inline-block;
        color: #9e9e9e;
        font-size: .24rem;
        transform: scale(.8);
     }
     .pd-ticket-type-extend{
        right: .2rem;
        margin-top: -.22rem;
        color: #bbb;
        font-size: .24rem;
     } 
    
</style>