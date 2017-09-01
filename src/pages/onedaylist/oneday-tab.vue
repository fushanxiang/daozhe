<template>
	<div>
		<div class="barrie" v-show="barrieShow" @click="handleClickBarrie"></div>
		<div class="list-footer">
			<ul class="typefilte" :style="{opacity:opacity}">
				<li class="footer-icon" :class="followed==1 ? 'color':''"  @click.stop="handleClick(1)" >
					<div class="iconfont">&#xe6ca;</div>
					<div>{{valueA}}</div>
				</li>
				<li class="footer-icon" :class="followed==2 ? 'color':''"   @click.stop="handleClick(2)">
					<div class="iconfont">&#xe605;</div>
					<div>筛选</div>
				</li>
				<li class="footer-icon" :class="followed==3 ? 'color':''"   @click.stop="handleClick(3)">
					<div class="iconfont">&#xe60e;</div>
					<div>{{valueC}}</div>
				</li>
			</ul>
		</div>
		<div class="footer-container footer-container-color" v-show="show==1?true:false">
			
			<div class="all-left">
				<iscroll-view class="scroll-view" id="all-left">
					<ul class="all-ul">
						<li class="container-left-li" :class="allLeft==1 ? 'background':''" @click.stop="handleClickAll(1)">全部分类<span class="fr">256</span></li>
						<li class="container-left-li" :class="allLeft==2 ? 'background':''"  @click.stop="handleClickAll(2,'A')">一日游<span class="fr">220</span></li>
						<li class="container-left-li" :class="allLeft==3 ? 'background':''"  @click.stop="handleClickAll(3,'B')">文化古迹<span class="fr">13</span></li>
						<li class="container-left-li" :class="allLeft==4 ? 'background':''"  @click.stop="handleClickAll(4,'C')">自然风光<span class="fr">10</span></li>
						<li class="container-left-li" :class="allLeft==5 ? 'background':''"  @click.stop="handleClickAll(5,'D')">展馆<span class="fr">3</span></li>
						<li class="container-left-li" :class="allLeft==6 ? 'background':''"  @click.stop="handleClickAll(6,'E')">城市风光<span class="fr">3</span></li>
						<li class="container-left-li" :class="allLeft==7 ? 'background':''"  @click.stop="handleClickAll(7,'F')">水上玩乐<span class="fr">2</span></li>
						<li class="container-left-li" :class="allLeft==8 ? 'background':''"  @click.stop="handleClickAll(8,'G')">交通<span class="fr">2</span></li>
						<li class="container-left-li" :class="allLeft==9 ? 'background':''"  @click.stop="handleClickAll(9,'H')">游乐场<span class="fr">1</span></li>
						<li class="container-left-li" :class="allLeft==10 ? 'background':''"  @click.stop="handleClickAll(10,'I')">餐饮<span class="fr">1</span></li>
					</ul>
				</iscroll-view>
			</div>

			<div class="all-right">
				<iscroll-view class="scroll-view" id="all-right">
					<ul class="container-ul">
						<li v-if= "type1==='A'" class="container-right-li border-bottom" v-for="allA in allsA[0]" @click="handleClickallA(allA)">{{allA}}</li>
						<li v-if= "type1==='B'" class="container-right-li border-bottom" v-for="allB in allsA[1]" @click="handleClickallA(allB)">{{allB}}</li>
						<li v-if= "type1==='C'" class="container-right-li border-bottom" v-for="allC in allsA[2]" @click="handleClickallA(allC)">{{allC}}</li>
						<li v-if= "type1==='D'" class="container-right-li border-bottom" v-for="allD in allsA[3]" @click="handleClickallA(allD)">{{allD}}</li>
						<li v-if= "type1==='E'" class="container-right-li border-bottom" v-for="allE in allsA[4]" @click="handleClickallA(allE)">{{allE}}</li>
						<li v-if= "type1==='F'" class="container-right-li border-bottom" v-for="allF in allsA[5]" @click="handleClickallA(allF)">{{allF}}</li>
						<li v-if= "type1==='G'" class="container-right-li border-bottom" v-for="allG in allsA[6]" @click="handleClickallA(allG)">{{allG}}</li>
						<li v-if= "type1==='H'" class="container-right-li border-bottom" v-for="allH in allsA[7]" @click="handleClickallA(allH)">{{allH}}</li>
						<li v-if= "type1==='I'" class="container-right-li border-bottom" v-for="allI in allsA[8]" @click="handleClickallA(allI)">{{allI}}</li>
					</ul>
				</iscroll-view>
			</div>
		</div>
		<div class="footer-container footer-container-color" v-show="show==2?true:false">
			<div class="container-left">
				<iscroll-view class="scroll-view" id="container-left">
					<ul class="container-ul">
						<li class="container-left-li" :class="containerLeft==1 ? 'background':''"  @click.stop="handleClickContainer(1,'A')">目的地</li>
						<li class="container-left-li" :class="containerLeft==2 ? 'background':''"  @click.stop="handleClickContainer(2,'B')">出发地</li>
					</ul>
				</iscroll-view>
			</div>
			<div class="container-right">
				<iscroll-view class="scroll-view" id="container-right">
					<ul class="container-ul">
						<li v-if= "type==='A'" class="container-right-li border-bottom" v-for="(itemA,index) in itemsA[0]" :class="itemsAcolor==index ? 'color':''" @click="handleClickItemA(index)">{{itemA}}</li>
						<li v-if= "type==='B'" class="container-right-li border-bottom" v-for="(itemB,index) in itemsA[1]" :class="itemsBcolor==index ? 'color':''" @click="handleClickItemB(index)">{{itemB}}</li>
		
					</ul>
				</iscroll-view>
			</div>
		</div>
		<div class="footer-container" v-show="show==3?true:false">
			<iscroll-view class="scroll-view" id="recommend">
				<ul class="recommend">
					<li class="recommend-item border-bottom" :class="recommend==1 ? 'color':''"  @click="handleClicka(1,'推荐排序')">推荐排序</li>
					<li class="recommend-item border-bottom" :class="recommend==2 ? 'color':''"  @click="handleClicka(2,'销量最高')">销量最高</li>
					<li class="recommend-item border-bottom" :class="recommend==3 ? 'color':''"  @click="handleClicka(3,'价格最高')">价格最高</li>					
					<li class="recommend-item border-bottom" :class="recommend==4 ? 'color':''"  @click="handleClicka(4,'价格最低')">价格最低</li>
					<li class="recommend-item border-bottom" :class="recommend==5 ? 'color':''"  @click="handleClicka(5,'热门评论')">热门评论</li>
					<li class="recommend-item ":class="recommend==6 ? 'color':''"  @click="handleClicka(6,'本周最热')" >本周最热</li>
				</ul>
			</iscroll-view>
		</div>
	</div>
