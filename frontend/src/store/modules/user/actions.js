/*eslint-disable */
const actions = {
	async register({}, payload) {
		try {
		  const data = await this._vm.$serverApi.post('/register', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
	async login({}, payload) {
		try {
		  const data = await this._vm.$serverApi.post('/login', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
};

export default actions;
