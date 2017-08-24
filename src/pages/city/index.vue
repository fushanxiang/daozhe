<template>
  	<div class="city-header">
        <div class="city-header-area">
            <span class="city-in-china city-area">国内</span>
            <span class="city-area">海外</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                name: 'city page'
            }
        }
    }
</script>


<style scoped>
  	.city-header {
      line-height: 1.5rem;
      background: skyblue;
      text-align: center;
    }
    .city-area {
      border: 1px solid white;
      display: inline-block;
      line-height: .5rem;
      width: 2rem;
      color: white;
    }
    .city-in-china {
      background: white;
      color: skyblue;
    }
</style>
