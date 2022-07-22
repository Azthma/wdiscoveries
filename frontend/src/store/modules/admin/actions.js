/*eslint-disable */
const actions = {
	//city
	async addCity({}, payload) {
		try {
		  const data = await this._vm.$serverApi.post('/city', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
	async getCities({}, payload) {
		try {
		  const data = await this._vm.$serverApi.get('/cities', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
	//destination
	async addDestination({}, payload) {
		try {
		  const data = await this._vm.$serverApi.post('/destination', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
	async getDestinations({}, payload) {
		try {
		  const data = await this._vm.$serverApi.get('/destinations', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
};

export default actions;
