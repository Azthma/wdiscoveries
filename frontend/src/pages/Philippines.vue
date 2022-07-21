<template>
    <div>
        <v-card flat tile dark height="400">

        </v-card>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="8">
                <div class="font-weight-bold text-h4 mb-3">Cities in the Philippines</div>
                <v-row>
                    <v-col
                        v-for="item in philippines"
                        :key="item.id"
                        class="d-flex child-flex"
                        cols="3"
                    >
                        <v-hover v-slot="{ hover }">
                            <v-img
                                :src="`https://picsum.photos/500/300?image=${(item.id - 1) * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${(item.id - 1) * 5 + 10}`"
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
                                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h5 white--text"
                                                @click="view(item)"
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
                        <v-btn color="primary">See More</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            philippines: [
                {
                    id: 1,
                    name: 'First'
                },
                {
                    id: 2,
                    name: 'Second'
                },
                {
                    id: 3,
                    name: 'Third'
                },
                {
                    id: 4,
                    name: 'Fourth'
                },
                {
                    id: 5,
                    name: 'Fifth'
                },
                {
                    id: 6,
                    name: 'Sixth'
                },
                {
                    id: 7,
                    name: 'Seventh'
                }
            ]
        }
    },
    methods: {
        view(item) {
            console.log(item.name)
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