<template>
    <div>
        <seckill-banner></seckill-banner>
        <toggle></toggle>
    </div>
</template>
<script>
import SeckillBanner from './seckillbanner.vue';
import Toggle from './toggle.vue';
export default {
    name:'seckill',
    data () {
        return {
            
        }
    },
    components:{
        'seckill-banner':SeckillBanner,
        'toggle':Toggle
    }
}
</script>


<style scoped>
	
</style>