</template>

<script>
import IScroll from 'iscroll'
export default {
	data () {
		return {
			followed:'',
			show:'',
			opacity:'',
			recommend:'',
			barrieShow:false,
			valueA:'全部分类',
			valueC:'推荐排序',
			containerLeft:1,
			type:'A',
			type1:'',
			itemsA:[["全部目的地","张家口","承德","北京","泰安"],["全部出发地","北京"]],
			allsA:[["全部一日游","周边游","当地游"],["全部文化古迹","遗址"],["全部自然风光","草原","海滨海岛","山川"],["全部展馆","博物馆"],["全部城市风光"],["全部水上玩乐","漂流"],["全部交通"],["全部游乐场","主题乐园"],["全部温泉"],["全部餐饮"]],
			allLeft:1,
			itemsAcolor:'',
			itemsBcolor:'',
    	}
	},
	updated(){
		new IScroll('#recommend', { scrollY: true });	
		new IScroll("#container-left",{ scrollY: true });
		new IScroll("#container-right",{ scrollY: true });
		new IScroll("#all-left",{ scrollY: true });	
		new IScroll("#all-right",{ scrollY: true });			
	},
	methods:{
		handleClick(n) {
			this.followed = n;
			this.show = n;
			this.opacity = 1;
			this.barrieShow = true;
		},
		handleClicka(n,value) {
			this.recommend = n;
			this.show = '';
			this.opacity = 0.5;
			this.barrieShow = false;
			this.valueC = value;
			this.followed = '';
		},
		handleClickBarrie() {
			this.barrieShow = false;
			this.show = '';
			this.opacity = 0.5;
			this.followed = '';
		},
		handleClickContainer(n,type) {
			this.containerLeft = n;
			this.type = type;
			this.followed = '';
		},
		handleClickAll(n,type) {
			if(n==1){
				this.barrieShow = false;
				this.show = '';
				this.opacity = 0.5;
			}
			this.allLeft = n;
			this.type1 = type;
			this.followed = '';
		},
		handleClickItemA(index) {
			this.itemsAcolor = index;
			this.barrieShow = false;
			this.show = '';
			this.itemsBcolor = '';
			this.followed = '';
		},
		handleClickItemB(index) {
			this.itemsBcolor = index;
			this.barrieShow = false;
			this.show = '';
			this.itemsAcolor = ''
			this.followed = '';
		},
		handleClickallA(text) {
			this.barrieShow = false;
			this.show = '';
			this.followed = '';
			this.opacity = 0.5;
			this.valueA = text;
		}
	}
}
</script>

