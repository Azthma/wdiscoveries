<template>
    <div>
        <v-row class="d-flex justify-center my-10">
            <v-col cols="11" lg="7">
                <v-card flat tile>
                    <v-btn :small="$device.mobile" class="mr-3 mb-3" outlined color="teal">
                        <v-icon small dark class="mr-2">mdi-menu</v-icon>All
                    </v-btn>
                    <v-btn :small="$device.mobile" class="mr-3 mb-3" outlined color="teal">
                        <v-icon small dark class="mr-2">mdi-account-group</v-icon>Tour Guide
                    </v-btn>
                    <v-btn :small="$device.mobile" class="mr-3 mb-3" outlined color="teal">
                        <v-icon small dark class="mr-2">mdi-brush-outline</v-icon>Artist
                    </v-btn>
                    <v-btn :small="$device.mobile" class="mr-3 mb-3" outlined color="teal">
                        <v-icon small dark class="mr-2">mdi-brush-variant</v-icon>Digital Artist
                    </v-btn>
                    <v-btn :small="$device.mobile" class="mr-3 mb-3" outlined color="teal">
                        <v-icon small dark class="mr-2">mdi-laptop</v-icon>Graphics Designer
                    </v-btn>
                    <v-btn :small="$device.mobile" class="mr-3 mb-3" outlined color="teal">
                        <v-icon small dark class="mr-2">mdi-code-tags</v-icon>Web Developer
                    </v-btn>
                    <v-row class="mt-5">
                        <v-col>
                            <v-btn color="primary" @click="createPortfolio">create your portfolio for free</v-btn>
                        </v-col>
                    </v-row>
                    <v-dialog v-model="login" width="500">
                        <Login @loginSuccess="checkLoginSuccess" @register="registerNow" />
                    </v-dialog>
                    <v-dialog v-model="signup" width="500">
                        <Register @registerSuccess="checkRegisterSuccess" @login="loginNow" />
                    </v-dialog>
                    <v-row class="mt-5">
                        <v-col v-for="item in users" :key="item.id" cols="12" lg="3">
                            <v-card
                                class="mx-auto"
                                max-width="344"
                            >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    height="200px"
                                ></v-img>
                                <div class="pa-3">
                                    <div class="text-body-1 font-weight-bold">{{item.name}}</div>
                                    <div class="text-body-2" style="color:gray">{{item.profession}}</div>
                                    <v-btn color="orange lighten-2" class="mt-3" outlined small>Portfolio</v-btn>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Register from "../../components/auth/Register.vue";
import Login from "../../components/auth/Login.vue";
export default {
    components: {
        Register,
        Login
    },
    data () {
        return {
            signup: false,
            login: false,
            users: [
                { id: 1, name: 'Emran Pendaliday', profession: 'Web Developer' },
                { id: 2, name: 'Mark Mandiade', profession: 'Artist' },
                { id: 3, name: 'Jose Rizal', profession: 'Tour Guide' },
                { id: 4, name: 'Bobby Dukes', profession: 'Digital Artist' },
                { id: 5, name: 'Jimmy Collins', profession: 'Graphics Designer' },
            ]
        }
    },
    methods: {
        registerNow(res) {
            this.login = !res;
            this.signup = res;
        },
        loginNow(res) {
            this.signup = !res;
            this.login = res;
        },
        checkRegisterSuccess(res) {
            this.signup = !res;
        },
        checkLoginSuccess(res) {
            this.login = !res;
        },
        createPortfolio() {
            if (!this.$auth.user) {
                this.login = true;
            } else {
                this.$router.push('/portfolio/create').catch(()=>{});
            }
        }
    }
}
</script>