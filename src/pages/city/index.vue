<template>
    <div>
       <div class="city-header">
            <div class="city-header-area">
                <span class="city-in-china city-area">国内</span>
                <span class="city-area">海外</span>
            </div>
        </div>
        <city-letter></city-letter> 
    </div>
    
</template> 

<script>
    import CityLetter from './cityletter.vue'
    var appData=require('./china.json');
    export default {
        name: 'hello',
        data () {
            return {} 
        },
        components: {
            "city-letter": CityLetter
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
