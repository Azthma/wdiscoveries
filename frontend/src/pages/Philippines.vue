<template>
    <div>
        <v-card flat tile dark height="400">

        </v-card>
        <Cities />
        <Destinations />
        <Activities />
        <Delicacies />
    </div>
</template>

<script>
import Cities from '../components/philippines/Cities.vue'
import Destinations from '../components/philippines/Destinations.vue'
import Activities from '../components/philippines/Activities.vue'
import Delicacies from '../components/philippines/Delicacies.vue'
export default {
    components: {
        Cities,
        Destinations,
        Activities,
        Delicacies
    }
}
</script>