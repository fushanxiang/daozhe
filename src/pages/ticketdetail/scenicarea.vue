<template>
	<div class="main">
		<div class="ticket">
			<h3 class="td-ticket-title">
				景区信息
			</h3>
		</div>
		<div class="td-prddetail-content td-border-top">
        <div class="td-sightlist">
            <span class="td-sightlist-item td-border-left">
	                <a href="//touch.piao.qunar.com/touch/detail_186363884.html" class="td-sightlist-link">
	                	<span class="iconfont td-sightlist-tetdle">&#xe655;</span>
	                	故宫讲解
	                </a>
            </span>
        </div>
    </div>
    		
	    <div class="td-prddetail-group" style="position:relative">
	    	<div class="ticket">
				<h3 class="td-ticket-title">
					供应商:旭冉假期
				</h3>
			</div>
		    <div class="td-prddetail-content td-border-top" :class="isActive?'up':'down'">
		        <div class="td-sullier td-ellipsis2">
            		消费者成功预订门票并按产品规则使用，出游当日无法按照原订单入园，联系供应商（或去哪儿网）后10分钟未解决，消费者可在景区购买门市价入园并保留票根，去哪儿网将双倍赔付差价。
        		</div>
   		 	</div>
   		 	<div class="td-ticketcontent-more" @click="handleClick">
		    	<div :class="isActive?'td-ticketcontent-shadow':''"></div>
		        <span class="iconfont td-ticketcontent-arrow">{{isActive?'&#xe62d;':'&#xe62e;'}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isActive:true,
				

			}
		},
		methods:{
			handleClick(){
				this.isActive=!this.isActive
			}
		}
	}
</script>

<style scoped>
	@itdort "../../assets/font/iconfont.css";
	.up{
		height:.7rem;
		overflow:hidden;
	}
	.down{
		height:100%;
	}
	.main{
		background:#fff;
	}
	.td-border-top{
		border-top:1px solid #dadada;
	}
	.ticket{
		position:relative;
	}
	.td-ticket-title {
	    padding:0 0.2rem;
	    margin-top:.2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}
	.td-ticket-title::after {
	    content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    border-radius: .04rem;
	}
	td-prddetail-group {
	    margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;

	}
	.td-ticketcontent {
	    position: relative;
	    padding: 0 .4rem .3rem .4rem;
	    background: #fff;
	    margin: 0 .2rem;
	}
	.td-prddetail-content{
		color: #9e9e9e;
	    font-size: .28rem;
	    line-height: .44rem;
	    overflow: hidden;
	    padding: .15rem 0;
	    margin: 0 .2rem;
	    background:#fff;
	}
	.td-sightlist {
	    overflow: hidden;
	    overflow-x: auto;
	    -webkit-overflow-scrolling: touch;
	    white-space: nowrap;
	}
	.td-sightlist-item {
	    display: inline-block;
	    padding: 0 .4rem;
	    margin: .15rem 0;
	    line-height: .4rem;
	    font-size: .28rem;
	}
	.td-sightlist-link {
    	color: #212121;
	}
	.td-sightlist-temple {
	    color: #bdbdbd;
	    position: relative;
	    top: .02rem;
	    margin-right: .1rem;
	}
	.td-ticketcontent-more {
	    display:block;
	    padding-top: .3rem;
	    text-align: center;
	    border-top: 0;
	    font-size: .28rem;
	    color: #616161;
	}
	.td-ticketcontent-shadow, .td-supplier-shadow {
	    position: absolute;
	    bottom: .4rem;
	    left: 0;
	    right: 0;
	    height: .5rem;
	    background-image: linear-gradient(to bottom,rgba(255,255,255,0),#fff);
	}
	.td-ticketcontent-arrow {
	    font-size: .3rem;    
	}
	</style>