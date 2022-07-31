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
	async getCities({commit}, payload) {
		try {
			const page = payload && (payload.page || 1);
			const search = payload && payload.search ? payload.search : "";
			const pageSize = payload && payload.pageSize || 10;
			const data = await this._vm.$serverApi.get('/cities', {
				params: {
					page,
					pageSize,
					search,
				},
			});
			commit('SET_CITY_COUNT', data.data.count);
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
	async getDestinations({commit}, payload) {
		try {
			const page = payload && (payload.page || 1);
			const search = payload && payload.search ? payload.search : "";
			const pageSize = payload && payload.pageSize || 10;
			const data = await this._vm.$serverApi.get('/destinations', {
				params: {
					page,
					pageSize,
					search,
				},
			});
			commit('SET_DESTINATION_COUNT', data.data.count);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
	//delicacy
	async addDelicacy({}, payload) {
		try {
		  const data = await this._vm.$serverApi.post('/delicacy', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
	async getDelicacies({commit}, payload) {
		try {
			const page = payload && (payload.page || 1);
			const search = payload && payload.search ? payload.search : "";
			const pageSize = payload && payload.pageSize || 10;
			const data = await this._vm.$serverApi.get('/delicacies', {
				params: {
					page,
					pageSize,
					search,
				},
			});
			commit("SET_DELICACIES_COUNT", data.data.count);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
	//activity
	async addActivity({}, payload) {
		try {
		  const data = await this._vm.$serverApi.post('/activity', payload);
		  return data.data;
		} catch (error) {
		  return error;
		}
	},
	async getActivities({commit}, payload) {
		try {
			const page = payload && (payload.page || 1);
			const search = payload && payload.search ? payload.search : "";
			const pageSize = payload && payload.pageSize || 10;
			const data = await this._vm.$serverApi.get('/activities', {
				params: {
					page,
					pageSize,
					search,
				},
			});
			commit("SET_ACTIVITIES_COUNT", data.data.count);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
	//manga
	async uploadMangaImage({}, payload) {
		try {
		  await this._vm.$serverApi.post('/upload-manga-list-image', payload);
		} catch (error) {
		  return error;
		}
	},
	async addManga({}, payload) {
		try {
			const data = await this._vm.$serverApi.post('/manga', payload);
			return data.data;
		} catch (error) {
		  	return error;
		}
	},
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
};

export default actions;
