/*eslint-disable */
const actions = {
	async getCity({}, payload) {
		try {
			const data = await this._vm.$serverApi.get(`/city/${payload}`, payload);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
	async getDestinationsByCity({}, payload) {
		try {
			const data = await this._vm.$serverApi.get(`/city/destinations/${payload}`, payload);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
};

export default actions;
