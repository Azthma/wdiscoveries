<template>
    <div>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="8">
                <div class="font-weight-bold text-h4 mb-3">Delicacies in the Philippines</div>
                <v-row>
                    <v-col
                        v-for="item in delicacies"
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
                                            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h5 white--text pa-6 text-center"
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
            delicacies: [
                {
                    id: 1,
                    name: 'Adobo'
                },
                {
                    id: 2,
                    name: 'Pancit Palabok'
                },
                {
                    id: 3,
                    name: 'Bulalo'
                },
                {
                    id: 4,
                    name: 'Arroz Caldo'
                },
                {
                    id: 5,
                    name: 'Kare-kare'
                },
                {
                    id: 6,
                    name: 'Empanada'
                },
                {
                    id: 7,
                    name: 'Sinigang'
                }
            ],
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