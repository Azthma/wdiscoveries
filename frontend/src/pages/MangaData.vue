<template>
    <div>
        <v-row class="d-flex justify-center mt-10">
            <v-col cols="11" lg="5">
                <div class="text-h4">{{manga.title}}</div>
                <div class="text-body-1 py-6" style="font-family: Times New Roman,Times,serif !important; font-size:20px !important; line-height:1.3;">{{manga.description}}</div>
                <v-divider class="mb-10"></v-divider>
                <v-row v-for="(item, idx) in manga_list" :key="idx" class="d-flex justify-center">
                    <v-col cols="12" class="pb-0">
                        <div class="text-h6">{{idx + 1}}. {{item.title}}</div>
                    </v-col>
                    <v-col cols="4">
                        <div>Year Released: <b>{{item.year}}</b></div>
                        <div>Status: <b>{{item.status}}</b></div>
                        <v-img :src="require(`../../../backend/resources/manga//list/${item.image}`)" class="mt-3"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <div class="text-body-1" style="font-family: Times New Roman,Times,serif !important; font-size:19px !important; line-height:1.3;">{{item.synopsis}}</div>
                    </v-col>
                    <v-col cols="12">
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="11" lg="3" class="pl-10">
                <v-card height="300">

                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            manga: {},
            manga_list: []
        }
    },
    mounted() {
        this.getMangaData();
    },
    methods: {
        ...mapActions("views", ["getManga"]),
        async getMangaData() {
            const res = await this.getManga(this.$route.params.id);
            this.manga = res;
            this.manga_list = JSON.parse(this.manga.manga_lists)
        },
    }
}
</script>