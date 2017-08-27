<template>
    <div class="city-aside">
        <div class="city-aside-set"> 
            <div class="city-aside-set-character" v-for="(item, index) of character" v-on:click="handleLetterClick($event)">{{item[0]}}</div>
        </div>
    </div>
  	
</template> 

<script>
    var appData=require('./china.json');
    export default {
        data () {
            return {
                character: []
            } 

        },
        created() {
            var cityData=appData.data;
            for(var i=0; i<cityData.length;i++) {
              this.character.push(cityData[i]);
            };

        },
        methods: {
            handleLetterClick(event) {
                var el = event.currentTarget;
                console.log(el);
            }
        }
    }
</script>


<style scoped>
    .city-aside {
        position: fixed;
        right: 0;
        top: 2.16rem;
    }
    .city-aside-set {
        height: auto;
        overflow: hidden;
    }
    .city-aside-set-character {
        line-height: .32rem;
        font-size: .24rem;
        color: #00afc7;
        padding: .02rem;
    }

</style>
