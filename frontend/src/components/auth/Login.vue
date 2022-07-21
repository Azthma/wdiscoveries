<template>
    <v-card dark class="pa-10">
        <v-text-field v-model="email" hide-details placeholder="Email" light solo @keyup.enter="signIn"></v-text-field>
        <div v-if="error_email != ''" class="text-caption" style="color:#D24545">{{error_email}}</div>

        <v-text-field v-model="password" class="mt-3" hide-details placeholder="Password" type="password" light solo @keyup.enter="signIn"></v-text-field>
        <div v-if="error_password != ''" class="text-caption" style="color:#D24545">{{error_password}}</div>

        <v-btn block color="primary" class="mt-6" large @click="signIn">login</v-btn>
        <a @click="register"><div class="text-decoration-underline text-center mt-2" style="color:white">Don't have an account? Register now</div></a>
    </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            email: '',
            password: '',
            error_email: '',
            error_password: ''
        }
    },
    methods: {
        ...mapActions("user", ["login"]),
        async signIn() {
            this.error_email = '';
            this.error_password = '';
            let payload = {
                email: this.email,
                password: this.password
            };
            const res = await this.login(payload);
            if (res.success) {
                this.$cookies.set("_token", res.user.token);
                this.email = '';
                this.password = '';
                this.$emit("loginSuccess", true);
            } else {
                if(res.error == 'Invalid email') { this.error_email = res.error }
                if(res.error == 'Invalid password') { this.error_password = res.error }
            }
        },
        register() {
            this.$emit("register", true);
        }
    }
};
</script>