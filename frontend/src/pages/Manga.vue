<template>
    <div>
        <v-row class="d-flex justify-center mt-10">
            <v-col cols="11" lg="5">
                <v-row v-for="item in mangas" :key="item.id">
                    <v-col>
                        <a @click="seePost(item)"><div class="text-h4" style="color:#1976d2">{{item.title}}</div></a>
                        <div class="text-overline font-weight-light mb-3" style="color:gray; font-size:16px !important;">{{item.created_at}}</div>
                        <v-img :src="require(`../../../backend/resources/manga/${item.image}`)" height="300"></v-img>
                        <div class="text-body-1 py-6" style="font-family: Times New Roman,Times,serif !important; font-size:20px !important; line-height:1.3;">{{item.description}}</div>
                        <v-divider class="mt-3"></v-divider>
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
            mangas: [],
        }
    },
    mounted() {
        this.getAllMangas();
    },
    methods: {
        ...mapActions("views", ["getMangas"]),
        async getAllMangas() {
            const res = await this.getMangas({
                page: 1,
                pageSize: 100,
            });
            this.mangas = res.rows;
        },
        seePost(item){
            if (this.$route.path != `/manga/${item.id}`) {
                this.$router.push(`/manga/${item.id}`).catch(()=>{});
            }
        }
    }
}
</script>