<style scoped>
@import "../../assets/font/iconfont.css";
.fr{
	float: right;
}
.list-footer{
	position: fixed;
    z-index: 4;
    right: 0;
   	bottom: 0;
   	left: 0;
   	width: 100%;
}
.typefilte{
	display:flex;
	justify-content: space-around;
	background: black;
	opacity: .5;
}
.footer-icon{
	color: #fff;
	display: flex;
	z-index: 92;
	flex-direction: column;
	align-items: center;
	margin-top: .15rem;
	width: 30%;
	height: 100%;
}
.color{
	color: #00afc7;
}
.background{
	background: #fff;
}
.footer-container{
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0.75rem;
	background: #fff;
	height: 5.3rem;
	z-index: 92;
}
.recommend{
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 5.4rem;
}
.container-ul,all-ul{
	width: 100%;
	height: 5.4rem;
}
.recommend-item{
	text-align: center;
	height: 2.25rem;
	width: 100%;
	line-height: .9rem;
}
.border-bottom{
	border-bottom: 0.01rem solid #e4e6e8;
}
.barrie{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0.3;
	background: rgba(0,0,0,0.45);
	z-index: 90;
}
.scroll-view{
  touch-action: none;
  height: 100%;
  overflow: hidden;
}
.scroll-view-container{
  touch-action: none;
  height: 100%;
  overflow: hidden;
}
.scroll-view-container-right{
  touch-action: none;
  height: 100%;
  overflow: hidden;
}
.container-left{
	float: left;
	width: 30%;
	height: 100%;
}
.footer-container-color{
	background: #f4f5f6;
}
.container-left-li{
	padding: .24rem .1rem;
	padding-right: .2rem;
    padding-left: .2rem;
    font-size: .28rem;
    line-height: .4rem;
}
.container-right{
	float: right;
	width: 70%;
	height: 100%;
	background: #fff;
}
.container-right-li{
	padding: .24rem .1rem;
	padding-right: .2rem;
    padding-left: .2rem;
    font-size: .28rem;
    line-height: .4rem;
}
.all-left{
	float: left;
	width: 40%;
	height: 100%;
}
.all-right{
	float: right;
	width: 60%;
	height: 100%;
	background: #fff;
}
</style>

