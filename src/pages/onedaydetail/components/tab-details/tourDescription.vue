<template>
	<div id="tourDescription">
		<div class="mp-prddetail-group" id="useGroup" mp-role="tabContentItem">
		    <h3 class="mp-prddetail-title mp-border-bottom">{{instructions.title}}</h3>
		    <div class="mp-prddetail-content" mp-role="useDescCon" :class="{active:active}">
		        <div v-for="item in instructions.list">
			        <h4 class="mp-prddetail-subtitle">{{item.title}}</h4>
			        <p class="mp-prddetail-desc">{{item.content}}</p>
		        </div>
		    </div>
		    <div class="mp-prddetail-more mp-prddetail-hasmore" mp-role="useDescMoreBtn" data-click="t_use_instruction">
		        <span mp-role="moreText">更多使用说明</span><span class="mpg-iconfont  iconfont" @click="handleClick" v-html="top"></span>
		    </div>
		</div>
	</div>

</template>
<script type="text/javascript">
	export default{
			data(){
				return{
                  active:true,
                  top:"&#xe6a6;"

				}
			},
			methods:{
				handleClick:function(e){
					this.active=!this.active;
					if(!this.active){
						this.top="&#xe6a5;";
					}
					else{
                       this.top="&#xe6a6";
					}
					
				}

			},
			props:["instructions"]
		}
</script>
<style type="text/css">
	.active{
		height: 242px;
	}
	.mpg-iconfont{
       padding: 4px;
	}
</style>