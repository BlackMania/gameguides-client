const generalStore = {
    state: {
        selectedGame: ""
    },
    mutations: {
        changeSelectedGame(state, newGame) {
            state.selectedGame = newGame;
        }
    },
    actions: {
    },
    modules: {

    },
    getters: {
        selectedGame: state => state.selectedGame
    }
}

export default generalStore;