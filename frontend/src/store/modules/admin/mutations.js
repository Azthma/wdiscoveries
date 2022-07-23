const mutations = {
	SET_CITY_COUNT(state, payload) {
		state.cityCount = payload;
	},
    SET_DESTINATION_COUNT(state, payload) {
		state.destinationCount = payload;
	},
    SET_ACTIVITIES_COUNT(state, payload) {
		state.activitiesCount = payload;
	},
    SET_DELICACIES_COUNT(state, payload) {
		state.delicaciesCount = payload;
	},
};

export default mutations;
