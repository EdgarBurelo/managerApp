<template>
    <div>
        GroupDiscountManager
    </div>    
</template>

<script>
import { API } from '../../api/api-common'

export default {
    name: 'GroupDiscountManager',
    data () {
        return {
            info: null,
        }
    },
    mounted () {
        this.getInfo();
    },
    methods:  {
        getInfo () {
            API.get().then(response => {
                this.info = response.data;
                // eslint-disable-next-line
                console.log(this.info);
            });
        }
    }
    
}
</script>

<style scoped>

</style>