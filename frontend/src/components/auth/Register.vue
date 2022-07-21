<template>
    <v-card dark class="pa-10">
        <v-text-field v-model="name" hide-details placeholder="Full Name" light solo></v-text-field>
        <div v-if="error_name != ''" class="text-caption" style="color:#D24545">{{error_name}}</div>

        <v-radio-group v-model="gender" hide-details row class="mt-3">
            <v-radio
                label="Male"
                value="male"
            ></v-radio>
            <v-radio
                label="Female"
                value="female"
            ></v-radio>
        </v-radio-group>

        <div>
            <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field 
                        v-model="birthdate" 
                        solo
                        light
                        class="mt-3"
                        hide-details
                        placeholder="Birthdate"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="birthdate" @input="menu = false"></v-date-picker>
            </v-menu>
            <div v-show="error_birthdate != ''" class="text-caption" style="color:#D24545">{{error_birthdate}}</div>
        </div>

        <v-text-field v-model="address" class="mt-3" hide-details placeholder="Address" light solo></v-text-field>
        <div v-if="error_address != ''" class="text-caption" style="color:#D24545">{{error_address}}</div>

        <v-text-field v-model="email" class="mt-3" hide-details placeholder="Email" light solo></v-text-field>
        <div v-if="error_email != ''" class="text-caption" style="color:#D24545">{{error_email}}</div>

        <v-text-field v-model="password" class="mt-3" hide-details placeholder="Password" type="password" light solo></v-text-field>
        <div v-if="error_password != ''" class="text-caption" style="color:#D24545">{{error_password}}</div>

        <v-btn block color="primary" class="mt-6" large @click="signUp">register</v-btn>
        <a @click="login"><div class="text-decoration-underline text-center mt-2" style="color:white">Already have an account? Login now</div></a>
    </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            name: '',
            gender: 'male',
            birthdate: '',
            address: '',
            email: '',
            password: '',
            error_name: '',
            error_birthdate: '',
            error_address: '',
            error_email: '',
            error_password: ''
        }
    },
    methods: {
        ...mapActions("user", ["register"]),
        async signUp() {
            this.error_name = '';
            this.error_birthdate = '';
            this.error_address = '';
            this.error_email = '';
            this.error_password = '';
            let payload = {
                name: this.name,
                gender: this.gender,
                birthdate: this.birthdate,
                address: this.address,
                email: this.email,
                password: this.password
            }
            const res = await this.register(payload);
            if (res.created) {
                this.name = '';
                this.gender = 'male';
                this.birthdate = '';
                this.address = '';
                this.email = '';
                this.password = '';
                this.$emit("registerSuccess", true);
            } else {
                res.errors.map((err) => {
                    if(err.param == 'name') { this.error_name = err.msg }
                    if(err.param == 'birthdate') { this.error_birthdate =  err.msg }
                    if(err.param == 'address') { this.error_address = err.msg }
                    if(err.param == 'email') { this.error_email = err.msg }
                    if(err.param == 'password') { this.error_password = err.msg }
                })
            }
        },
        login() {
            this.$emit("login", true);
        }
    }
};
</script>