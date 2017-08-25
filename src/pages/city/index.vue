<template>
    <div>
        <div>{{$route.params.id}}</div>
        <div>{{$route.query.name}}</div>
        <router-link to="/city/shanghai">link</router-link>
        <button @click="handleClick">跳转</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        handleClick() {
            this.$router.go(-1)
        }
    }
}
</script>


<style scoped>
	div {
		background: red;
        color: #fff;
        font-size: 100px;
	}
</style>
