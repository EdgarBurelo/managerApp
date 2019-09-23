<template>
    <div>
        <h2>Group Discount Manager</h2>
        <GroupCreator @saved="group => createNewGroup(group)" />
        <section class="active-groups">
            <h2>Active Group Discount</h2>
            <template v-if="groupDiscounts && groupDiscounts.length === 0">
                <v-card>
                    No Discount Groups created, add a new one and it will appear in this section
                </v-card>
            </template>
            <div v-else v-for="groupDiscount in groupDiscounts" :key="groupDiscount.id">
                <v-card class="group-info">
                    <section>
                        <span><b>University:</b> {{ groupDiscount.university}}</span>
                    </section>
                    <section>
                        <span><b>End Date:</b> {{ groupDiscount.endDate }}</span>
                    </section>
                    <section>
                        <span><b>Total Students:</b> {{ groupDiscount.invitee ? groupDiscount.invitee.users.length : 0 }} </span>
                    </section>
                    <section>
                        <span><b>discount:</b> {{ groupDiscount.discount }}%</span>
                    </section>
                    <section>
                        <span><b>Status:</b> {{ groupDiscount.status }}</span>
                    </section>
                    <section class="send-btn">
                        <v-btn :to="{ path: `/${groupDiscount.id}/discount-group`}" style="margin-right: 10px" color="primary">
                            <span>View Group</span>
                        </v-btn>
                        <v-btn @click="closeGroup(groupDiscount.id)" :disabled="groupDiscount.status !== 'Progress'" color="success">
                            <span>Send Code</span>
                        </v-btn>
                    </section>
                </v-card>
            </div>
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
            groupDiscounts: [],
        }
    },
    mounted () {
        this.getInfo();
    },
    methods:  {
        getInfo () {
            API.get('/allManager').then(response => {
                this.groupDiscounts = response.data;
            });
        },

        createNewGroup (discountGroup) {
            let newData = this.groupDiscounts
            API.post('/create', discountGroup).then(response => {
                newData.push(response.data);
            })
            this.groupDiscounts = newData;
        },

        closeGroup (id) {
            API.get(`/close/${id}`);
            this.groupDiscounts[this.groupDiscounts.findIndex(groupDiscount => groupDiscount.id === id)].status = 'Closed'
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

    .group-info {
        display: grid;
        grid-template-columns: repeat(5, 1fr) 290px;
        grid-column-gap: 5px;
        margin: 10px 0;
    }

    .send-btn {
        display: flex;
        justify-content: flex-end;
    }

    section {
        align-self: center;
    }
</style>