const generalStore = {
    state: {
        supportedGames: []
    },
    mutations: {
        SET_SUPPORTED_GAMES(state, supportedGames) {
            state.supportedGames = supportedGames;
        }
    },
    actions: {
        setSupportedGames ({ commit }, games) {
            commit('SET_SUPPORTED_GAMES', games);
        }
    },
    modules: {

    },
    getters: {
        supportedGames: state => state.supportedGames
    }
}

export default generalStore;