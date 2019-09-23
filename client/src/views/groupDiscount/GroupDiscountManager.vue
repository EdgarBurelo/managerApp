<template>
    <div>
        <h2>Group Discount Manager</h2>
        <GroupCreator @saved="group => createNewGroup(group)" />
        <section class="active-groups">
            <h2>Active Group Discount</h2>
        </section>
    </div>
</template>

<script>
import { API } from '../../api/api-common'
import GroupCreator from './components/GroupCreator'

export default {
    name: 'GroupDiscountManager',
    components: { GroupCreator },
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
        },

        createNewGroup (discountGroup) {
            console.log(discountGroup)
        }
    }
    
}
</script>

<style scoped>
    h2 {
        margin-bottom: 10px;
    } 

    .active-groups {
        margin-top: 20px;
    }

</style>