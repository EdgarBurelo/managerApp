<template>
    <div class="discount-theme">
        <section>
            <img src="../../assets/image.jpeg" width="100%" style="display: block;"/>
        </section>
        <section>
            <h1>Discount Group</h1>

            <h2>How does it work? </h2>
            <p class="group-info">Add your name to the group by midnight Saturday, <b>{{ formatDate() }}.</b> After the deadline, 
                once we have reached 50 sign-ups, we will open the group discount for you to purchase your 
                discounted AMBOSS access!
            </p>

            <div class="group-status">
                <p>{{ groupData.university }} Group Discount Sign-up</p>
                <p>Total In group: {{ groupData.invitee ? groupData.invitee.users.length : 0  }}</p>
            </div>

            <div>
                <h4>Sign me up!</h4>
                <div class="add-user">
                    <v-text-field :disabled="groupData.status !== 'Progress'" v-model="user.mail" outlined label="Email"></v-text-field>
                    <v-text-field :disabled="groupData.status !== 'Progress'" v-model="user.name" outlined label="Name"></v-text-field>
                </div>
            </div>
            <div style="margin: 10px 0">
                <v-btn :disabled="groupData.status !== 'Progress'" color="primary" style="" @click="submitNewUser">
                    <span>submit</span>
                </v-btn>
                <span v-if="groupData.status !== 'Progress'" style="margin-left: 10px; color: Red">The Discount Group has been closed.</span>
            </div>

            <div class="actual-discount">
                <span style="font-size: 25px; color: #3081D5">{{ groupData.invitee ? groupData.invitee.users.length : 0  }}</span>
                <span><b> total persons </b></span>
                <span style="font-size: 25px; color: #3081D5">{{ groupData.discount }}%</span>
            </div>
            <section style="margin: 10px auto;">
                <h4>Regular price for AMBOSS Plus</h4>
                <div class="pricing">
                    <span>$123</span>
                    <span>3 months</span>
                    <span>$235</span>
                    <span>6 months</span>
                    <span>$365</span>
                    <span>for 12 months</span>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
import moment from 'moment';
import { API } from '../../api/api-common'

export default {
    name: 'DiscountGroup',
    props: {
        groupId: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            user: {
                mail: '',
                name: ''
            },
            groupData: {
                university: 1,
                invitee: null
            }
        }
    },
    async created () {
        await this.loadDiscountGroup();
    },
    methods: {
        submitNewUser () {
            const body = {
                user: this.user,
                id: this.groupId
            }
             API.post('/addUser', body).then(response => {
                console.log(response);
            })
        },

        loadDiscountGroup () {
            API.get(`/${this.groupId}`).then(response => {
                this.groupData = response.data[0];
            })
        },

        formatDate () {
            return this.groupData ? moment(this.groupData.endDate).format('dddd, d MMMM YYYY') : 'Date';
        }
    }
}
</script>

<style scoped>
    .discount-theme {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        
    }

    img {
        border-radius: 10px;
    }

    .add-user {
        display: grid;
        margin-top: 10px;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px
    }

    >>> .v-text-field__details {
        display: none;
    }

    .group-info {
        font-size: 19px
    }

    h1 {
        font-size: 2em;
        margin-bottom: 15px
    }

    .group-status, .group-status.p {
        margin: 20px 0;
        text-align: center;
    }

    p {
        margin-bottom: 3px !important;
        font-size: 24px
    }

    .pricing {
        display: grid;
        grid-template-columns: repeat(2, 1fr)
    }

    .actual-discount {
        text-align: center;
        font-size: 17px;
    }
</style>