<template>
    <div>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="11" lg="7">
                <v-img
                    :src="getImage.image"
                    :height="!$device.mobile ? '300' : '200'"
                    class="d-flex align-center"
                >
                    <v-card flat color="transparent">
                        <div class="text-center font-weight-bold text-h3" style="color:white;">{{city.name}}</div>
                    </v-card>
                </v-img>
                <v-card flat color="transparent" class="mt-5">
                    <div class="text-body-1">{{city.info}}</div>
                </v-card>
                <v-card flat color="transparent" class="mt-16">
                    <div :class="!$device.mobile ? 'font-weight-bold text-h4 mb-3' : 'font-weight-bold text-h5 mb-3'">Places to visit in {{city.name}}</div>
                    <v-row class="d-flex justify-start">
                        <v-col
                            v-for="(item, idx) in destinations"
                            :key="idx"
                            cols="12"
                            lg="4"
                        >
                            <v-card
                                class="mx-auto"
                                max-width="374"
                            >
                                <v-img
                                    height="250"
                                    :src="item.image"
                                ></v-img>
                                <v-card-title>{{item.name}}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center">
                            <v-btn color="primary" @click="seeMoreDestinations">See More</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card flat color="transparent" class="mt-16">
                    <div :class="!$device.mobile ? 'font-weight-bold text-h4 mb-3' : 'font-weight-bold text-h5 mb-3'">Things to do in {{city.name}}</div>
                    <v-row class="d-flex justify-start">
                        <v-col
                            v-for="(item, idx) in activities"
                            :key="idx"
                            cols="12"
                            lg="4"
                        >
                            <v-card
                                class="mx-auto"
                                max-width="374"
                            >
                                <v-img
                                    height="250"
                                    :src="`https://picsum.photos/500/300?image=${(idx - 1) * 5 + 10}`"
                                ></v-img>
                                <v-card-title>{{item.name}}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center">
                            <v-btn color="primary" @click="seeMoreActivities">See More</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            destinations: [
                {
                    id: 1,
                    name: 'Calle Crisologo, Vigan'
                },
                {
                    id: 2,
                    name: 'Intramuros and Fort Santiago, Manila'
                },
                {
                    id: 3,
                    name: 'Taal Volcano and Lake, Tagaytay, and Batangas'
                },
                {
                    id: 4,
                    name: 'Nacpan Beach, El Nido'
                },
                {
                    id: 5,
                    name: 'Tubbataha Reef, Palawan'
                },
                {
                    id: 4,
                    name: 'Mayon Volcano, Albay, Bicol'
                },
                
            ],
            activities: [
                {
                    id: 1,
                    name: 'Sightseeing'
                },
                {
                    id: 2,
                    name: 'Visit Museums'
                },
                {
                    id: 3,
                    name: 'Go on a Pilgrimage Tour'
                },
                {
                    id: 4,
                    name: 'Wakeboarding'
                },
                {
                    id: 5,
                    name: 'Explore Nature at National Parks'
                },
                {
                    id: 6,
                    name: 'River Tubing'
                },
            ],
            city: {},
        }
    },
    computed: {
        getImage () {
            return {
                ...this.city,
                image: this.city.image && require(`../../../../../backend/resources/city/${this.city.image}`)
            }
        },
    },
    mounted() {
        this.getCityData();
        this.getDestinations();
    },
    methods: {
        ...mapActions("philippines", ["getCity", "getDestinationsByCity"]),
        async getCityData() {
            const res = await this.getCity(this.$route.params.id);
            this.city = res;
        },
        async getDestinations() {
            const res = await this.getDestinationsByCity(this.$route.params.id);
            this.destinations = res.rows;
            this.destinations.map((data) => {
                data.image = require(`../../../../../backend/resources/destinations/${data.image}`)
            })
        },
        seeMoreDestinations() {
            this.$router.push(`/philippines/${this.city.name}/destinations/${this.city.id}`).catch(()=>{});
        },
        seeMoreActivities() {
            this.$router.push(`/philippines/${this.city.name}/things-to-do/${this.city.id}`).catch(()=>{});
        },
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>