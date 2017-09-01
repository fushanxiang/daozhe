<template>
	<div class="attractions-wrapper">
		<div class="attractions">
			<h3 class="title"><span class="word">地下明珠</span></h3>
			<div class="attractions-info">
		        <ul class="attractions-list">
		        	<li class="attractions-item">
		        		<p class="attractions-title">石花洞</p>
		        		<div class="attractions-img-wrapper">
	        			    <div class="attractions-img-info">
    			                <img class="attractions-img" src="//img1.qunarzz.com/sight/p0/1507/6d/312700aff38c7d473ea843aa578f3a25.water.jpg_600x352_dd3c85b9.jpg" data-src="//img1.qunarzz.com/sight/p0/1507/6d/312700aff38c7d473ea843aa578f3a25.water.jpg_600x352_dd3c85b9.jpg" alt="石花洞">
    			                <div class="attractions-img-title">石花洞</div>
        			        </div>
        			        <p class="attractions-desc">石花洞是目前国内发现的岩溶洞穴中集规模大、洞层多、沉积类型全、次生化学沉积物数量大的洞穴。</p>
		        		</div>
		        	</li>
		        	<li class="attractions-item">
		        		<p class="attractions-title">奇石怪景</p>
		        		<div class="attractions-img-wrapper">
	        			    <div class="attractions-img-info">
    			                <img class="attractions-img" src="//img1.qunarzz.com/sight/p0/1501/7f/7f5e1349e4be3a90.water.jpg_600x352_486876b4.jpg" data-src="//img1.qunarzz.com/sight/p0/1501/7f/7f5e1349e4be3a90.water.jpg_600x352_486876b4.jpg" alt="奇石怪景">
    			                <div class="attractions-img-title">奇石怪景</div>
        			        </div>
        			        <p class="attractions-desc">石花洞地区的岩溶洞穴分布密度高，成洞条件好，形成过程复杂。这些高大的厅堂和精美的景观，是大自然在漫长的地质岁月中，精心雕塑出来的。</p>
		        		</div>
		        	</li>
		        	<li class="attractions-item">
		        		<p class="attractions-title">光怪陆离</p>
		        		<div class="attractions-img-wrapper">
	        			    <div class="attractions-img-info">
    			                <img class="attractions-img" src="//img1.qunarzz.com/sight/p0/1501/41/412183659975c904.water.jpg_600x352_7f9e20fe.jpg" data-src="//img1.qunarzz.com/sight/p0/1501/41/412183659975c904.water.jpg_600x352_7f9e20fe.jpg" alt="光怪陆离">
    			                <div class="attractions-img-title">光怪陆离</div>
        			        </div>
        			        <p class="attractions-desc">石花洞内的自然景观玲珑剔透，有滴水、流水和停滞水沉积而形成的高大洁白的石笋、石柱、石梯田等，和渗透水、飞溅水、毛细水沉积形成的众多晶花、石葡萄等。</p>
		        		</div>
		        	</li>
		        </ul>
		    </div>
			<div class="cost-info">
				<h3 class="title"><span class="word">费用说明</span></h3>
				<div class="info-wrapper">
			        <p class="info-title">费用包括</p>
			        <p class="info-content">本产品包含石花洞首道门票及洞内参观项目。</p>
			    </div>
			    <div class="info-wrapper">
			        <p class="info-title">使用说明</p>
			        <p class="info-content">1.购票当天不得使用，需第二天才可使用；<br>2.如有个别特殊项目，请按规定另行付费。<br>3.1.2以下儿童免票；<br>4.军人、学生、儿童35元；<br>5.老人持老年证35元。</p>
			    </div>
			</div>
			<div class="cost-info">
				<h3 class="title"><span class="word">入园参考</span></h3>
				<div class="info-wrapper">
			        <p class="info-title">免费政策</p>
			        <p class="info-content">1.2以下儿童免票。</p>
			    </div>
			    <div class="info-wrapper">
			        <p class="info-title">优惠政策</p>
			        <p class="info-content">军人、学生、老人（持老年证）凭有效证件购景区优惠票 （上述优惠政策，需到景区自行购买）。</p>
			    </div>
			</div>
			<div class="cost-info">
				<h3 class="title"><span class="word">交通和到达</span></h3>
				<div class="info-wrapper">
			        <p class="info-title">自驾路线</p>
			        <p class="info-content">由京石高速房山出口经阎村-阎东路-坨里-石花洞。</p>
			    </div>
			    <div class="info-wrapper">
			        <p class="info-title">公共交通</p>
			        <p class="info-content">天桥乘917路公共汽车石花洞旅游专线车直达或乘917路河北支线石花洞站下车；公休日从阜成门、前门、和平门乘游7路到石花洞。</p>
			    </div>
			    <div class="info-wrapper">
			        <p class="info-title">火车路线</p>
			        <p class="info-content">从北京南站乘郊游7次列车南观村站下车到石花洞。</p>
			    </div>
			</div>
		</div>
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
	.attractions-wrapper{
		background: #f1f1f1;
	}
	.attractions{
		padding: 1.08rem .25rem .2rem;
	}
	.title{
		overflow: hidden;
		position: relative;
	    color: #333;
	    font-size: .32rem;
	    line-height: .5rem;
	    text-indent: .2rem;
	}
	.word:before{
		content: ' ';
	    overflow: hidden;
	    position: absolute;
	    top: .1rem;
	    left: 0;
	    width: .08rem;
	    height: .3rem;
	    background: #28a9b9;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}
	.attractions-title{
		color: #333;
	    font-size: .28rem;
	    line-height: .5rem;
	}
	.attractions-img-wrapper{

	}
	.attractions-img-info{
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 58.7%;
		background: url("http://simg3.qunarzz.com/piao/images/loading_camel.gif") center center no-repeat;
	}
	.attractions-img-title{
		position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .5rem;
	    background: rgba(0,0,0,.3);
	    color: #fff;
	    line-height: .5rem;
	    text-align: center;
	}
	.attractions-desc{
		margin: .2rem 0;
	    color: #999;
	    font-size: .28rem;
	    line-height: .4rem;
	    word-break: break-all;
	    word-wrap: break-word;
	}
	.info-title{
		color: #333;
	    font-size: .28rem;
	    line-height: .5rem;
	}
	.info-content{
		margin-bottom: .2rem;
	    color: #999;
	    font-size: .28rem;
	    line-height: .4rem;
	    word-break: break-all;
	    word-wrap: break-word;
	}
</style>