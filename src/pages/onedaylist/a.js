<div class="all-left">
	<iscroll-view class="scroll-view" id="all-left">
		<ul class="all-ul">
					<li class="container-left-li" :class="allLeft==1 ? 'background':''"  @click.stop="handleClickAll(1)">全部分类<span class="fr">256</span></li>
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