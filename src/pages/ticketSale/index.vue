<template>
	<div class="ticket-sale">        

		<div class="sale-header">
			<a class="sale-header-back iconfont" href="javascript:window.history.back();">&#xe624;</a>
			<h1 class="sale-header-title">门票特卖</h1>
		</div>

		<div class="load-page">
			<img src="//simg1.qunarzz.com/piao/images/loading_camel.gif" alt="加载中,请稍后">加载中,请稍后...
		</div>
		<div class="ticket-navbar">
			<span class="nav-title">促销门票</span>
			<router-link :to="{name:'city',params: {id:123}}">
				<p class="nav-city" >
					<span class="city-name">{{$store.getters.perfectCity}}</span>
					<i class="iconfont">&#xe65e;</i>
				</p>
			</router-link>
			
		</div>

		<div class="product-list">	
			
			<ul class="sale-list">
				<li class="list-item" v-for="list in imgsInfo" :key="list.id">
					<router-link :to="{name:'ticketDetail',params:{id:list.id}}">
						<span class="hot-sale">
							<i>热卖中</i>
						</span>
						<img  class="sale-img" :src="list.imgUrl" :alt="list.title"/>
						<div class="list-bottom">
							<h5 class="sale-title">{{list.title}}</h5>
							<div class="sale-price">
								<span class="new-price">￥<i>{{list.newPrice}}</i></span>
								<span class="old-price">￥<i>{{list.oldPrice}}</i></span>                    
							</div>
						</div>
					</router-link>
				</li>               
			</ul>		

		</div>
		<div class="sale-bottom">
			<i class="iconfont">&#xe6ed;</i>
			<strong>票面价</strong>
			是指通过景区指定窗口售卖的纸质门票上标注的价格    
		</div>
	</div>  
</template>

<script>
	export default {
		mounted () {
			let fiexdTop = document.querySelector(".sale-header");
			window.addEventListener("scroll", function(){
				if(window.scrollY>=45){         
					fiexdTop.style.position="fixed";
					fiexdTop.style.top=0;
				}else{
					fiexdTop.style.position="relative";
				}
			}, false)
		},
		beforeDestroy() {
			window.removeEventListener("scroll",false)
		},		
		data () {
			return {
				iconsInfo:[],
				imgsInfo:[]
			}  
		},
		created() {
			this.$http.get('./static/ticketSale.json').then( response =>{
				var data = response.body.data;
				this.iconsInfo = data.iconsInfo;
				this.imgsInfo = data.imgsInfo;
			},response => {
				console.log("ajax error")
			})
		}
	}

</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.ticket-sale{
		width:100%; 
		position: relative;     
	}  
	.sale-header{
		position: relative;
		width:100%;
		height: .88rem;
		border-bottom: #1b7a8b .02rem solid;
		z-index: 91;
		background:#25a4bb;
	}
	.sale-header-back{
		position: absolute;
		left: 0;
		top: 0;
		width: .84rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		font-size: .36rem;
		color: #fff;
	}
	.sale-header-title{      
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	.load-page{
		padding: .6rem;
		color: #25a4bb;
		font-size: .32rem;
		line-height: .4rem;
		text-align: center;
		display: none;
	}
	.ticket-navbar{    
		padding: .2rem .2rem;
		background-color: #fff;
		position: relative;
	}
	.nav-city{
		float:right;
	}
	.product-list{
		width:100%;
		overflow:hidden;
	}
	.sale-list{
		width:100%;
	}
	.list-item{
		width:100%;  
		height:4.6rem;  
		overflow: hidden;  
		position: relative;			
	}
	.hot-sale{
		border-width: .18rem .08rem .18rem 0;
		border-style: solid;
		border-color: #fa8514 transparent #fa8514 #fa8514;
		position: absolute;
		bottom: 1.7rem;
		left: 0;
		width: 1.12rem;
	}
	.hot-sale i{
		display: inline-block;
		position: absolute;
		top: -.18rem;
		left: 0;
		padding: 0 .2rem;
		font-size: .24rem;
		line-height: .36rem;
		color: #fff;
	}
	.list-item .sale-img{
		width:100%;
		height:3.1rem;
		display: block;
		background-image: url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg);
	}
	.list-bottom{
		height:1rem;
		width:100%;
		padding:.1rem 0;
		background: #fff;
	}
	.sale-title{
		margin-bottom: 0.1rem;
		float: left;
		height: 1rem;
		line-height: .4rem;
		padding: .1rem .3rem;
		font-size: .32rem;  
		color:#333;
		width:77%;
	}
	.sale-price{
		padding: .2rem;
		position: absolute;
		right: 0;
	}
	.sale-price .new-price,.sale-price .old-price{
		width:100%;
		line-height:.3rem;
		display:block;
		margin-bottom: .03rem;
	}
	.new-price{
		color:red;
	}
	.new-price i{
		color:red;
		font-size:.5rem;
	}
	.old-price{
		color:#333;
	}
	.sale-bottom{
		margin-top: .2rem;
		padding: .2rem;
		color: #333;
		font-size: .24rem;
		line-height: .3rem;
	}
</style>
