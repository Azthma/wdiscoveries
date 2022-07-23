<template>
    <div>
        <v-card flat tile class="pa-3">
            <v-row class="d-flex align-center">
                <v-col cols="8">
                    <v-btn rounded color="success" @click="dialog = true">+ Add City</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-text-field outlined dense rounded prepend-inner-icon="mdi-magnify" hide-details placeholder="search"></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="mt-3"></v-divider>
            <v-data-table
                :headers="headers"
                :items="cities"
                :items-per-page="-1"
                hide-default-footer
                class="elevation-0"
            >
                <template v-slot:[`item.image`]="{ item }">
                    <v-btn x-small color="primary" class="mx-1" fab @click="seeImage(item)"><v-icon small>mdi-image</v-icon></v-btn>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <div class="d-flex">
                        <v-btn x-small color="success" class="mx-1" fab @click="editItem(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
                        <v-btn x-small color="error" class="mx-1" fab @click="deleteItem(item)"><v-icon small>mdi-delete</v-icon></v-btn>
                    </div>
                </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-pagination v-model="page" :length="6" class="py-3"></v-pagination>
        </v-card>
        <v-dialog v-model="dialog" max-width="800">
            <v-card dark class="pa-10">
                <picture-input
                    ref="cityPicture"
                    width="200"
                    height="200"
                    :hideChangeButton="true"
                    accept="image/jpeg,image/png"
                    :customStrings="{
                        drag: 'Select a photo'
                    }"
                    class="mb-6"
                    @change="onChange"
                ></picture-input>
                <v-text-field v-model="name" light solo hide-details class="mb-3"></v-text-field>
                <v-text-field v-model="country" light solo hide-details class="mb-3"></v-text-field>
                <v-text-field v-model="info" light solo hide-details class="mb-3"></v-text-field>
                <v-btn class="px-10 mt-3" color="success" @click="addNew">save</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import { mapActions } from 'vuex'
export default {
    components: {
        PictureInput
    },
    data () {
        return {
            dialog: false,
            page: 1,
            headers: [
                { text: 'ID', sortable: false, value: 'id' },
                { text: 'Image', align: "center", sortable: false, value: 'image' },
                { text: 'Name', sortable: false, value: 'name' },
                { text: 'Country', sortable: false, value: 'country' },
                { text: 'Info', sortable: false, value: 'info' },
                { text: 'Actions', align: "center", sortable: false, value: 'action' },
            ],
            cities: [],
            name: "",
            country: "Philippines",
            info: "",
            currentFile: undefined,
        }
    },
    mounted() {
        this.getAll();
    },
    methods: {
        ...mapActions("admin", ["addCity", "getCities"]),
        onChange () {
            if (this.$refs.cityPicture.image) {
                this.currentFile = this.$refs.cityPicture.file;
            }
        },
        async addNew() {
            let formData = new FormData();
            formData.append('file', this.currentFile);
            formData.append('name', this.name);
            formData.append('country', this.country);
            formData.append('info', this.info);
            const res = await this.addCity(formData);
            if (res.created) {
                this.name = "";
                this.info = "";
                this.$refs.cityPicture.removeImage();
                this.dialog = false;
                this.getAll();
            }
        },
        async getAll() {
            const res = await this.getCities({
                pageSize: 100,
            });
            this.cities = res.rows;
        },
        editItem(item) {
            console.log(item.id)
        },
        deleteItem(item) {
            console.log(item.id)
        },
        seeImage(item) {
            console.log(item.id)
        }
    }
}
</script>