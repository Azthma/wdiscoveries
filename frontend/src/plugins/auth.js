import jwt_decode from "jwt-decode";
export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                $auth() {
                    try {
                        const token = this.$cookies.get("_token");
                        const decoded = jwt_decode(token);
                        return {
                            user: decoded
                        }
                    } catch (error) {
                        return {
                            user: null
                        } 
                    }
                }
            }
        });
    }
}