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
<<<<<<< HEAD
        'toggle':Toggle
=======
>>>>>>> 51922e4f9f0ee0e53e76edd014bae6b668cfd337
    }
}
</script>


<style scoped>
	
</style>