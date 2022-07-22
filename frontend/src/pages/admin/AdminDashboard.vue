<template>
    <div>
        <v-card class="ma-16">
            <v-card dark class="pa-3">
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="cities">Cities</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="destinations">Places to visit</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3">Things to do</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6">Delicacies</v-btn>
            </v-card>
            <Destinations v-if="data == 'destinations'" />
            <City v-else />
        </v-card>
    </div>
</template>

<script>
import City from '../../components/admin/City.vue'
import Destinations from '../../components/admin/Destinations.vue'
export default {
    components: {
        City,
        Destinations
    },
    data() {
        return {
            data: 'city'
        }
    },
    methods: {
        cities() {
            this.data = 'city'
        },
        destinations() {
            this.data = 'destinations'
        }
    }
}
</script>