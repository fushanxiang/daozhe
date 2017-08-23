<template>

<div>
  <div>{{name}}</div>
  <div>
    xxxxxxxxx
  </div>
  <div class="img">
    <img @click="handleclick" src="http://img0.imgtn.bdimg.com/it/u=3160968260,2383732736&fm=26&gp=0.jpg" alt="">
  </div>
</div>
  
	
</template>
<script src="../dist/js/swiper.min.js"></script>

<script>

export default {
  name: 'hello',
  data () {
    return {
      name: 'order page',
      handleclick:function(){
        alert("xxxxxxxxaaa")
      }
    }
  }
  
}
</script>


<style scoped>
 
	.img img{
    width: 100%;
    height: 600px;
    
  }
</style>
