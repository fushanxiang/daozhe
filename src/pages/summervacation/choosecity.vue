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
    mounted(){
        if(!localStorage.cityStyleText){
            try{
                localStorage.cityStyleText= '北京'

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
    data(){
        return {
            isShow:false,

            choosecityInfo:[{
                    id: 1,
                    name: "北京"
                },{
                    id: 2,
                    name: "上海"
                },{
                    id: 3,
                    name: "天津"
                },{
                    id: 4,
                    name: "天津"
                },{
                    id: 5,
                    name: "四川"
                },{
                    id: 6,
                    name: "广东"
                },{
                    id: 7,
                    name: "浙江"
                },{
                    id: 8,
                    name: "山东"
                },{
                    id: 9,
                    name: "江苏"
                },{
                    id: 10,
                    name: "海南"
                },{
                    id: 11,
                    name: "广西"
                },{
                    id: 12,
                    name: "河北"
                },{
                    id: 13,
                    name: "吉林"
                },{
                    id: 14,
                    name: "陕西"
                },{
                    id: 15,
                    name: "福建"
                },{
                    id: 16,
                    name: "内蒙古"
                },{
                    id: 17,
                    name: "山西"
                },{
                    id: 18,
                    name: "甘肃"
                },{
                    id: 19,
                    name: "湖北"
                },{
                    id: 20,
                    name: "江西"
                },{
                    id: 21,
                    name: "贵州"
                },{
                    id: 22,
                    name: "安徽"
                },{
                    id: 23,
                    name: "云南"
                },{
                    id: 24,
                    name: "辽宁"
                },{
                    id: 25,
                    name: "黑龙江"
                },{
                    id: 26,
                    name: "湖南"
                },{
                    id: 27,
                    name: "河南"
                },{
                    id: 28,
                    name: "宁夏"
                },{
                    id: 29,
                    name: "西藏"
                },{
                    id: 30,
                    name: "新疆"
            }]
        }
    }
}
</script>

<style scoped>
    .mp-menu-container{
        height:0.56rem;
        position:absolute;
        top:6.5rem;
        right: .2rem;
        min-width:0.56rem;
        padding-right:0.46rem;
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
        min-height:0.6rem;
        padding:0.1rem 0 .2rem;
        background:rgba(0,0,0,.5);
    }
    .mp-menu-item{
        float:left;
        width:25%;
        margin-top:0.1rem;  
    }
    .mp-menu-inner{
        display:block;
        height:0.6rem;
        margin:0 0.1rem;
        background:#fff;
        color:#000;
        font-size:0.24rem;
        line-height:0.6rem;
        text-align:center;
        border-radius:0.3rem;
    }
</style>
