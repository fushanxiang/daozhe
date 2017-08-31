<template>
	<div id="tourCost">
        <div class="mp-prddetail-group" id="feeGroup" mp-role="tabContentItem">
          <h3 class="mp-prddetail-title mp-border-bottom">{{expenseExplanation.title}}</h3>
          <div class="mp-prddetail-content" mp-role="feeDescCon">
                  <div v-for="item in expenseExplanation.content.expense">
                      <h4 class="mp-prddetail-subtitle">{{item.title}}</h4>
                      <div class="mp-border mp-structure-list">
                         <div class="mp-structure-item mp-border-top" v-for="items in item.list">
                           <h4 class="mp-structure-title mp-border-right">{{items.title}}</h4>
                            <p class="mp-structure-desc" v-html="items.content"></p>
                        </div>
                     </div>
                  </div>
                  <div>
                      <h4 class="mp-prddetail-subtitle">{{expenseExplanation.content.last.title}}</h4><p class="mp-prddetail-desc" mp-role="refundCon" v-html="expenseExplanation.content.last.content"></p> 
                  </div>                
          </div>
      </div>
	</div>
</template>
<script type="text/javascript">
	export default{
			data(){
				return{


				}

			},
            props:["expenseExplanation"]
	}
</script>
<style type="text/css"></style>