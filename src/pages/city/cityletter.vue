<template>
    <div class="city-aside">
        <div class="city-aside-set" > 
            <div class="city-aside-set-character" v-for="(item, index) of character" v-on:click="handleCharacterClick()">{{item[0]}}</div>
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
            }
        },
        methods: {
            handleCharacterClick(ev) {
                var e = ev || window.event;
                var word=e.path[0].innerHTML;
                this.word;
                if (window.localStorage) {
                    localStorage[word]=word;
                } else {
                    Cookie.write("word",word);  
                }

                
            }
        }
        
    }

   
</script>


<style scoped>
    .city-aside {
        position:fixed;
        right:0;
        top:3.2rem;
    }
    .city-aside-set {
        padding:.12rem;
        height:auto;
        overflow:hidden;
    }
    .city-aside-set-character {
        line-height:.32rem;
        font-size:.24rem;
        color:skyblue;
        padding:.02rem;
    }

</style>
