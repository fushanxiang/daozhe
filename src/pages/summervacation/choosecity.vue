<template>
    <div class="mp-menu-outer mp-menu-expand">
        <div class="mp-menu-container" v-on:click="handleClick">
            <span class="mp-menu-current" ref="current">北京</span>
            <span class="current-after"  ref="outer"></span>
        </div>
        <ul class="mp-menu-list" v-show="isShow" >
            <li class="mp-menu-item" v-for="item in choosecityInfo" :key="item.id">
                <span class="mp-menu-inner" ref="inner" @click="cityClick">{{item.name}}</span>
            </li>
         </ul>
    </div>
</template>

<script>

export default {
    updated(){
        if(!localStorage.cityStyleText){
            try{
                localStorage.cityStyleText = '北京'
            } catch(e){} 
        }
        this.$refs.current.innerHTML=localStorage.cityStyleText;
        var arr = this.$refs.inner;
        for(var i=0;i<arr.length;i++){
            if(arr[i].innerHTML==this.$refs.current.innerHTML){
                arr[i].style.background='#3fc22b'
                arr[i].style.color='#fff';
            }
        }
    },
    methods:{
        cityClick(e){
            var arr = this.$refs.inner;
            for(var i=0;i<arr.length;i++){
                arr[i].style.background="#fff";
                arr[i].style.color="#000";
            }
            e.target.style.background='#3fc22b';
            e.target.style.color="#fff"; 
            this.$refs.current.innerHTML=e.target.innerHTML;
            try{
                localStorage.cityStyleText= this.$refs.current.innerHTML;
            }catch(e){} 
            this.isShow = false;
            if(this.isShow){
                this.$refs.outer.style.transform='rotate('+-225+'deg)'
            }else{
                this.$refs.outer.style.transform='rotate('+-45+'deg)'
            }
        },
        handleClick(){
            this.isShow=!this.isShow;
            if(this.isShow){
                this.$refs.outer.style.transform='rotate('+-225+'deg)'
            }else{
                this.$refs.outer.style.transform='rotate('+-45+'deg)'
            }

        }   
    },
    props:["choosecityInfo"],
    data(){
        return {
            isShow:false 
        }
    }
}
</script>

<style scoped>
    .mp-menu-container{
        position:absolute;
        top:6.5rem;
        right: .2rem;
        min-width:.56rem;
        padding-right:.46rem;
        height:.56rem;
        background: rgba(0,0,0,.5);
        border-radius: .56rem;
    }
    .mp-menu-current{
        padding-left: .16rem;
        color: #fff;
        font-size: .28rem;
        line-height: .56rem;
        text-align: right;
    }
    .current-after {
        content: '\0020';
        overflow: hidden;
        position: absolute;
        top: 50%;
        right: .16rem;
        margin-top: -.12rem;
        width: .16rem;
        height: .16rem;
        border-width: 0 0 .02rem .02rem;
        border-style: solid;
        border-color: #fff;
        transform-origin: 25% 70%;
        transform: rotate(-45deg);
    }
    .mp-menu-list{
        position:absolute;
        top:7rem;
        left:0;
        width:100%;
        min-height:.6rem;
        padding:.1rem 0 .2rem;
        background:rgba(0,0,0,.5);
    }
    .mp-menu-item{
        float:left;
        width:25%;
        margin-top:.1rem;  
    }
    .mp-menu-inner{
        display:block;
        height:.6rem;
        margin:0 .1rem;
        background:#fff;
        color:#000;
        font-size:.24rem;
        line-height:.6rem;
        text-align:center;
        border-radius:.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
    }
</style>
