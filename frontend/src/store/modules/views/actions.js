/*eslint-disable */
const actions = {
	async getMangas({}, payload) {
		try {
			const page = payload && (payload.page || 1);
			const search = payload && payload.search ? payload.search : "";
			const pageSize = payload && payload.pageSize || 10;
			const data = await this._vm.$serverApi.get('/mangas', {
				params: {
					page,
					pageSize,
					search,
				},
			});
			return data.data;
		} catch (error) {
		  	return error;
		}
	},

	async getManga({}, payload) {
		try {
			const data = await this._vm.$serverApi.get(`/manga/${payload}`, payload);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
};

export default actions;
