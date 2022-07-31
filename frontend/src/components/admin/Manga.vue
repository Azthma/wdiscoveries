<template>
    <div>
        <v-card flat tile class="pa-3">
            <v-row class="d-flex align-center">
                <v-col cols="8">
                    <v-btn rounded color="success" @click="dialog = true">+ Add Manga Post</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-text-field outlined dense rounded prepend-inner-icon="mdi-magnify" hide-details placeholder="search"></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="mt-3"></v-divider>
            <v-data-table
                :headers="headers"
                :items="mangas"
                :items-per-page="-1"
                hide-default-footer
                class="elevation-0"
            >
                <template v-slot:[`item.image`]>
                    <v-btn x-small color="primary" class="mx-1" fab><v-icon small>mdi-image</v-icon></v-btn>
                </template>
                <template v-slot:[`item.list`]="{ item }">
                    <v-btn x-small color="primary" class="mx-1" fab @click="seeLists(item)"><v-icon small>mdi-list-box</v-icon></v-btn>
                </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-pagination v-model="page" :length="6" class="py-3"></v-pagination>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="800">
            <v-card dark class="pa-10">
                <picture-input
                    ref="pictureRef"
                    width="300"
                    height="150"
                    :hideChangeButton="true"
                    accept="image/jpeg,image/png"
                    :customStrings="{
                        drag: 'Select a photo'
                    }"
                    class="mb-6"
                    @change="onChange"
                ></picture-input>
                <v-text-field v-model="title" light solo hide-details class="mb-3" placeholder="Title"></v-text-field>
                <v-textarea v-model="description" light solo hide-details class="mb-3" placeholder="Description"></v-textarea>
                <v-divider class="mb-3"></v-divider>
                <v-card flat>
                    <div class="mb-5">LIST</div>
                    <v-row v-for="(item, idx) in mangaList" :key="idx">
                        <v-col class="py-0">
                            <div class="font-weight-bold mb-2">{{idx + 1}}. {{item.title}}</div>
                        </v-col>
                    </v-row>
                </v-card>
                <v-divider class="my-6"></v-divider>
                <v-card flat>
                    <v-form>
                        <v-row>
                            <v-col cols="4">
                                <picture-input
                                    ref="pictureList"
                                    width="150"
                                    height="200"
                                    :hideChangeButton="true"
                                    accept="image/jpeg,image/png"
                                    :customStrings="{
                                        drag: 'Select a photo'
                                    }"
                                    class="mb-6"
                                    @change="onListChange"
                                ></picture-input>
                                <div class="d-flex justify-center">
                                <v-btn color="success" class="px-10" @click="addMangaList">Add</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="8">
                                <v-text-field v-model="mangaListData.title" light solo hide-details class="mb-3" placeholder="Title"></v-text-field>
                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field v-model="mangaListData.year" light solo hide-details class="mb-3" placeholder="Year"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-select v-model="mangaListData.status" :items="status" solo light hide-details class="mb-3"></v-select>
                                    </v-col>
                                </v-row>
                                <v-textarea v-model="mangaListData.synopsis" light solo hide-details class="mb-3" placeholder="Synopsis"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
                <v-divider class="my-5"></v-divider>
                <v-btn color="primary" class="px-10 mr-5" @click="saveMangaPost">Save</v-btn>
                <v-btn color="error" class="px-6" @click="dialog = false">Cancel</v-btn>
            </v-card>
        </v-dialog>
        <v-dialog v-model="list_dialog" max-width="800">
            <v-card class="pa-6">
                <div v-for="(item, idx) in dialogListData" :key="idx">
                    <v-row>
                        <v-col cols="3">
                            <v-img :src="require(`../../../../backend/resources/manga/list/${item.image}`)" width="150"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="font-weight-bold text-h6">{{idx + 1}}. {{item.title}}</div>
                            <div>Year: <b>{{item.year}}</b></div>
                            <div>Status: <b>{{item.status}}</b></div>
                            <div class="mt-3">{{item.synopsis}}</div>
                        </v-col>
                    </v-row>
                    <v-divider class="my-6"></v-divider>
                </div>
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
            list_dialog: false,
            page: 1,
            headers: [
                { text: 'ID', sortable: false, value: 'id' },
                { text: 'Image', align: "center", sortable: false, value: 'image' },
                { text: 'Title', sortable: false, value: 'title' },
                { text: 'Description', sortable: false, value: 'description' },
                { text: 'List', align: "center", sortable: false, value: 'list' },
            ],
            mangas: [],
            currentFile: undefined,
            mangaPicture: undefined,
            mangaList: [],
            title: "",
            description: "",
            mangaListData: {
                title: "",
                year: "",
                status: "Ongoing",
                synopsis: ""
            },
            dialogListData: [],
            status: ["Ongoing", "Completed"]
        }
    },
    mounted() {
        this.getAllMangas();
    },
    methods: {
        ...mapActions("admin", ["uploadMangaImage", "addManga", "getMangas"]),
        onChange () {
            if (this.$refs.pictureRef.image) {
                this.currentFile = this.$refs.pictureRef.file;
            }
        },
        onListChange () {
            if (this.$refs.pictureList.image) {
                this.mangaPicture = this.$refs.pictureList.file;
            }
        },
        async addMangaList() {
            let formData = new FormData();
            formData.append('file', this.mangaPicture);
            await this.uploadMangaImage(formData);
            let list = {
                title: this.mangaListData.title,
                year: this.mangaListData.year,
                status: this.mangaListData.status,
                synopsis: this.mangaListData.synopsis,
                image: this.mangaPicture.name
            }
            this.mangaList.push(list);
            this.mangaListData.title = "";
            this.mangaListData.year = "";
            this.mangaListData.status = "Ongoing";
            this.mangaListData.synopsis = "";
            this.$refs.pictureList.removeImage();
        },
        async saveMangaPost() {
            let formData = new FormData();
            formData.append('file', this.currentFile);
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('manga_lists', JSON.stringify(this.mangaList));

            const res = await this.addManga(formData);
            if (res.created) {
                this.getAllMangas();
                this.mangaList = [];
                this.dialog = false;
            }

            this.title = "";
            this.description = "";
            this.$refs.pictureRef.removeImage();
        },
        async getAllMangas() {
            const res = await this.getMangas({
                page: 1,
                pageSize: 100,
            });
            this.mangas = res.rows;
        },
        seeLists(item) {
            this.list_dialog = true;
            this.dialogListData = JSON.parse(item.manga_lists);
        }
    }
}
</script>
<style>
.v-dialog::-webkit-scrollbar {
  display: none;
}
</style>