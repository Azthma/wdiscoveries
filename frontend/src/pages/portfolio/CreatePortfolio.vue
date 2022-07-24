<template>
    <div>
        <v-row class="d-flex justify-center mt-16">
            <v-col cols="11" lg="7">
                <v-card dark class="py-16">
                    <v-row class="d-flex align-center">
                        <v-col cols="12" lg="4">
                            <picture-input
                                ref="profilePicture"
                                width="200"
                                height="200"
                                :hideChangeButton="true"
                                accept="image/jpeg,image/png"
                                :customStrings="{
                                    drag: 'Select a photo'
                                }"
                                :prefill="require(`../../../../backend/resources/user/${$auth.user.image}`)"
                                style="z-index: -1;"
                                class="pic-btn"
                                @change="onChange"
                            ></picture-input>
                        </v-col>
                        <v-col cols="12" lg="8" :class="!$device.mobile ? '' : 'px-6'">
                            <div class="text-h5">{{$auth.user.name}}</div>
                            <v-divider :class="!$device.mobile ? 'my-3 mr-16' : 'my-3'"></v-divider>
                            <v-row>
                                <v-col cols="5">
                                    <div class="text-caption font-weight-bold">GENDER</div>
                                    <div class="text-body-1">{{$auth.user.gender}}</div>
                                </v-col>
                                <v-col cols="7">
                                    <div class="text-caption font-weight-bold">BIRTHDATE</div>
                                    <div class="text-body-1">{{$auth.user.birthdate}}</div>
                                </v-col>
                            </v-row>
                             <v-row>
                                <v-col cols="12" lg="5">
                                    <div class="text-caption font-weight-bold">EMAIL</div>
                                    <div class="text-body-1">{{$auth.user.email}}</div>
                                </v-col>
                                <v-col cols="12" lg="7">
                                    <div class="text-caption font-weight-bold">ADDRESS</div>
                                    <div class="text-body-1">{{$auth.user.address}}</div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="11" lg="7">
                <v-card dark class="pa-6">
                    <div class="text-h5">Portfolio</div>
                    <v-divider class="my-3"></v-divider>
                    <v-row class="d-flex align-center">
                        <v-col cols="12" lg="6">
                            <v-select
                                :items="professions"
                                label="Select Profession"
                                solo
                                outlined
                                hide-details
                                rounded
                            ></v-select>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-btn :class="!$device.mobile ? 'float-end py-6' : 'py-6'" :block="$device.mobile" large rounded outlined color="grey" @click="layout = true"><v-icon class="mr-3">mdi-page-layout-header-footer</v-icon>Change Layout</v-btn>
                        </v-col>
                    </v-row>
                    <v-divider class="my-3"></v-divider>
                    <v-row v-if="change_layout">
                        <v-col
                            v-for="n in 6"
                            :key="n"
                            cols="6"
                            lg="4"
                        >
                            <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                class="grey lighten-2"
                            ></v-img>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-col
                            v-for="y in 6"
                            :key="y"
                            cols="12"
                            lg="6"
                        >
                            <v-img
                                :src="`https://picsum.photos/500/300?image=${y * 5 + 10}`"
                                class="grey lighten-2"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="layout" max-width="400">
            <v-card dark class="overflow-hidden py-10" outlined>
                <v-row class="d-flex justify-center px-16">
                    <v-col v-for="n in 6" :key="n" cols="6">
                        <v-card light height="70"></v-card>
                    </v-col>
                    <v-btn :disabled="!change_layout" color="primary" small @click="changeLayout(false)">{{!change_layout ? 'Selected' : 'Change'}}</v-btn>
                </v-row>
                <v-divider class="my-6"></v-divider>
                <v-row class="d-flex justify-center px-16">
                    <v-col v-for="n in 6" :key="n" cols="4">
                        <v-card light height="70"></v-card>
                    </v-col>
                    <v-btn :disabled="change_layout" color="primary" small @click="changeLayout(true)">{{change_layout ? 'Selected' : 'Change'}}</v-btn>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import PictureInput from 'vue-picture-input';
export default {
    components: {
        PictureInput
    },
    data() {
        return {
            layout: false,
            change_layout: false,
            currentFile: undefined,
            professions: ['Tour Guide', 'Artist', 'Digital Artist', 'Graphics Designer', 'Web Developer'],
        }
    },
    methods: {
        onChange () {
            if (this.$refs.profilePicture.image) {
                this.currentFile = this.$refs.profilePicture.file;
            }
        },
        changeLayout(layout) {
            this.change_layout = layout;
            this.layout = false;
        }
    }
}
</script>
<style>
.pic-btn .btn{
    display: none !important;
}
.pic-btn .picture-inner{
    border: none;
}
</style>