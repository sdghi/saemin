const state = {
	allowAudio: true
};

const getters = {
	getAudioStatus: state => state.allowAudio
};

const mutations = {
	changeAudioStatus(state, { value }) {
		state.allowAudio = value;
	}
};

export default {
	state,
	getters,
	mutations
};
