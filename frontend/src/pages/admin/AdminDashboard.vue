<template>
    <div>
        <v-card class="ma-16">
            <v-card dark class="pa-3">
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="cities">Cities</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="destinations">Places to visit</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="activities">Things to do</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6" @click="delicacies">Delicacies</v-btn>
            </v-card>
            <Destinations v-if="data == 'destinations'" />
            <Activity v-else-if="data == 'activities'" />
            <Delicacy v-else-if="data == 'delicacies'" />
            <City v-else />
        </v-card>
    </div>
</template>

<script>
import City from '../../components/admin/City.vue'
import Destinations from '../../components/admin/Destinations.vue'
import Activity from '../../components/admin/Activity.vue'
import Delicacy from '../../components/admin/Delicacy.vue'
export default {
    components: {
        City,
        Destinations,
        Activity,
        Delicacy
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
        },
        activities() {
            this.data = 'activities'
        },
        delicacies() {
            this.data = 'delicacies'
        },
    }
}
</script>