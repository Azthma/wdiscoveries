<template>
    <div>
        <v-app-bar dark>
            <a @click="home"><v-toolbar-title class="mx-2" style="color:white;">PROJECT</v-toolbar-title></a>
            <v-spacer></v-spacer>
            <v-menu transition="slide-y-transition" offset-y>
                <template v-slot:activator="{ on }">
                    <a v-on="on"><div class="font-weight-bold text-body-1 px-5" style="color:white;">Discoveries <v-icon>mdi-chevron-down</v-icon></div></a>
                </template>
                <v-list class="mt-2 py-0 rounded">
                    <v-list-item @click="destinations">
                        <v-list-item-title>Philippines</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="manga">
                        <v-list-item-title>Manga</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="anime">
                        <v-list-item-title>Anime</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="movies">
                        <v-list-item-title>Movies</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <a><div class="font-weight-bold text-body-1 px-5" style="color:white;">Portfolios</div></a>
            <a><div class="font-weight-bold text-body-1 px-5" style="color:white;">Online Tools</div></a>
            <v-spacer></v-spacer>
            <v-text-field prepend-inner-icon="mdi-magnify" hide-details dense color="inherit" solo light placeholder="Search"></v-text-field>
            <v-divider vertical inset class="mx-5" style="border: 1px solid gray;"></v-divider>
            <div v-if="!$auth.user" class="d-flex align-center">
                <v-btn color="primary" @click="login = true">
                    Login
                </v-btn>
            </div>
            <v-menu v-else transition="slide-y-transition" left offset-y>
                <template v-slot:activator="{ on }">
                    <a v-on="on"><v-avatar color="white" size="35"><v-icon color="black">mdi-account</v-icon></v-avatar></a>
                </template>
                <v-list class="mt-2 py-0 rounded">
                    <v-list-item>
                        <v-list-item-title class="text-end">{{$auth.user.email}}</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item @click="logout">
                        <v-list-item-title class="text-end">Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-dialog v-model="login" width="500">
                <Login @loginSuccess="checkLoginSuccess" @register="registerNow" />
            </v-dialog>
            <v-dialog v-model="signup" width="500">
                <Register @registerSuccess="checkRegisterSuccess" @login="loginNow" />
            </v-dialog>
        </v-app-bar>
    </div>
</template>
<script>
import Register from "./auth/Register.vue";
import Login from "./auth/Login.vue";
export default {
    components: {
        Register,
        Login
    },
    data() {
        return {
            signup: false,
            login: false,
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
        logout() {
            this.$cookies.remove("_token")
        },
        home() {
            if (this.$route.path != '/') {
                this.$router.push('/').catch(()=>{});
            }
        },
        destinations() {
            if (this.$route.path != '/philippines') {
                this.$router.push('/philippines').catch(()=>{});
            }
        },
        manga() {
            console.log("manga")
        },
        anime() {
            console.log("anime")
        },
        movies() {
            console.log("movies")
        },
    }
};
</script>