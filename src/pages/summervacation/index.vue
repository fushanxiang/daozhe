<template>
	<div>
    	<common-header></common-header>
    	<pic-list></pic-list>
    	<choose-city></choose-city>
	</div>
</template>

<script>

import CommonHeader from './commonheader'
import PicList from './piclist'
import ChooseCity from './choosecity'



export default {
  name: 'index',
  data () {
    return {
    }
     
  },
  components:{

    "common-header":CommonHeader,
    "pic-list":PicList,
    "choose-city":ChooseCity,
  }
}
</script>

<style scoped>

</style>
