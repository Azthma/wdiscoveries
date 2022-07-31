<template>
    <div>
        <v-card class="ma-16">
            <v-card tile dark class="pa-3">
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="cities">Cities</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="destinations">Places to visit</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="activities">Things to do</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6 mr-3" @click="delicacies">Delicacies</v-btn>
                <v-btn color="rgba(212, 175, 55, .80)" class="px-6" @click="manga">Manga</v-btn>
            </v-card>
            <div>
                <Manga v-if="data == 'manga'" />
                <Destinations v-else-if="data == 'destinations'" />
                <Activity v-else-if="data == 'activities'" />
                <Delicacy v-else-if="data == 'delicacies'" />
                <City v-else />
            </div>
        </v-card>
    </div>
</template>

<script>
import City from '../../components/admin/City.vue'
import Destinations from '../../components/admin/Destinations.vue'
import Activity from '../../components/admin/Activity.vue'
import Delicacy from '../../components/admin/Delicacy.vue'
import Manga from '../../components/admin/Manga.vue'
export default {
    components: {
        City,
        Destinations,
        Activity,
        Delicacy,
        Manga
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
        manga() {
            this.data = 'manga'
        }
    }
}
</script>