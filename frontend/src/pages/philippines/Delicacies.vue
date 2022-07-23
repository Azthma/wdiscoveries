<template>
    <div>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="11" lg="7">
                <v-img
                    :src="`https://picsum.photos/500/300?image=10`"
                    height="300"
                ></v-img>
                <v-card flat color="transparent" class="mt-5">
                    <div class="text-body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div class="text-body-1 mt-3">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </v-card>
                <v-card flat color="transparent" class="mt-16">
                    <div :class="!$device.mobile ? 'font-weight-bold text-h4 mb-3' : 'font-weight-bold text-h5 mb-3'">Delicacies in the Philippines</div>
                    <v-row>
                        <v-col
                            v-for="(item, index) in delicacies"
                            :key="index"
                            cols="11" lg="12"
                        >
                            <div class="text-h6 font-weight-bold">{{index + 1}}. {{item.name}}</div>
                            <v-img
                                :src="require(`../../../../backend/resources/delicacy/${item.image}`)"
                                class="grey lighten-2 d-flex align-center my-3"
                            ></v-img>
                            <div class="text-body-1">{{item.info}}</div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            delicacies: [],
        }
    },
    computed: {
        ...mapState("admin", ["delicaciesCount"])
    },
    mounted() {
        this.getAll();
    },
    methods: {
        ...mapActions("admin", ["getDelicacies"]),
        async getAll() {
            await this.getDelicacies();
            const res = await this.getDelicacies({
                pageSize: this.delicaciesCount,
            });
            this.delicacies = res.rows;
        },
    }
}
</script>