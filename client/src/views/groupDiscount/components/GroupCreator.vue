<template>
    <v-card>
        <v-card-title class="card-title">Create New Group Discount</v-card-title>
        
        <div class="form-container">
            <v-text-field v-model="university" outlined label="University"></v-text-field>
            <div>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px" >
                    <template  v-slot:activator="{ on }">
                        <v-text-field 
                            style="grid-row-start: 1; grid-column-start: 2"
                            v-model="date"
                            label="End Date"
                            v-on="on"
                            readonly
                            outlined >
                        </v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                    <div class="flex-grow-1"></div>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </div>

            <div style="grid-column: 1 / span 2" class="discount-rules">
                <div v-for="(interval, index) in intervals" :key="index">
                    <span>{{ interval }} discount(%):</span>
                    <v-select v-model="invervalValues[interval]" :items="options" single-line hide-details label="select" menu-props="auto"></v-select>
                </div>
            </div>
            
            <div v-if="invalidArray.length > 0">
                <section v-for="invalid in invalidArray" :key="invalid">
                    <span style="color: red;">{{ invalid }}</span><br />
                </section>
            </div>

        </div>
        
        <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="error" @click="resetGroup" text>
                <span>cancel</span>
            </v-btn>
            <v-btn @click="saveNewGroup" text>
                <span>submit</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import moment from 'moment';

export default {
    name: 'GroupCreator',
    data () {
        return {
            university: '',
            date: moment().format('YYYY-MM-DD'),
            menu: false,
            options: ['10','20','30','40','50','60','70','80','90','100'],
            intervals: ['10+ people', '20+ people', '30+ people', '50+ people'],
            invervalValues: {
                "10+ people": '10',
                "20+ people": '20',
                "30+ people": '30',
                "50+ people": '50',
            },
            invalidArray: []
        }
    },
    methods: {
        fieldValidation () {
            this.invalidArray = [];
            if (moment(this.date).isBefore(moment().format('YYYY-MM-DD'))) {
                this.invalidArray.push('The Date Should Be in the Future')
            }
            if (this.university.length < 2) {
                this.invalidArray.push('You need to specify a university Name')
            }
            return this.invalidArray.length <= 0;
        },

        saveNewGroup () {
            if (this.fieldValidation()) {
                let newGroupDiscount = {
                    university: this.university,
                    endDate: this.date,
                    intervals: this.invervalValues,
                    status: 'Progress',
                    discount: 0,
                }
                this.$emit('saved', newGroupDiscount)
                this.resetGroup()
            }
        },

        resetGroup () {
            this.invalidArray = []
            this.data= moment().format('YYYY-MM-DD');
            this.university = '';
            this.invervalValues= {
                "10+ people": '10',
                "20+ people": '20',
                "30+ people": '30',
                "50+ people": '50',
            }
        }
    }
}
</script>

<style scoped>
    .card-title {
        font-size: 18px;
    }

    .form-container {
        margin-top: 10px;
        padding: 0 10px;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-column-gap: 10px
    }

    .discount-rules {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: 30px;
        margin: 10px 0;
    }

    >>> .v-text-field__details {
        display: none;
    }
</style>