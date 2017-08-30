<template>
	<div>
		<div role="textItem" class="text-item" style="">
			<h4 class="text-title">免费政策</h4>
			<div class="text-info">
				<p>“免票”对象：1.0米以下儿童（一名购票成人限带一名免票儿童，马戏门票及另有规定的票类不适用）。</p>
			</div>
		</div>
		<div role="textItem" class="text-item" style="">
			<h4 class="text-title">特惠政策</h4>
			<div class="text-info">
				<p>“儿童长者票”对象：身高1.0米至1.5米以下儿童，或65岁以上的长者凭身份证验票入园（马戏门票及另有规定的票类不适用）。购买儿童长者票的游客，如儿童身高超过标准或长者游客入园时未能出示有效的身份证明文件，游客须按入场时的门市价补回差额或自行重新购票。</p>
			</div>
		</div>
		<div role="textItem" class="text-item" style="">
			<h4 class="text-title">温馨提示</h4>
			<div class="text-info">
				<p>1、园区内不得带食物；</p>
				<p>2、如天气恶劣下暴雨园区设施可能暂停关闭，待天气好转继续开放；</p>
				<p>3、游客需根据身高体重按园区设施标准参玩（如1.9米、100KG参玩项目较少），部分园区设施65周岁以上长者谢绝参与；</p>
			</div>
		</div>
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
	@import "../../assets/font/iconfont.css";
	.text-item {
		margin-bottom: .16rem;
		padding: 0 .2rem;
	    padding-top: .1rem;
	    padding-bottom: .06rem;
	}
	.text-title {
	    font-weight: bold;
	    line-height: .42rem;
	    font-size: .28rem;
	    color: #212121;
	}
	.text-info {
	    word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    color: #616161;
	}

</style>