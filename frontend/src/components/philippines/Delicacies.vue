<template>
    <div>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="11" md="10" lg="7">
                <div :class="!$device.mobile ? 'font-weight-bold text-h4 mb-3' : 'font-weight-bold text-h5 mb-3'">Delicacies in the Philippines</div>
                <v-row class="d-flex justify-start">
                    <v-col
                        v-for="item in delicacies"
                        :key="item.id"
                        class="d-flex child-flex"
                        cols="4"
                        lg="3"
                    >
                        <v-hover v-slot="{ hover }">
                            <v-img
                                :src="require(`../../../../backend/resources/delicacy/${item.image}`)"
                                aspect-ratio="1"
                                class="grey lighten-2"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                                <a>
                                    <v-expand-transition>
                                        <div
                                            v-if="hover"
                                            :class="!$device.mobile 
                                                ? 'd-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h5 white--text pa-6 text-center' 
                                                : 'd-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-caption white--text pa-6 text-center'"
                                        >
                                            {{item.name}}
                                        </div>
                                    </v-expand-transition>
                                </a>
                            </v-img>
                        </v-hover>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-center">
                        <v-btn color="primary" @click="viewDelicacies">See More</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            delicacies: [],
        }
    },
    mounted() {
        this.getAll();
    },
    methods: {
        ...mapActions("admin", ["getDelicacies"]),
        async getAll() {
            const res = await this.getDelicacies({
                pageSize: !this.$device.mobile ? 8 : 9,
            });
            this.delicacies = res.rows;
        },
        viewDelicacies() {
            this.$router.push(`/philippines/delicacies`).catch(()=>{});
        }
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