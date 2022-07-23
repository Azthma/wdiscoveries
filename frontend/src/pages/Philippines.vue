<template>
    <div>
        <v-row>
            <v-col>
                <v-img :src="require('../assets/rice-terraces.jpg')" height="400" class="d-flex align-center">
                    <div :class="!$device.mobile ? 'text-center text-h2 font-weight-bold' : 'text-center text-h3 font-weight-bold'" style="color:white;">Philippines</div>
                </v-img>
            </v-col>
        </v-row>
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